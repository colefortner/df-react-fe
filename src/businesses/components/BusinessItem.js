import styles from "./BusinessItem.module.css";

import Card from "../../shared/components/UIElements/Card";

const BusinessItem = (props) => {
  return (
    <li class={styles["place-item"]}>
      <Card class={styles["place-item__content"]}>
        <div class={styles["place-item__image"]}>
          <img src={props.image} alt={props.title} />
        </div>
        <div class={styles["place-item__info"]}>
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div class={styles["place-item__actions"]}>
          <button>View On Map</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </Card>
    </li>
  );
};

export default BusinessItem;
