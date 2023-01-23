import css from './SearchBox.module.css';
export const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.wrapper}>
      <input
        type="text"
        value={value}
        onChange={event => onChange(event.target.value)}
      ></input>
    </div>
  );
};
