import ReactDOM from "react-dom";

import styles from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  const content = <aside class={styles["side-drawer"]}>{props.children}</aside>;

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
