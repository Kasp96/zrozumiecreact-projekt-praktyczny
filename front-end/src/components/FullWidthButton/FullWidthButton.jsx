import styles from '../FullWidthButton/FullWidthButton.module.css';

export const FullWidthButton = ({ children, onClick, isBlack }) => {
	return (
		<button
			onClick={onClick}
			className={`${styles.fullWidthButton} ${isBlack ? styles.black : ''}`}>
			{children}
		</button>
	);
};
