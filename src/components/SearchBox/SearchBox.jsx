import css from './SearchBox.module.css';
export const SearchBox = ({ changeFilter }) => {
  return (
    <input className={css.input} type="text" onChange={changeFilter}></input>
  );
};
