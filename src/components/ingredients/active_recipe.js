import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import { addToShoppingList } from '../../actions/add_to_shopping_list';

class ActiveRecipe extends Component {
	constructor(props){
		super(props);
		this.state = { ingredients: [], instructions: [], imageURI: '', title: '' };
	}

	componentDidUpdate() {
		if(this.props.instructions !== this.state.instructions){
			this.setState({ instructions: this.props.instructions });
		}
		if(this.props.ingredients !== this.state.ingredients){
			this.setState({ ingredients: this.props.ingredients });
		}
		if(this.props.imageURI !== this.state.imageURI){
			this.setState({ imageURI: this.props.imageURI });
		}
		if(this.props.title !== this.state.title){
			this.setState({ title: this.props.title });
		}
	}

	render() {
		const ingredients = this.state.ingredients.map((ingredient, index) => {
			return <Text key={index}>{ingredient.originalString}</Text>
		});

		const instructions = this.state.instructions.map((instruction, index) => {
			const steps = instruction.steps.map((step, indx) => {
				return <Text key={indx} style={styles.step}>{step.step}</Text>
			});
			if(instruction.name){
				return (
					<View key={index} style={styles.specificPreparation}>
						<Text>{instruction.name}</Text>
						{steps}
					</View>
				)
			}
			return <View key={index}>{steps}</View>
		});

		return(
			<View style={styles.container}>
				<View style={styles.recipeTitle}>
					<Text style={styles.recipeText}>{this.state.title}</Text>
				</View>
				<ScrollView>
					<View>
						<Image 
						 source={{uri: this.state.imageURI}}
						 style={styles.image} />
					</View>
					<View style={styles.ingredients}>
						{ingredients}
					</View>
					<View>
						{instructions}
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 100,
		height: 100,
		paddingBottom: 35,
		alignSelf: 'center'
	},
	specificPreparation: {
		fontSize: 20,
		color: 'black',
	},
	step: {
		fontSize: 15,
		color: 'grey',
	},
	ingredients: {
		paddingBottom: 18,
		alignItems: 'center',
	},
	imageContainer: {
		paddingBottom: 18,
	},
	recipeTitle: {
	  backgroundColor: '#48afdb',
	  paddingTop: 30,
	  paddingBottom: 10,
	  flexDirection: 'row'
	},
	recipeText: {
	  color: '#fff',
	  textAlign: 'center',
	  fontWeight: 'bold',
	  flex: 1,
	  fontSize: 20,
	},
});

const mapStateToProps = (state) => {
	return {
		ingredients: state.activeRecipe.ingredients,
		instructions: state.activeRecipe.instructions,
		imageURI: state.activeRecipe.imageURI,
		title: state.activeRecipe.title,
	};
};

export default connect(mapStateToProps, { addToShoppingList })(ActiveRecipe)