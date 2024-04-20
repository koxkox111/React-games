import Head from 'next/head';

import Charades from '../../components/Charades';
const Game = () => {

  const newEasyPairs = [];
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      const rand1 = Math.floor(Math.random() * 100);
      const rand2 = Math.floor(Math.random() * 100);
      newEasyPairs.push([rand1, rand2]);
    }
  }

  const newMediumPairs = [];
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      const rand1 = Math.floor(Math.random() * 1000);
      const rand2 = Math.floor(Math.random() * 1000);
      newMediumPairs.push([rand1, rand2]);
    }
  }

  const newHardPairs = [];
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      const rand1 = Math.floor(Math.random() * 10000);
      const rand2 = Math.floor(Math.random() * 10000);
      newHardPairs.push([rand1, rand2]);
    }
  }

  return (
    <Charades easyPairs={newEasyPairs} mediumPairs={newMediumPairs} hardPairs={newHardPairs} />
  );
}

export default Game;