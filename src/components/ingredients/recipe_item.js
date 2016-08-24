import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

export default class RecipeItem extends Component {
	render() {
		return(
			<View>
				<TouchableHighlight style={styles.button} onPress={this.props.onPress}>
					<Image uri={this.props.imageURI}/>
					<Text>{this.props.title}</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		flexDirection: 'row'
	}
})