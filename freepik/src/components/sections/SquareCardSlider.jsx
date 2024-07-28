import squareCardData from "../../data/squareElements";
import SquareCard from "../elements/SquareCard";
import styles from "./squareCardSlider.module.css";
function SquareCardSlider() {
  return (
    <ul className={styles.slider}>
      {squareCardData.map((card, index) => (
        <li key={index}>
          <SquareCard
            heading={card.heading}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        </li>
      ))}
    </ul>
  );
}

export default SquareCardSlider;
