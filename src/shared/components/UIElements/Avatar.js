import styles from "./Avatar.module.css";

const Avatar = (props) => {
  return (
    <div class={styles["avatar"]} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
