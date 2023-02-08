import { AddCategory } from 'components/AddCategory/AddCategory';
import css from './Categories.module.css';
import { useState, useEffect } from 'react';
import { MenuBtn } from 'components/MenuBtn/MenuBtn';
import { NavLink, useLocation } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';

// import { AiFillDelete } from 'react-icons/ai';
import { useToggle } from 'hooks/useToggle';
import { ContextMenu } from 'components/ContextMenu/ContextMenu';
import { Confirm } from 'components/Confirm/Confirm';
import { useConfirmToggle } from 'hooks/useToggle';

export const Categories = ({
  categories,
  onSubmit,
  onSelectCategory,
  deleteCategory,
  changeFilter,
}) => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(null);
  const { isOpen, toggle, close } = useToggle(false);
  const { isConfirmOpen, confirmToggle, confirmClose } =
    useConfirmToggle(false);

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
    // console.log(event.currentTarget.name);
    setActiveCategory(event.currentTarget.name);
    onSelectCategory(activeCategory);
    confirmClose();
  };

  return (
    <section className={css.wrapper}>
      <SearchBox changeFilter={changeFilter} />
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
                <MenuBtn openMenu={toggle} />
              </NavLink>
              {isOpen && category === activeCategory && (
                <ContextMenu>
                  <button
                    type="button"
                    onClick={confirmToggle}
                    className={css.deleteBtn}
                  >
                    {/* <AiFillDelete /> */}
                    Delete
                  </button>
                  {isConfirmOpen && (
                    <Confirm>
                      <button
                        className={css.yes}
                        type="button"
                        onClick={() => {
                          deleteCategory(id, category);
                          confirmClose();
                          close();
                        }}
                      >
                        Yes
                      </button>
                      <button
                        className={css.no}
                        type="button"
                        onClick={() => {
                          confirmClose();
                          close();
                        }}
                      >
                        No
                      </button>
                    </Confirm>
                  )}
                </ContextMenu>
              )}
            </li>
          ))}
      </ul>
      <AddCategory onSubmit={onSubmit} />
    </section>
  );
};

// показуємо меню якщо  isOpen та активна категорія співпадає із категорією даного item
