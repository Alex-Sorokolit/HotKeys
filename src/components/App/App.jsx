import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { addShortCut } from 'services/FakeApi';
import { useSessionStorage } from 'hooks/useSessionStorage';

// Components
import { Form } from 'components/Form/Form';
import { Header } from 'components/Header/Header';
import { Categories } from 'components/Categories/Categories';
import { KeysList } from 'components/KeyList/KeyList';
// Pages
import { Route, Routes, Navigate } from 'react-router-dom';
import css from './App.module.css';

export const App = () => {
  // Всі категорії
  const [categories, setCategories] = useSessionStorage('categories');
  // Вибрана категорія
  const [category, setCategory] = useState('');
  // Всі shortcuts
  const [shortcuts, setShortcuts] = useSessionStorage('shortcuts');
  // По категоріях  shortcuts
  const [categoryShortCuts, setCategoryShortCuts] = useState([]);
  // Фільтровані пошуком shortcuts
  const [visibleShortCuts, setVisibleShortCuts] = useState([]);
  // Пошук
  const [filter, setFilter] = useState('');

  const navigate = useNavigate();
  // Фільтр по категоріях ______________________________________________
  useEffect(() => {
    const categoryShortcuts = () => {
      const filtered = shortcuts.filter(
        shortcut => shortcut.category === category
      );
      // console.log(filtered);
      setCategoryShortCuts(filtered);
    };
    categoryShortcuts();

    addShortCut(shortcuts);
  }, [category, shortcuts]);

  // Фільтр  Пошук____________________________________________________

  useEffect(() => {
    const getVisibleShortCuts = () => {
      const normalizedFilter = filter.toLowerCase();

      return categoryShortCuts.filter(
        shortcut =>
          shortcut.shortcut.toLowerCase().includes(normalizedFilter) ||
          shortcut.description.toLowerCase().includes(normalizedFilter)
      );
    };

    setVisibleShortCuts(getVisibleShortCuts());
  }, [categoryShortCuts, filter]);

  const changeFilter = event => {
    // console.log(event.target.value);
    setFilter(event.target.value);
  };
  // ShortCuts ______________________________________________________
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
  // видалення категорії
  function deleteCategory(id, category) {
    // console.log('delete category');
    // фільтруємо, видяляємо контакти
    setShortcuts(prevShortcuts =>
      prevShortcuts.filter(shortCut => shortCut.category !== category)
    );
    // записуємо всі категорії крім видаленої
    setCategories(prevState =>
      prevState.filter(category => category.id !== id)
    );
    setCategory('');
    navigate('/');
  }
  // записуємо вибрану категорію в стейт
  function onSelectCategory(categoryName) {
    setCategory(categoryName);
  }

  return (
    <>
      <div className="container">
        <Header />

        <div className={css.mainFlex}>
          <Categories
            categories={categories}
            onSelectCategory={onSelectCategory}
            onSubmit={addCategory}
            deleteCategory={deleteCategory}
          />
          <div>
            {category !== '' && (
              <Form
                changeFilter={changeFilter}
                category={category}
                onSubmit={addShortcut}
              />
            )}
            {/* Keyboard */}

            <Routes>
              <Route path="/" element={App}></Route>
              <Route
                path="/:categoryName"
                element={<KeysList shortcuts={visibleShortCuts} />}
              />
              <Route path="*" element={<Navigate to="/" />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

// Категорія за замовчуванням
// Відреголювати ширину пошуку
// Після сабміта форми, фокус на введення хоткея
// В AppBar кнопки замінити на елементи в яких будуть меню
// Валідація на форму категорії (одним словом, без пробілів)
// Валідація на форму додавання хоткея
// Якщо нічого не знайдено показати no matches
// Якщо категорія не вибрата показати "choose category"
// Якщо категорій немає показати "create new category"
// Стилізувати категорію

// Меню категорії:
// видалити
// перейменувати

// Меню хоткея
// видалити

// якщо список категорій змінився змінити список хоткеїв, якщо зникла категорія то контакти теж повинні зникнути

// Якщо ім'я категорії співпадає із ім'ям категорії хоткея,то видаляємо

// Якщо видяляємо категорію, переходимо на початкову сторінку

// Якщо знаходимось на категорії при перезапуску вибрати категорію
