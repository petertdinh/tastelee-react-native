import { combineReducers } from 'redux';
import fromIngredients from './recipes_from_ingredients_reducer';

const rootReducer = combineReducers({
	fromIngredients,
});

export default rootReducer;