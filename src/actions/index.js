export const RECIPES_FROM_INGREDIENTS = 'RECIPES_FROM_INGREDIENTS';

const key = '6t1j0TtX5wmshFd71A7d7eHjXUEcp1X8peNjsn0P2xMNGBXkiV';

const SPOONACULAR = {
  BASE: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/",
  FIND_BY_INGREDIENTS: "recipes/findByIngredients",
  FIND_BY_INGREDIENTS_TAIL: "&limitLicense=false&number=3&ranking=1",
  RECIPE_INFORMATION: "recipes/",
  RECIPE_INFORMATION_TAIL: "/information?includeNutrition=false"
};

export const fetchRecipesWithIngredients = (ingredients) => {
	let ingredientsParam = '';
	ingredients.forEach((ingredient, index) => {
		if(index !== ingredients.length - 1) {
			return ingredientsParam += `${ingredient}%2C`;
		} else {
			return ingredientsParam += ingredient;
		}
	});

	const url = `${SPOONACULAR.BASE}${SPOONACULAR.FIND_BY_INGREDIENTS}?ingredients=${ingredientsParam}${SPOONACULAR.FIND_BY_INGREDIENTS_TAIL}`;

	const myHeaders = new Headers({
		"X-Mashape-Key": key
	});

	const config = {
		method: 'GET',
		headers: myHeaders
	};

	return (dispatch) => {
		console.log('poop');
		// fetch(url, config)
		// 	.then(resp => resp.json())
		// 	.then((json) => {
		// 		console.log(json);
		// 	})
		// 	.catch(err => console.error(err));
	}
}