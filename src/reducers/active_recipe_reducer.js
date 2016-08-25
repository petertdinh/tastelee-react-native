import * as TYPES from '../actions/action_types';

export default function(state ={
	title: '',
	imageURI: '',
	instructions: [],
	ingredients: [],
}, action){
	switch(action.type){
		case TYPES.SET_ACTIVE_RECIPE_INSTRUCTIONS:
			return {...state, instructions: action.payload.instructions, imageURI: action.payload.imageURI, title: action.payload.title};
		case TYPES.SET_ACTIVE_RECIPE_INGREDIENTS:
			return {...state, ingredients: action.payload};
		default:
			return state;
	}
}