import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput } from 'react-native';
import Button from '../common/button';

export default class Add extends Component {
	constructor(props) {
		super(props);
		this.state = { ingredients: [], text: '' };
	}

	addIngredient = () => {
		if(this.state.text !== '') {
			this.setState({ingredients: [...this.state.ingredients, this.state.text]});
			this.setState({text: ''});
		}
	};

	submitIngredients = () => {
		console.log(this.state.text);
	}

	render() {
		const ingredients = this.state.ingredients.map((ingredient, index) => {
			return <Text key={index} style={styles.ingredient}>{ingredient}</Text>
		});

		return(
			<View style={styles.container}>
				<View style={styles.titleView}>
					<Text style={styles.titleText}>My Ingredients</Text>
				</View>
				<View style={styles.header}>
					<TextInput
						style={styles.input}
						value={this.state.text}
						buttonText={styles.buttonText}
						onChangeText={(text) => {
							this.setState({text});
						}}/>
						<Button
						 style={styles.button}
						 text={`Add`}
						 onPress={this.addIngredient} />
				</View>
				<ScrollView style={styles.body}>
					{ingredients}
				</ScrollView>
				<View style={styles.footer}>
					<Button
					 text={`Show me some recipes!`}
					 onPress={this.submitIngredients} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flex: 1,
		flexDirection: 'row'
	},
	footer: {
		flex: 1,
	},
	body: {
		flex: 5,
		padding: 3,
		height: 56,
	},
	titleView: {
	  backgroundColor: '#48afdb',
	  paddingTop: 30,
	  paddingBottom: 10,
	  flexDirection: 'row'
	},
	titleText: {
	  color: '#fff',
	  textAlign: 'center',
	  fontWeight: 'bold',
	  flex: 1,
	  fontSize: 20,
	},
	button: {
		height: 36,
		flex: 1,
		backgroundColor: '#48afdb',
		borderRadius: 4,
	},
	input: {
	  height: 36,
	  padding: 4,
	  marginRight: 5,
	  flex: 4,
	  fontSize: 18,
	  borderWidth: 1,
	  borderColor: '#48afdb',
	  borderRadius: 4,
	  color: '#48BBEC',
	  flexDirection: 'row',
	  marginTop: 17
	},
	ingredient: {
		fontSize: 20,
		padding: 1,
	},
});