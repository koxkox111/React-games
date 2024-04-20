import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import ReactCardFlip from "react-card-flip";

const Card = ({ text, variant, showCards, changeCard}) => {
  const [isFlipped, setIsFlipped] = useState(showCards);

  const handleClick = () => {
    changeCard();
  };

  useEffect(() => {
    setIsFlipped(showCards);
  }, [showCards]);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        className={styles.card}
        style={{ backgroundColor: variant }}
        onClick={handleClick}
      >
        Click to play
      </div>

      <div
        className={styles.card}
        style={{ backgroundColor: variant }}
        onClick={handleClick}
      >
        {text}
      </div>
    </ReactCardFlip>
  );
};

export default Card;
