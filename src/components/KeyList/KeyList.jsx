import { Item } from 'components/Item/Item';
import css from './KeyList.module.css';

import { useToggle } from 'hooks/useToggle';
import { ContextMenu } from 'components/ContextMenu/ContextMenu';
import { Confirm } from 'components/Confirm/Confirm';
import { useConfirmToggle } from 'hooks/useToggle';

export const KeysList = ({ visibleShortCuts, deleteShortcut }) => {
  const { isOpen, toggle, close } = useToggle(false);
  const { isConfirmOpen, confirmToggle, confirmClose } =
    useConfirmToggle(false);

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
