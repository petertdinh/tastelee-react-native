import { RECIPES_FROM_INGREDIENTS } from '../actions/index';

export default function(state = {
	recipes: []
}, action){
	switch(action.type){
		case RECIPES_FROM_INGREDIENTS:
			return {...state, recipes: action.payload };
		default:
			return state;
	}
}