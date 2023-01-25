import { AddCategory } from 'components/AddCategory/AddCategory';
import css from './AppBar.module.css';
import { useState } from 'react';

export const AppBar = ({ categories, onSubmit, onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleChange = event => {
    onSelectCategory(event.currentTarget.name);
    // console.log(event.currentTarget.id);
    setActiveCategory(event.currentTarget.id);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.buttonWrapper}>
        {categories.map(({ id, category }) => (
          <button
            className={id === activeCategory ? css.active : css.button}
            key={id}
            id={id}
            onClick={handleChange}
            name={category}
          >
            {category}
          </button>
        ))}
      </div>
      <AddCategory onSubmit={onSubmit} />
    </div>
  );
};
