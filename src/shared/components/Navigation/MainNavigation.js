import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

import styles from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button class={styles["main-navigation__menu-btn"]}>
        <span />
        <span />
        <span />
      </button>
      <h1 class={styles["main-navigation__title"]}>
        <Link to="/">YourBusinesses</Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};
export default MainNavigation;
