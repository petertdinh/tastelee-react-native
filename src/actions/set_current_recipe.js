import { API_URL } from './api_endpoints';
import * as TYPES from './action_types';

export const setCurrentRecipe = (id) => {

	return (dispatch) => {
		const ingredientsUrl = `${API_URL.BASE}${API_URL.RECIPE_INFORMATION}${id}${API_URL.RECIPE_INGREDIENTS}`;

		const instructionUrl = `${API_URL.BASE}${API_URL.RECIPE_INFORMATION}${id}${API_URL.RECIPE_INSTRUCTIONS}`;

		const myHeaders = new Headers({
			"X-Mashape-Key": API_URL.key
		});

		const config = {
			method: 'GET',
			headers: myHeaders
		};

		fetch(ingredientsUrl, config)
			.then(resp => resp.json())
			.then((json) => {

			})
			.catch(err => console.error(err));

		fetch(instructionUrl, config)
			.then(resp => resp.json())
			.then((json) => {

			})
			.catch(err => console.error(err));
	}
}