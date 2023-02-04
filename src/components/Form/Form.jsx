import { useState } from 'react';
import css from './Form.module.css';
import { nanoid } from 'nanoid';
import { SearchBox } from 'components/SearchBox/SearchBox';
// import { AiOutlinePlus } from 'react-icons/ai';

export const Form = ({ changeFilter, category, onSubmit }) => {
  const [shortcut, setShortcut] = useState('');
  const [description, setDescription] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'shortcut':
        setShortcut(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
    }
    return;
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newShortCut = {
      id: nanoid(),
      category: category,
      shortcut: shortcut,
      description: description,
    };
    onSubmit(newShortCut);
    reset();
  };
  const reset = () => {
    setShortcut('');
    setDescription('');
  };
  const shortCutId = nanoid();
  const descriptionId = nanoid();

  return (
    <section>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor={shortCutId} className={css.label}>
          ShortCut
          <div>
            <input
              // autoFocus
              className={css.input}
              value={shortcut}
              type="text"
              name="shortcut"
              onChange={handleInputChange}
              id={shortCutId}
              plaseholder=""
              required
            />
          </div>
        </label>

        <label htmlFor={descriptionId} className={css.label}>
          Description
          <div>
            <input
              className={css.input}
              value={description}
              type="text"
              name="description"
              onChange={handleInputChange}
              id={descriptionId}
              required
            />
          </div>
        </label>
        <button className={css.button} type="submit">
          {/* <AiOutlinePlus className={css.addIcon} /> */}
          Add
        </button>

        <SearchBox changeFilter={changeFilter} />
      </form>
    </section>
  );
};
