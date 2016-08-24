import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import RecipeItem from './recipe_item';
import { setCurrentRecipe } from '../../actions/set_current_recipe';

class RecipesFromIngredients extends Component {
	constructor(props){
		super(props);
		this.state = { recipes: [] };
	}

	componentDidUpdate() {
		if(this.props.recipes !== this.state.recipes){
			this.setState({ recipes: this.props.recipes });
		}
	}

	setCurrentRecipe = (id) => {
		this.props.setCurrentRecipe(id);
	}

	render() {
		const recipes = this.state.recipes.map((recipe, index) => {
			return <RecipeItem
							onPress={this.setCurrentRecipe}
							key={recipe.id}
							imageURI={recipe.image}
							title={recipe.title} />
		});

		if(!this.state.recipes.length) {
			return(
				<View>
					<Text>Fetching Recipes...</Text>
				</View>
			)
		}

		return(
			<View>
				{recipes}
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		recipes: state.fromIngredients.recipes
	};
}

export default connect(mapStateToProps, { setCurrentRecipe })(RecipesFromIngredients)