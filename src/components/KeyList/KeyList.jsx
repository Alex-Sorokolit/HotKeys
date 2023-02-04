import { Item } from 'components/Item/Item';
import css from './KeyList.module.css';

export const KeysList = ({ visibleShortCuts, deleteShortcut }) => {
  return (
    <>
      {visibleShortCuts.length > 0 && (
        <section>
          <ul className={css.list}>
            {visibleShortCuts.map(item => (
              <Item key={item.id} item={item} deleteShortcut={deleteShortcut} />
            ))}
          </ul>
        </section>
      )}
    </>
  );
};
