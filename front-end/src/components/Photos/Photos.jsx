import { useState } from 'react';
import styles from './Photos.module.css';
import { FlexContainer } from '../FlexContainer/FlexContainer';
import { Details } from '../Details/Details';

export const Photos = ({ product }) => {
	const [currentPhoto, setCurrentPhoto] = useState(
		'http://localhost:3000/product-photos/man-t-shirt-1.jpg'
	);

	const onPhotoClick = (e) => {
		setCurrentPhoto(e.target.src);
	};

	return (
		<FlexContainer>
			<div className={styles.photos}>
				{product.photos.map((photo) => {
					return (
						<img
							className={photo === currentPhoto ? styles.active : ''}
							onClick={onPhotoClick}
							key={photo}
							src={photo}
						/>
					);
				})}
			</div>
			<img className={styles.largePhoto} src={currentPhoto} />
			
		</FlexContainer>
	);
};
