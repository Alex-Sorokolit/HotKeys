import css from './SearchBox.module.css';
export const SearchBox = ({ value, changeFilter }) => {
  return (
    <input
      className={css.input}
      type="text"
      value={value}
      onChange={event => changeFilter(event.target.value)}
    ></input>
  );
};
