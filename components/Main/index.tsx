import React from "react";
import Box from "../Box";
import styles from "./styles.module.scss";

export const Main = () => {

  return (
      <div className={styles.Container}>
        <Box gameName="TTT" />
        <Box gameName="Gowno" />
        <Box gameName="Charades" />
      </div>
  );
};
