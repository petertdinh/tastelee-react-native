import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';

class ActiveRecipe extends Component {

}

export default connect(mapStateToProps, { addToShoppingList })(ActiveRecipe)