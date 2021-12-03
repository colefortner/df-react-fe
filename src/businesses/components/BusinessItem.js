import styles from "./BusinessItem.module.css";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

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
          <Button inverse>View On Map</Button>
          <Button to={`/businesses/${props.id}`}>Edit</Button>
          <Button danger>Delete</Button>
        </div>
      </Card>
    </li>
  );
};

export default BusinessItem;
