import { useState } from 'react';
import css from './Form.module.css';
import { nanoid } from 'nanoid';
import { SearchBox } from 'components/SearchBox/SearchBox';

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
        <label>
          Search
          <SearchBox changeFilter={changeFilter} />
        </label>

        <label htmlFor={shortCutId}>
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
              required
            />
          </div>
        </label>

        <label htmlFor={descriptionId} className={css.desc}>
          Description
          <div>
            <input
              className={css.inputDesc}
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
          Add
        </button>
      </form>
    </section>
  );
};
