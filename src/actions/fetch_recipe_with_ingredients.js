import { API_URL, config } from './api_endpoints';
import * as TYPES from './action_types.js';

export const fetchRecipesWithIngredients = (ingredients) => {

	return (dispatch) => {
		let ingredientsParam = '';
		ingredients.forEach((ingredient, index) => {
			if(index !== ingredients.length - 1) {
				return ingredientsParam += `${ingredient}%2C`;
			} else {
				return ingredientsParam += ingredient;
			}
		});
		const url = `${API_URL.BASE}${API_URL.FIND_BY_INGREDIENTS}?ingredients=${ingredientsParam}${API_URL.FIND_BY_INGREDIENTS_TAIL}`;

		fetch(url, config)
			.then(resp => resp.json())
			.then((json) => {
				dispatch({type: TYPES.RECIPES_FROM_INGREDIENTS, payload: json});
			})
			.catch(err => console.error(err));
	}
}