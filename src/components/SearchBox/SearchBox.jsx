import css from './SearchBox.module.css';
export const SearchBox = ({ value, onChange }) => {
  return (
    <input
      className={css.input}
      type="text"
      value={value}
      onChange={event => onChange(event.target.value)}
    ></input>
  );
};
