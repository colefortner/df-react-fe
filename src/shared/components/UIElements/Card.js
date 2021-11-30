import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div class={styles[`card ${props.class}`]} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
