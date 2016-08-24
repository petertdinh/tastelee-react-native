import * as TYPES from '../actions/action_types';

export default function(state ={
	unitsOfMeasurements: [],
	ingredients: [],
	instructions: [],
}, action){
	switch(action.type){
		case TYPES.SET_CURRENT_RECIPE_INGREDIENTS:
			return {...state};
		case TYPES.SET_CURRENT_RECIPE_INSTRUCTIONS:
			return {...state};
		default:
			return state;
	}
}