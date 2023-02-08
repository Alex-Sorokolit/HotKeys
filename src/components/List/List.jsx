import { Reorder } from 'framer-motion';
import { Item } from 'components/Item/Item';
import css from './List.module.css';

export const List = ({
  visibleShortCuts = [],
  deleteShortcut,
  setShortcuts,
}) => {
  return (
    <>
      {visibleShortCuts.length > 0 && (
        <section>
          <Reorder.Group
            axis="y"
            values={visibleShortCuts}
            onReorder={setShortcuts}
            className={css.list}
          >
            {visibleShortCuts.map(item => (
              <Reorder.Item key={item.id} value={item}>
                <Item item={item} deleteShortcut={deleteShortcut} />
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </section>
      )}
    </>
  );
};
