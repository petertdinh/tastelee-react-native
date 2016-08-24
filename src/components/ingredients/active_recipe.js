import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { addToShoppingList } from '../../actions/add_to_shopping_list';

class ActiveRecipe extends Component {
	constructor(props){
		super(props);
		this.state = { ingredients: [], instructions: [] };
	}

	componentDidUpdate() {
		if(this.props.instructions !== this.state.instructions){
			this.setState({ instructions: this.props.instructions });
		}
		if(this.props.ingredients !== this.state.ingredients){
			this.setState({ ingredients: this.props.ingredients });
		}
	}

	render() {
		return(
			<View>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		ingredients: state.activeRecipe.ingredients,
		instructions: state.activeRecipe.instructions
	};
};

export default connect(mapStateToProps, { addToShoppingList })(ActiveRecipe)