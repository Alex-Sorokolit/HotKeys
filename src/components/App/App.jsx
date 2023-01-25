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
  const [categoryShortCuts, setCategoryShortCuts] = useState([]);
  const [filter, setFilter] = useState('');
  const [visibleShortCuts, setVisibleShortCuts] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
    getShortCut().then(setShortcuts);
  }, []);

  useEffect(() => {
    const categoryShortcuts = () => {
      const filtered = shortcuts.filter(
        shortcut => shortcut.category === category
      );
      // console.log(filtered);
      setCategoryShortCuts(filtered);
    };
    categoryShortcuts();
  }, [category, shortcuts]);

  // Фільтр ____________________________________________________

  useEffect(() => {
    const getVisibleContacts = () => {
      // state.filter нормалізуємо один раз, а не при кожній ітерації методу filter
      const normalizedFilter = filter.toLowerCase();

      return categoryShortCuts.filter(shortcut =>
        shortcut.shortcut.toLowerCase().includes(normalizedFilter)
      );
    };

    setVisibleShortCuts(getVisibleContacts());
  }, [categoryShortCuts, filter]);

  const changeFilter = event => {
    // console.log(event.target.value);
    setFilter(event.target.value);
  };

  function addShortcut(newShortcut) {
    setShortcuts(prevShortcuts => [...prevShortcuts, newShortcut]);
  }

  // Category _____________________________________________________
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
      <Form
        changeFilter={changeFilter}
        category={category}
        onSubmit={addShortcut}
      />
      {/* Keyboard */}
      <section className={css.section}>
        <AppBar
          categories={categories}
          onSelectCategory={onSelectCategory}
          onSubmit={addCategory}
        />
        <div>
          <KeysList shortcuts={visibleShortCuts} />
        </div>
      </section>
    </div>
  );
};

// Додати іконку до пошуку
// Відреголювати ширину пошуку
// Після сабміта форми, фокус на введення хоткея
