import { GiHamburgerMenu } from 'react-icons/gi';
import css from './MenuBtn.module.css';
// import { ContextMenu } from 'components/ContextMenu/ContextMenu';

export const MenuBtn = ({ openMenu, name }) => {
  return (
    <button
      className={css.menuBtn}
      type="button"
      onClick={openMenu}
      // name={name}
    >
      <GiHamburgerMenu className={css.menuIcon} />
      {/* {isOpen && <ContextMenu />} */}
    </button>
  );
};
