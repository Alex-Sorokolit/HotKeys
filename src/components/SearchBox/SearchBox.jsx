import css from './SearchBox.module.css';
import { GoSearch } from 'react-icons/go';
export const SearchBox = ({ changeFilter }) => {
  return (
    <div className={css.searchWrapper}>
      <input className={css.input} type="text" onChange={changeFilter}></input>
      <GoSearch className={css.icon} />
    </div>
  );
};
