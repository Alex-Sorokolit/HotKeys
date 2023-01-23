import { useState, useEffect } from 'react';
import Select from 'react-select';
import css from './Form.module.css';

export const Form = ({ categories }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const makeOptions = () => {
      return categories.map(category => ({
        value: category.id,
        label: category.category,
      }));
    };
    setOptions(makeOptions);

    // const reset = () => {
    //   // setName('');
    //   // setNumber('');
    // };
  }, [categories]);

  const handleSubmit = event => {
    event.preventDefault();
    // const form = event.target;
    // Очистка форми
    // reset();
  };

  return (
    <section>
      <form className={css.form} onSubmit={handleSubmit}>
        <div>
          <label className={css.label}>
            Category
            <Select
              options={options}
              required
              // onChange={this.handleChange}
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
