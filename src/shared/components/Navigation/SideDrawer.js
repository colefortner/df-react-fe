import styles from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  return <aside class={styles["side-drawer"]}>{props.children}</aside>;
};

export default SideDrawer;
