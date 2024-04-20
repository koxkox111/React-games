import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Card from "../Card";

const Charades = ({ easyPairs, mediumPairs, hardPairs }) => {
  
  const [easyIndex, setEasyIndex] = useState(0);
  const [mediumIndex, setMediumIndex] = useState(0);
  const [hardIndex, setHardIndex] = useState(0);

  const [difficulty, setDifficulty] = useState("medium");
  const [leftWord, setLeftWord] = useState(0);
  const [rightWord, setRightWord] = useState(0);

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
    if (difficulty === "easy") {
      setLeftWord(easyPairs[easyIndex][0]);
      setRightWord(easyPairs[easyIndex][1]);
      setEasyIndex(easyIndex + 1);
    } else if (difficulty === "medium") {
      setLeftWord(mediumPairs[mediumIndex][0]);
      setRightWord(mediumPairs[mediumIndex][1]);
      setMediumIndex(mediumIndex + 1);
    } else if (difficulty === "hard") {
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
        <button onClick={() => setDifficulty("medium")}>MEDIUM</button>
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
