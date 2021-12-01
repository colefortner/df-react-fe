import ReactDOM from "react-dom";

import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div class={styles["backdrop"]} onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
