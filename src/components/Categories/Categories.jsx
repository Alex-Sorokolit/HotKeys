import { AddCategory } from 'components/AddCategory/AddCategory';
import css from './Categories.module.css';
// import { useState } from 'react';
import { Category } from 'components/Category/Category';

export const Categories = ({
  categories,
  onSubmit,
  onSelectCategory,
  deleteCategory,
}) => {
  // const [itemIdx, setItemIdx] = useState('');

  return (
    <section className={css.wrapper}>
      <h2>Categories</h2>
      <ul className={css.list}>
        {categories.length > 0 &&
          categories.map(category => (
            <li key={category.id} className={css.item}>
              <Category category={category} />
            </li>
          ))}
      </ul>
      <AddCategory
        onSubmit={onSubmit}
        onSelectCategory={onSelectCategory}
        deleteCategory={deleteCategory}
      />
    </section>
  );
};

// показуємо меню якщо  isOpen та активна категорія співпадає із категорією даного item
