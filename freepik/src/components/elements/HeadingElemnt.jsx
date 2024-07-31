import styles from "./headingElement.module.css";
function HeadingElement({ header, tagline, description }) {
  return (
    <div className={styles.heading}>
      <h4 className={styles.tagline}>{tagline}</h4>
      <h2 className={styles.header}>{header}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default HeadingElement;
