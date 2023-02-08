import { AiFillDelete } from 'react-icons/ai';
import css from './Item.module.css';

export const Item = ({ item, deleteShortcut }) => {
  return (
    <div className={css.item}>
      <span className={css.shortCut}>{item.shortcut}</span>
      <span className={css.description}>{item.description}</span>
      <button
        type="button"
        className={css.deleteBtn}
        onClick={() => deleteShortcut(item.id)}
      >
        <AiFillDelete className={css.deleteIcon} />
      </button>
    </div>
  );
};
