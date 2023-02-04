import css from './ContextMenu.module.css';

// import {Confirm} from 'components/Confirm/Confirm';
export const ContextMenu = ({ children }) => {
  return <div className={css.menu}> {children}</div>;
};
