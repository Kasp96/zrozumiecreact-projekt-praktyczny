import { redirect } from 'react-router-dom';
import { PATH_TO_ENDPOINT_MAPPING } from '../constants/api';
import { BACK_END_URL } from '../constants/api';
import { CATEGORIES } from '../constants/categories';

export const productListLoader = ({ params: { gender, category } }) => {
	const foundCategory = CATEGORIES.find((c) => c.path === category);
	const foundGender = PATH_TO_ENDPOINT_MAPPING[gender];

	if (foundGender && foundCategory) {
		return fetch(
			`${BACK_END_URL}/products/?gender=${foundGender}&category=${category}
            `
		);
	} else {
		redirect('/kobieta');
	}
};
