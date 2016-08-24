import * as TYPES from '../actions/action_types';

export default function(state ={
	unitsOfMeasurements: [],
	instructions: [],
	ingredients: [],
}, action){
	switch(action.type){
		case TYPES.SET_ACTIVE_RECIPE_INSTRUCTIONS:
			return {...state, instructions: action.payload};
		case TYPES.SET_ACTIVE_RECIPE_INGREDIENTS:
			return {...state, ingredients: action.payload};
		default:
			return state;
	}
}