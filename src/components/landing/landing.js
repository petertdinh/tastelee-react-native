import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../common/button';

export default class Landing extends Component {

	getStarted = () => {
		this.props.navigator.push({name: 'index'})
	}

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>Fsh N' Loaves</Text>
				</View>
				<View style={styles.body}>
					<Text style={styles.text}>
						Thanks for downloading Fsh N' Loaves. With the help of this app, you're going to be creating some awesome dishes.
					</Text>
				</View>
				<View style={styles.button}>
					<Button
					 text={`Let's get started`}
					 onPress={this.getStarted} />
				 </View>
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
  text: {
  	fontSize: 20,
  	marginBottom: 55,
  	marginLeft: 30,
  	marginRight: 15
  },
  title: {
  	fontSize: 30
  },
  header: {
  	flex: 2,
  },
  body: {
  	flex: 5,
  },
  button: {
  	flex: 3
  }
});