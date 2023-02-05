import { NavLink } from 'react-router-dom';
import { ContextMenu } from 'components/ContextMenu/ContextMenu';
import { useState } from 'react';
import css from './Category.module.css';

export const Category = ({
  category: { id, category },
  onSelectCategory,
  // deleteCategory,
}) => {
  // const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(null);
  // дістяємо назву категорії із url (для відновлення після перезагрузки сторінки)
  // useEffect(() => {
  //   // console.log(location.pathname.slice(1, location.length));
  //   const url = location.pathname.slice(1, location.length);
  //   if (url !== '') {
  //     onSelectCategory(url);
  //   }
  // }, [location.length, location.pathname, onSelectCategory]);

  // дістаємо назву категорії із кнопки категорії
  const handleChange = event => {
    // console.log(event.currentTarget.name);
    setActiveCategory(event.currentTarget.name);
    onSelectCategory(activeCategory);
  };
  return (
    <>
      <NavLink
        // className={css.category}
        className={category === activeCategory ? css.active : css.category}
        to={category.toLowerCase()}
        id={id}
        onClick={handleChange}
        name={category}
      >
        {category}
        <button type="button">Menu</button>
      </NavLink>

      <ContextMenu></ContextMenu>
    </>
  );
};
