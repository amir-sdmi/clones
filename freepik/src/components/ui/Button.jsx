import styles from "./button.module.css";
function Button({ children, varient = "primary", onClick }) {
  return (
    <button className={styles[varient]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
