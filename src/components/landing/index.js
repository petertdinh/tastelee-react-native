import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../common/button';

export default class Index extends Component {
	enterIngredients = () => {
		this.props.navigator.immediatelyResetRouteStack([{name: 'add'}]);
	}

	render() {
		return(
			<View style={styles.container}>
				<Button 
				text={`Add your available ingredients`}
				onPress={this.enterIngredients} />
				<Button
				text={`Start from scratch`}
				onPress={this.startFromScratch} />
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
})