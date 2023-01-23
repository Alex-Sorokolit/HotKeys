import { Item } from 'components/Item/Item';
import css from './KeyList.module.css';

export const KeysList = ({ shortcuts }) => {
  return (
    <ul className={css.list}>
      {shortcuts.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};
