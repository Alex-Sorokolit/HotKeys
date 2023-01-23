import { AddCategory } from 'components/AddCategory/AddCategory';
import css from './AppBar.module.css';

export const AppBar = ({ categories, onSubmit }) => {
  return (
    <div className={css.wrapper}>
      <div>
        {categories.map(({ id, category }) => (
          <button className={css.item} key={id}>
            {category}
          </button>
        ))}
      </div>
      <AddCategory onSubmit={onSubmit} />
    </div>
  );
};
