import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
export const Header = () => {
  return (
    <section>
      <NavLink to={'/'} className={css.logo}>
        HotKeys
      </NavLink>
    </section>
  );
};
