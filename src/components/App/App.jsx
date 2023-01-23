import { Form } from '../Form/Form';
import { Header } from '../Header/Header';
import { AppBar } from 'components/AppBar/AppBar';
import { KeysList } from 'components/KeyList/KeyList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import css from './App.module.css';
import { useEffect, useState } from 'react';
import { getCategories } from 'services/FakeApi';

export const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <div>
      <Header />
      <Form categories={categories} />
      {/* Keyboard */}
      <section className={css.section}>
        <AppBar categories={categories} />
        <div>
          <SearchBox />
          <KeysList />
        </div>
      </section>
    </div>
  );
};
