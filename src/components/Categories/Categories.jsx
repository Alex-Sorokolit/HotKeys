import { AddCategory } from 'components/AddCategory/AddCategory';
import css from './Categories.module.css';
import { useState, useEffect } from 'react';
import { MenuBtn } from 'components/MenuBtn/MenuBtn';
import { NavLink, useLocation } from 'react-router-dom';

import { useToggle } from 'hooks/useToggle';
import { ContextMenu } from 'components/ContextMenu/ContextMenu';
import { AiFillDelete } from 'react-icons/ai';

export const Categories = ({
  categories,
  onSubmit,
  onSelectCategory,
  deleteCategory,
}) => {
  const location = useLocation();

  const [activeCategory, setActiveCategory] = useState(null);
  const { isOpen, toggle } = useToggle(false);

  // дістяємо назву категорії із url (для відновлення після перезагрузки сторінки)
  useEffect(() => {
    // console.log(location.pathname.slice(1, location.length));
    const url = location.pathname.slice(1, location.length);
    if (url !== '') {
      onSelectCategory(url);
    }
  }, [location.length, location.pathname, onSelectCategory]);

  // дістаємо назву категорії із кнопки категорії
  const handleChange = event => {
    console.log(event.currentTarget.name);
    setActiveCategory(event.currentTarget.name);
    onSelectCategory(activeCategory);
  };

  return (
    <div className={css.wrapper}>
      <h2>Categories</h2>
      <ul className={css.list}>
        {categories.length > 0 &&
          categories.map(({ id, category }) => (
            <li
              key={id}
              className={category === activeCategory ? css.active : css.item}
            >
              <NavLink
                className={css.category}
                to={category.toLowerCase()}
                id={id}
                onClick={handleChange}
                name={category}
              >
                {category}
                <MenuBtn
                  openMenu={toggle}
                  // name={category}
                />
              </NavLink>
              {isOpen && category === activeCategory && (
                <ContextMenu>
                  <button>
                    <AiFillDelete />
                  </button>
                </ContextMenu>
              )}
            </li>
          ))}
      </ul>
      <AddCategory onSubmit={onSubmit} />
    </div>
  );
};
