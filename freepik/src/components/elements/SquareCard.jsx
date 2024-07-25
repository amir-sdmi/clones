import styles from "./squareCard.module.css";
function SquareCard() {
  return (
    <div className={styles.squareCard}>
      <a href="#">
        <img
          className={styles.background}
          src="https://fps.cdnpk.net/home/banner-tools/image-generator-bg.webp"
        />
        <div className={styles.squareCardText}>
          <p className={styles.heading}>AI image generator</p>
          <p className={styles.description}>
            Create images from words in real time
          </p>
        </div>
      </a>
    </div>
  );
}

export default SquareCard;
