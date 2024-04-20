import React, { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import Router from "next/router";

const Box = ({ gameName }) => {
  const url = useMemo(() => `/${gameName}/photo.jpeg`, [gameName]);
  const [hidden, setHidden] = useState(false);

  return (
    <div className={styles.Box}
      onMouseEnter={() => setHidden(true)}
      onMouseLeave={() => setHidden(false)}
      onClick={() => Router.push(`/${gameName}`)}
    >
      <div className={styles.Back}>{gameName}</div>

      <div className={styles.Front}>
        <div className={styles.ImageContainer}>
          <Image
            src={url}
            alt={gameName}
            fill={true}
            quality={100}
          />
        </div>
        <div className={styles.Description}>
          <h2>DESCRIPTION OF GAME</h2>
        </div>
      </div>
    </div>
  );
};

export default Box;
