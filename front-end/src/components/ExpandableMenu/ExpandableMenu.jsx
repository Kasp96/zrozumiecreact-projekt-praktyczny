import styles from './ExpandableMenu.module.css';
import { CATEGORIES } from '../../constants/categories';
import ARROW_ICON from '../../assets/arrow.svg';
import { NavLink } from 'react-router-dom';

export const ExpandableMenu = () => {
	const activePath = 'odziez';

	return (
		<div className={styles.menu}>
			<p>Kobieta</p>
			<ul>
				{CATEGORIES.map((category) => {
					return (
						<li key={category.path}>
							<NavLink to={category.path}>
								{category.categoryName}{' '}
								<img
									className={
										activePath === category.path ? styles.expanded : ''
									}
									src={ARROW_ICON}
								/>
							</NavLink>
							{activePath === category.path && (
								<ul>
									{category.subcategories.map((subcategory) => {
										return (
											<li key={subcategory.path}>
												<NavLink to={subcategory.path}>
													{subcategory.categoryName}
												</NavLink>
											</li>
										);
									})}
								</ul>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
