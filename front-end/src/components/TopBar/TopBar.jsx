import styles from "../TopBar/TopBar.module.css";
import TopSklep from "../../assets/TopSklep.svg";
import bag from "../../assets/bag.svg";
import heart from "../../assets/heart.svg";

export const TopBar = () => {
  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.topbarLeft}>
          <a href="">kobieta</a>
          <a href="">mężczyzna</a>
          <a href="">dziecko</a>
        </div>
        <div>
          <img src={TopSklep} alt="logo" />
        </div>
        <div>
          <select>
            <option value="PLN">PLN</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
          <button className={styles.button}>
            <img src={bag} alt="" />
          </button>
          <button className={styles.button}>
            <img src={heart} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
