import styles from "./Button.module.css";

const Button = ({ onClick, title }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
