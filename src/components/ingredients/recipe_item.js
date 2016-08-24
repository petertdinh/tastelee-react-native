import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

export default class RecipeItem extends Component {
	render() {
		return(
			<View style={styles.container}>
					<Image
						source={{uri: this.props.imageURI}}
						style={{width: 100, height: 100}}/>
					<Text>{this.props.title}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	}
})