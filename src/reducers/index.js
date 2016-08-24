import { combineReducers } from 'redux';
import fromIngredients from './recipes_from_ingredients_reducer';
import activeRecipe from './active_recipe_reducer';

const rootReducer = combineReducers({
	fromIngredients,
	activeRecipe,
});

export default rootReducer;