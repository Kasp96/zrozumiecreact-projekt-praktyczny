import styles from '../Hero/Hero.module.css';
import { CenteredContent } from '../CenteredContent/CenteredContent';
import { FullWidthButton } from '../FullWidthButton/FullWidthButton';

export const Hero = ({ heroImage }) => {
	return (
		<div
			style={{ backgroundImage: `url(${heroImage})` }}
			className={styles.hero}>
			<CenteredContent>
				<div className={styles.contentWrapper}>
					<h2>Letnie promocje do -70%</h2>
					<p>Tylko najlepsze okazje!</p>
					<FullWidthButton onClick={() => console.log('test')}>
						Sprawdź produkty
					</FullWidthButton>
				</div>
			</CenteredContent>
		</div>
	);
};
