import * as TYPES from '../actions/action_types';

export default function(state = {
	recipes: []
}, action){
	switch(action.type){
		case TYPES.RECIPES_FROM_INGREDIENTS:
			return {...state, recipes: action.payload};
		default:
			return state;
	}
}