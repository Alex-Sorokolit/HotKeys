// import { MenuBtn } from 'components/MenuBtn/MenuBtn';
import { AiFillDelete } from 'react-icons/ai';
import css from './Item.module.css';
export const Item = ({ item, deleteShortcut }) => {
  return (
    <li className={css.item}>
      <span className={css.shortCut}>{item.shortcut}</span>
      <span className={css.description}>{item.description}</span>
      {/* <MenuBtn /> */}
      <button
        type="button"
        className={css.deleteBtn}
        onClick={() => deleteShortcut(item.id)}
      >
        <AiFillDelete className={css.deleteIcon} />
      </button>
    </li>
  );
};
