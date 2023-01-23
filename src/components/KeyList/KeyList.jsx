import { Item } from 'components/Item/Item';
import css from './KeyList.module.css';

export const KeysList = () => {
  return (
    <ul className={css.list}>
      <Item />
      <Item />
      <Item />
    </ul>
  );
};
