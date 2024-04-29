import React from "react";
import TopMenu from "./TopMenu";
import LeftMenu from "./LeftMenu";
import styles from "./styles.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Top}>
        <TopMenu />
      </div>
      <div className={styles.Left}>
        <LeftMenu />
      </div>
      <div className={styles.Main}>{children}</div>
    </div>
  );
};

export default Layout;
