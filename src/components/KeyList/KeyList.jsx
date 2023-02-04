import { Item } from 'components/Item/Item';
import css from './KeyList.module.css';
import { useState } from 'react';
import { useToggle } from 'hooks/useToggle';
import { useConfirmToggle } from 'hooks/useToggle';
export const KeysList = ({ visibleShortCuts, deleteShortcut }) => {
  const [selectedItemIdx, setSelectedItemIdx] = useState(null);
  const { isOpen, toggle, close } = useToggle(false);
  const { isConfirmOpen, confirmToggle, confirmClose } =
    useConfirmToggle(false);

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
                isOpen={isOpen}
                toggle={toggle}
                close={close}
                isConfirmOpen={isConfirmOpen}
                confirmToggle={confirmToggle}
                confirmClose={confirmClose}
                selectItem={selectItem}
              />
            ))}
          </ul>
        </section>
      )}
    </>
  );
};
