import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
export const Header = ({ onSelectCategory }) => {
  return (
    <section>
      <NavLink
        to={'/'}
        className={css.logo}
        onClick={() => onSelectCategory('')}
      >
        HotKeys
      </NavLink>
    </section>
  );
};
