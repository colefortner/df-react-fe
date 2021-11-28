import UserItem from "./UserItem";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div class={styles.center}>
        <h2>No users found</h2>
      </div>
    );
  }
  return (
    <ul>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          businessCount={user.businesses}
        />
      ))}
    </ul>
  );
};

export default UsersList;
