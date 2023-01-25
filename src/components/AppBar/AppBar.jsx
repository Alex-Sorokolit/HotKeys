import { AddCategory } from 'components/AddCategory/AddCategory';
import css from './AppBar.module.css';
import { useState } from 'react';

export const AppBar = ({ categories, onSubmit, onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const className = [css.item];
  if (activeCategory) className.push('isSelected');
  const handleChange = event => {
    onSelectCategory(event.currentTarget.name);
    // console.log(event.currentTarget.id);
    setActiveCategory(event.currentTarget.id);
  };

  return (
    <div className={css.wrapper}>
      <div>
        {categories.map(({ id, category }) => (
          <button
            selected={id === activeCategory}
            className={css.button}
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
