import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Card from "../Card";

const Charades = ({ easyPairs, hardPairs }) => {

  const [easyIndex, setEasyIndex] = useState(0);
  const [hardIndex, setHardIndex] = useState(0);

  const [difficulty, setDifficulty] = useState("easy");
  const [leftWord, setLeftWord] = useState("");
  const [rightWord, setRightWord] = useState("");

  const [leftPoints, setLeftPoints] = useState(0);
  const [rightPoints, setRightPoints] = useState(0);

  const givePoint = (side) => {
    if (!showCards) return;
    if (side === "left") {
      setLeftPoints(leftPoints + 1);
    } else if (side === "right") {
      setRightPoints(rightPoints + 1);
    }
  };

  const [showCards, setShowCards] = useState(false);

  const changeCard = () => {
    if (showCards) {
      setShowCards(false);
      setTimeout(() => {
        giveNextCard();
      }, 500);
    } else {
      setShowCards(true);
    }
  };

  const giveNextCard = () => {
    console.log("giveNextCard");
    if (difficulty === "easy") {
      if(easyIndex >= easyPairs.length) {
        setLeftWord("Koniec kart do odgadnięcia");
        setRightWord("Koniec kart do odgadnięcia");
        return;
      }
      setLeftWord(easyPairs[easyIndex][0]);
      setRightWord(easyPairs[easyIndex][1]);
      setEasyIndex(easyIndex + 1);
    } else if (difficulty === "hard") {
      if(hardIndex >= hardPairs.length) {
        setLeftWord("Koniec kart do odgadnięcia");
        setRightWord("Koniec kart do odgadnięcia");
        return;
      }
      setLeftWord(hardPairs[hardIndex][0]);
      setRightWord(hardPairs[hardIndex][1]);
      setHardIndex(hardIndex + 1);
    }
  };

  useEffect(() => {
    if (showCards) {
      setShowCards(false);
      setTimeout(() => {
        giveNextCard();
      }, 500);
    } else {
      giveNextCard();
    }
  }, [difficulty]);

  return (
    <div className={styles.CharadesContainer}>
      <div className={styles.DifficultyButtons}>
        <button onClick={() => setDifficulty("easy")}>EASY</button>
        <button onClick={() => setDifficulty("hard")}>HARD</button>
      </div>

      <div className={styles.Charades}>
        <div className={styles.Left} onClick={() => givePoint("left")}>
          <Card
            text={leftWord}
            variant="#3498db"
            showCards={showCards}
            changeCard={changeCard}
          />
        </div>

        <div className={styles.Right} onClick={() => givePoint("right")}>
          <Card
            text={rightWord}
            variant="#e74c3c"
            showCards={showCards}
            changeCard={changeCard}
          />
        </div>
      </div>

      <div className={styles.Score}>
        <div className={styles.ScoreContainer}>
          <div className={styles.LeftScore}>Left: {leftPoints}</div>
          <div className={styles.RightScore}>Right: {rightPoints}</div>
        </div>
      </div>
    </div>
  );
};

export default Charades;
