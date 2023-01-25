import css from './Item.module.css';
export const Item = ({ item }) => {
  return (
    <li className={css.item}>
      <span className={css.shortCut}>{item.shortcut}</span>
      <span className={css.description}>{item.description}</span>
      <button>Menu</button>
    </li>
  );
};