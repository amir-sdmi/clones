import styles from "./squareCard.module.css";
function SquareCard({ heading, description, image, link }) {
  return (
    <div className={styles.squareCard}>
      <a href={link}>
        <img className={styles.background} src={image} />
        <div className={styles.squareCardText}>
          <p className={styles.heading}>{heading}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default SquareCard;
