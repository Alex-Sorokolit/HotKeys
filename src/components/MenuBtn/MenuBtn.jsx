import { GiHamburgerMenu } from 'react-icons/gi';
import css from './MenuBtn.module.css';

export const MenuBtn = ({ openMenu }) => {
  return (
    <button className={css.menuBtn} type="button" onClick={openMenu}>
      <GiHamburgerMenu className={css.menuIcon} />
    </button>
  );
};
