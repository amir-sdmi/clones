import styles from "./button.module.css";
function Button({ children, varient = "primary", onClick }) {
  const buttonStyles = `${styles.button} ${styles[varient]}`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
