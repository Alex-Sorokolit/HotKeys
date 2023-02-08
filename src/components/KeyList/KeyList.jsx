// import css from './KeyList.module.css';
import { List } from 'components/List/List';

export const KeysList = ({
  visibleShortCuts,
  deleteShortcut,
  setShortcuts,
}) => {
  return (
    <List
      visibleShortCuts={visibleShortCuts}
      deleteShortcut={deleteShortcut}
      setShortcuts={setShortcuts}
    />
  );
};
