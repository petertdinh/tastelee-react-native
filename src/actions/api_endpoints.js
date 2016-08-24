import { key } from './api_key';

export const API_URL = {
  BASE: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/",
  FIND_BY_INGREDIENTS: "recipes/findByIngredients",
  FIND_BY_INGREDIENTS_TAIL: "&limitLicense=false&number=3&ranking=1",
  RECIPE_INFORMATION: "recipes/",
  RECIPE_INGREDIENTS: "/information?includeNutrition=false",
  RECIPE_INSTRUCTIONS: "/analyzedInstructions?stepBreakdown=true"
};

const myHeaders = new Headers({
	"X-Mashape-Key": key
});

export const config = {
	method: 'GET',
	headers: myHeaders
}