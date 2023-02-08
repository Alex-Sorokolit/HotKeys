// import { useEffect, useState } from 'react';
import { Reorder } from 'framer-motion';
import { Item } from 'components/Item/Item';

export const List = ({
  visibleShortCuts = [],
  deleteShortcut,
  setShortcuts,
}) => {
  return (
    <>
      {visibleShortCuts.length > 0 && <section></section>}
      <Reorder.Group
        axis="y"
        values={visibleShortCuts}
        onReorder={setShortcuts}
      >
        {visibleShortCuts.map(item => (
          <Reorder.Item key={item.id} value={item}>
            <Item item={item} deleteShortcut={deleteShortcut} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </>
  );
};
