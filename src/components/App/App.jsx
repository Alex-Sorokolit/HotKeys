import { Form } from '../Form/Form';
import { Header } from '../Header/Header';
import { AppBar } from 'components/AppBar/AppBar';
import { KeysList } from 'components/KeyList/KeyList';
import css from './App.module.css';
import { useEffect, useState } from 'react';
import { getCategories, getShortCut } from 'services/FakeApi';

export const App = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [shortcuts, setShortcuts] = useState([]);
  const [filteredShortCuts, setFilteredShortCuts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getCategories().then(setCategories);
    getShortCut().then(setShortcuts);
  }, []);

  useEffect(() => {
    const filterShortcuts = () => {
      const filtered = shortcuts.filter(
        shortcut => shortcut.category === category
      );
      console.log(filtered);
      setFilteredShortCuts(filtered);
    };
    filterShortcuts();
  }, [category, shortcuts]);

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  // Фільтр
  const getVisibleContacts = () => {
    // state.filter нормалізуємо один раз, а не при кожній ітерації методу filter
    const normalizedFilter = filter.toLocaleLowerCase();

    return filteredShortCuts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  function addShortcut(newShortcut) {
    setShortcuts(prevShortcuts => [...prevShortcuts, newShortcut]);
  }

  function addCategory(id, newCategory) {
    const data = {
      id: id,
      category: newCategory,
    };
    setCategories(prevCategory => [...prevCategory, data]);
  }

  function onSelectCategory(categoryName) {
    setCategory(categoryName);
  }

  return (
    <div>
      <Header />
      <Form category={category} onSubmit={addShortcut} />
      {/* Keyboard */}
      <section className={css.section}>
        <AppBar
          changeFilter={changeFilter}
          categories={categories}
          onSelectCategory={onSelectCategory}
          onSubmit={addCategory}
        />
        <div>
          <KeysList shortcuts={getVisibleContacts()} />
        </div>
      </section>
    </div>
  );
};
