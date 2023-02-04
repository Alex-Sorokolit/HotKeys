import { MenuBtn } from 'components/MenuBtn/MenuBtn';
// import { AiFillDelete } from 'react-icons/ai';
import { ContextMenu } from 'components/ContextMenu/ContextMenu';
import { Confirm } from 'components/Confirm/Confirm';

import css from './Item.module.css';
export const Item = ({
  item,
  deleteShortcut,
  selectedItemIdx,
  isOpen,
  toggle,
  close,
  isConfirmOpen,
  confirmToggle,
  confirmClose,
  selectItem,
}) => {
  return (
    <li className={css.item}>
      <span className={css.shortCut}>{item.shortcut}</span>
      <span className={css.description}>{item.description}</span>
      <MenuBtn openMenu={toggle} onClick={() => selectItem(item.id)} />

      {isOpen && selectedItemIdx === item.id && (
        <ContextMenu>
          <button
            type="button"
            onClick={confirmToggle}
            className={css.deleteBtn}
          >
            {/* <AiFillDelete /> */}
            Delete
          </button>
          {isConfirmOpen && (
            <Confirm>
              <button
                className={css.yes}
                type="button"
                onClick={() => {
                  deleteShortcut(item.id);
                  confirmClose();
                  close();
                }}
              >
                Yes
              </button>
              <button
                className={css.no}
                type="button"
                onClick={() => {
                  confirmClose();
                  close();
                }}
              >
                No
              </button>
            </Confirm>
          )}
        </ContextMenu>
      )}

      {/* <button
        type="button"
        className={css.deleteBtn}
        onClick={() => deleteShortcut(item.id)}
      >
        <AiFillDelete className={css.deleteIcon} />
      </button> */}
    </li>
  );
};
