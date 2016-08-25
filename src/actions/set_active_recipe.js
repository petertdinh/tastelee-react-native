import { API_URL, config } from './api_endpoints';
import * as TYPES from './action_types';

export const setActiveRecipe = (id, imageURI, title) => {

	return (dispatch) => {
		const instructionUrl = `${API_URL.BASE}${API_URL.RECIPE_INFORMATION}${id}${API_URL.RECIPE_INSTRUCTIONS}`;

		const ingredientsUrl = `${API_URL.BASE}${API_URL.RECIPE_INFORMATION}${id}${API_URL.RECIPE_INGREDIENTS}`;

		fetch(instructionUrl, config)
			.then(resp => resp.json())
			.then((json) => {
				const instructionsWithPicture = { instructions: json, imageURI, title };
				dispatch({type: TYPES.SET_ACTIVE_RECIPE_INSTRUCTIONS, payload: instructionsWithPicture})
			})
			.catch(err => console.error(err));

		fetch(ingredientsUrl, config)
			.then(resp => resp.json())
			.then((json) => {
				dispatch({type: TYPES.SET_ACTIVE_RECIPE_INGREDIENTS, payload: json.extendedIngredients});
			})
			.catch(err => console.error(err));
	}
}