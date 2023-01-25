import { GiHamburgerMenu } from 'react-icons/gi';
import css from './MenuBtn.module.css';

export const MenuBtn = () => {
  return (
    <button className={css.menuBtn} type="button">
      <GiHamburgerMenu className={css.menuIcon} />
    </button>
  );
};
