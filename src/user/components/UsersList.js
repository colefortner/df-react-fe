import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div class={styles.center}>
        <Card>
          <h2>No users found</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul class={styles["users-list"]}>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          businessCount={user.businesses.length}
        />
      ))}
    </ul>
  );
};

export default UsersList;
