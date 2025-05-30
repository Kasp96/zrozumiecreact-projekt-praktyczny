import styles from "../FullWidthButton/FullWidthButton.module.css";

export const FullWidthButton = ({children, onClick}) => {
  return <button onClick={onClick} className={styles.fullWidthButton}>{children}</button>;
};
