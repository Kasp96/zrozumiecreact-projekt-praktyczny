import styles from "../CenteredContent/CenteredContent.module.css";

export const CenteredContent = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
