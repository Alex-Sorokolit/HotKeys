import { Form } from '../Form/Form';
import { Header } from '../Header/Header';
import { AppBar } from 'components/AppBar/AppBar';
import { KeysList } from 'components/KeyList/KeyList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import css from './App.module.css';
import { useEffect, useState } from 'react';
import { getCategories, getShortCut } from 'services/FakeApi';

export const App = () => {
  const [categories, setCategories] = useState([]);
  const [shortcuts, setShortcuts] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
    getShortCut().then(setShortcuts);
  }, []);

  function addCategory(id, newCategory) {
    const data = {
      id: id,
      category: newCategory,
    };
    setCategories(prevCategory => [...prevCategory, data]);
  }
  function addShortcut(newShortcut) {
    setShortcuts(prevShortcuts => [...prevShortcuts, newShortcut]);
    console.log(shortcuts);
  }
  return (
    <div>
      <Header />
      <Form categories={categories} onSubmit={addShortcut} />
      {/* Keyboard */}
      <section className={css.section}>
        <AppBar categories={categories} onSubmit={addCategory} />
        <div>
          <SearchBox />
          <KeysList shortcuts={shortcuts} />
        </div>
      </section>
    </div>
  );
};
