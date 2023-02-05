import { Item } from 'components/Item/Item';
import css from './KeyList.module.css';
import { useState } from 'react';
export const KeysList = ({ visibleShortCuts, deleteShortcut }) => {
  const [selectedItemIdx, setSelectedItemIdx] = useState(null);

  const selectItem = id => {
    console.log('click');
    setSelectedItemIdx(id);
  };
  return (
    <>
      {visibleShortCuts.length > 0 && (
        <section>
          <ul className={css.list}>
            {visibleShortCuts.map(item => (
              <Item
                key={item.id}
                item={item}
                deleteShortcut={deleteShortcut}
                selectedItemIdx={selectedItemIdx}
                selectItem={selectItem}
              />
            ))}
          </ul>
        </section>
      )}
    </>
  );
};
