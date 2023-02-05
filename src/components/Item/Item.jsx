import { MenuBtn } from 'components/MenuBtn/MenuBtn';
// import { AiFillDelete } from 'react-icons/ai';
import { ContextMenu } from 'components/ContextMenu/ContextMenu';

import css from './Item.module.css';
export const Item = ({ item, deleteShortcut, selectedItemIdx, selectItem }) => {
  return (
    <li className={css.item}>
      <span className={css.shortCut}>{item.shortcut}</span>
      <span className={css.description}>{item.description}</span>
      <MenuBtn onClick={() => selectItem(item.id)} />
      <ContextMenu></ContextMenu>
    </li>
  );
};
