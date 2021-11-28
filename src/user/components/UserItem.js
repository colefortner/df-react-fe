import styles from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <li class={styles["user-item"]}>
      <div class={styles["user-item__content"]}>
        <div class={styles["user-item__image"]}>
          <img src={props.image} alt={props.name} />
        </div>
        <div class={styles["user-item__info"]}>
          <h2>{props.name}</h2>
          <h3>
            {props.businessCount}{" "}
            {props.businessCount === 1 ? "Business" : "Businesses"}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
