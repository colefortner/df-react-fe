import styles from "./MainHeader.module.css";

const MainHeader = (props) => {
  return <header class={styles["main-header"]}>{props.children}</header>;
};

export default MainHeader;
