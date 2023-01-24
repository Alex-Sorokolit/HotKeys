import { AddCategory } from 'components/AddCategory/AddCategory';
import css from './AppBar.module.css';

export const AppBar = ({ categories, onSubmit, onSelectCategory }) => {
  const handleChange = event => {
    onSelectCategory(event.currentTarget.name);
  };

  return (
    <div className={css.wrapper}>
      <div>
        {categories.map(({ id, category }) => (
          <button
            className={css.item}
            key={id}
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
