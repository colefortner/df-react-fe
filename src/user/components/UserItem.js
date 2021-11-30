import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import { Link } from "react-router-dom";

import styles from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <li class={styles["user-item"]}>
      <Card class={styles["user-item__content"]}>
        <Link to={`/${props.id}/businesses`}>
          <div class={styles["user-item__image"]}>
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div class={styles["user-item__info"]}>
            <h2>{props.name}</h2>
            <h3>
              {props.businessCount}{" "}
              {props.businessCount === 1 ? "Business" : "Businesses"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
