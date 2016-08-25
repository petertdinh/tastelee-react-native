import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import RecipeItem from './recipe_item';
import { setActiveRecipe } from '../../actions/set_active_recipe';

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

	setActiveRecipe = (id, imageURI, title) => {
		this.props.setActiveRecipe(id, imageURI, title);
		this.props.navigator.push({name: 'activeRecipe'});
	}

	render() {
		const recipes = this.state.recipes.map((recipe, index) => {
			return <RecipeItem
							onPress={this.setActiveRecipe}
							id={recipe.id}
							key={index}
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

export default connect(mapStateToProps, { setActiveRecipe })(RecipesFromIngredients)