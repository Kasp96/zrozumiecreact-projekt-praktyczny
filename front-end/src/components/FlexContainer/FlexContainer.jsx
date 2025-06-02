import styles from '../FlexContainer/FlexContainer.module.css';

export const FlexContainer = ({ children }) => {
	return <div className={styles.flexContainer}>{children}</div>;
};
