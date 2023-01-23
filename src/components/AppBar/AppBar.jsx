import css from './AppBar.module.css';

export const AppBar = ({ categories }) => {
  return (
    <div className={css.wrapper}>
      <div>
        {categories.map(({ id, category }) => (
          <button className={css.item} key={id}>
            {category}
          </button>
        ))}
      </div>
      <button className={css.button} type="button">
        Add Category
      </button>
    </div>
  );
};
