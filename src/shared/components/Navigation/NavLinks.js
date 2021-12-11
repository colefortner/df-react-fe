import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import styles from "./NavLinks.module.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul class={styles["nav-links"]}>
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/1/businesses">MY BUSINESSES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/businesses/new">ADD BUSINESS</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUt</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
