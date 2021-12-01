import { NavLink } from "react-router-dom";

import styles from "./NavLinks.module.css";

const NavLinks = (props) => {
  return (
    <ul class={styles["nav-links"]}>
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/1/businesses">MY BUSINESSES</NavLink>
      </li>
      <li>
        <NavLink to="/businesses/new">ADD BUSINESS</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
