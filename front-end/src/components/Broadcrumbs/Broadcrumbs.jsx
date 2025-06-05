import styles from './Broadcrumbs.module.css';
import ARROW_ICON from '../../assets/arrow.svg';
import { NavLink } from 'react-router-dom';

export const Broadcrumbs = ({headingText}) => {
	const breadcrumbs = [
		{
			categoryName: 'Kobieta',
			path: 'kobieta',
		},
		{
			categoryName: 'Odzież',
			path: 'odziez',
		},
		{
			categoryName: 'Swetry',
			path: 'swetry',
		},
	];

	return (
		<div className={styles.broadcrumbs}>
			<ul>
				{breadcrumbs.map((breadcrumb) => {
					return (
						<li key={breadcrumb.path}>
							<NavLink to={breadcrumb.path}>
								{breadcrumb.categoryName} <img src={ARROW_ICON} />
							</NavLink>
						</li>
					);
				})}
			</ul>
			<h2>{headingText}</h2>
		</div>
	);
};
