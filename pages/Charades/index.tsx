import Charades from "../../components/Charades";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";

const Game = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/Charades");
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!jsonData) {
    return <p>Loading data...</p>;
  }

  const easyPairs = [];
  const hardPairs = [];

  jsonData.easy.forEach((item) =>
    easyPairs.push(Math.random() > 0.5 ? [item.f, item.s] : [item.s, item.f])
  );
  jsonData.hard.forEach((item) =>
    hardPairs.push(Math.random() > 0.5 ? [item.f, item.s] : [item.s, item.f])
  );

  easyPairs.sort(() => Math.random() - 0.5);
  hardPairs.sort(() => Math.random() - 0.5);

  return (
    <Layout>
      <Charades easyPairs={easyPairs} hardPairs={hardPairs} />
    </Layout>
  );
};

export default Game;
