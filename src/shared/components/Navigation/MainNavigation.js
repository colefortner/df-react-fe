import styles from "./MainNavigation.module.css";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button class={styles["main-navigaton__menu-btn"]}>
        <span />
        <span />
        <span />
      </button>
      <h1 class={styles["main-navigation__title"]}>
        <Link to="/">YourBusinesses</Link>
      </h1>
      <nav>...</nav>
    </MainHeader>
  );
};
export default MainNavigation;
