import styles from "./styles.module.scss";

const TopMenu = () => {
  return (
    <div className = {styles.TopMenu}>
      <button className= {styles.leftButton}>A</button>
      <button className= {styles.leftButton}>B</button>
      <button className= {styles.leftButton}>C</button>
      <button className= {styles.leftButton}>D</button>
    </div>
  );
}

export default TopMenu;