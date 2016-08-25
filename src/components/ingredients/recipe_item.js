import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

export default class RecipeItem extends Component {
	render() {
		return(
			<View style={styles.container}>
					<Image
						source={{uri: this.props.imageURI}}
						style={{width: 100, height: 100}}/>
					<TouchableHighlight style={styles.title} underlayColor={'#d3d3d3'} onPress={() => { this.props.onPress(this.props.id, this.props.imageURI, this.props.title) }}>
						<Text style={styles.title}>{this.props.title}</Text>
					</TouchableHighlight>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	title: {
		justifyContent: 'center',
		alignSelf: 'center',
	}
})