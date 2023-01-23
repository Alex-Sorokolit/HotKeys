import css from './Item.module.css';
export const Item = () => {
  return (
    <li className={css.item}>
      <span className={css.shortCut}>ShortCut</span>
      <span className={css.description}>Description</span>
      <button>Menu</button>
    </li>
  );
};
