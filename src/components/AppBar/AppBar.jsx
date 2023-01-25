import { AddCategory } from 'components/AddCategory/AddCategory';
import css from './AppBar.module.css';
import { useState } from 'react';
import { MenuBtn } from 'components/MenuBtn/MenuBtn';

export const AppBar = ({ categories, onSubmit, onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleChange = event => {
    onSelectCategory(event.currentTarget.name);
    // console.log(event.currentTarget.id);
    setActiveCategory(event.currentTarget.id);
  };

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {categories.length > 0 &&
          categories.map(({ id, category }) => (
            <li key={id} className={css.item}>
              <button
                className={id === activeCategory ? css.active : css.button}
                id={id}
                onClick={handleChange}
                name={category}
              >
                {category}
              </button>
              <MenuBtn />
            </li>
          ))}
      </ul>
      <AddCategory onSubmit={onSubmit} />
    </div>
  );
};
