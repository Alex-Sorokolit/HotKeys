import css from './AddCategory.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { BsPlusSquare } from 'react-icons/bs';

export const AddCategory = ({ onSubmit }) => {
  const [category, setCategory] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const categoryId = nanoid();
    const form = event.currentTarget;
    const categoryName = form.newCategory.value.trim();

    if (categoryName === '') {
      console.log('write new name list');
      return;
    }
    if (categoryName === category) {
      console.log(`${categoryName} already is`);
      return;
    }
    setCategory(categoryName);
    onSubmit(categoryId, categoryName);
    form.reset();
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        New List
        <input className={css.input} type="text" name="newCategory" required />
      </label>
      <button className={css.button} type="submit">
        <BsPlusSquare className={css.addIcon} />
      </button>
    </form>
  );
};
