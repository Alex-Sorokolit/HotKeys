import { useState, useEffect } from 'react';
import Select from 'react-select';
import css from './Form.module.css';
import { nanoid } from 'nanoid';

export const Form = ({ categories, onSubmit }) => {
  const [options, setOptions] = useState([]);
  const [category, setCategory] = useState('');
  const [shortcut, setShortcut] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const makeOptions = () => {
      return categories.map(category => ({
        value: category.id,
        label: category.category,
      }));
    };
    setOptions(makeOptions);
  }, [categories]);

  const handleSelectChange = event => {
    setCategory(event.label);
  };
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
      catogories: category,
      shortcut: shortcut,
      description: description,
    };
    onSubmit(newShortCut);
    reset();
  };
  const reset = () => {
    // setCategory('')
    setShortcut('');
    setDescription('');
  };

  return (
    <section>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.select}>
          <label className={css.label}>
            List
            <Select
              name="category"
              options={options}
              onChange={handleSelectChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            ShortCut
            <div>
              <input
                className={css.input}
                type="text"
                name="shortcut"
                onChange={handleInputChange}
                required
              />
            </div>
          </label>
        </div>
        <div className={css.desc}>
          <label>
            Description
            <div>
              <input
                className={css.inputDesc}
                type="text"
                name="description"
                onChange={handleInputChange}
                required
              />
            </div>
          </label>
        </div>
        <button className={css.button} type="submit">
          Add
        </button>
      </form>
    </section>
  );
};

// makeOptions = () => {
//   return this.state.breeds.map(breed => ({
//     value: breed.id,
//     label: breed.name,
//   }));
// };

// handleChange = option => {
//   this.props.onSelect(option.value);
// };
