import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from  'react-redux';
import thunk from 'redux-thunk';
import { StyleSheet, Text, View, TextInput, Navigator } from 'react-native';
import * as firebase from 'firebase';
import reducers from '../reducers/index'
import Landing from './landing/landing';
import Index from './landing/index';
import Add from './ingredients/add';
import RecipesFromIngredients from './ingredients/recipes_list';
import ActiveRecipe from './ingredients/active_recipe';

const config = {
  apiKey: "AIzaSyDjnRi9bFYzpuS3yw-c2gDfPlV5y5BCRrE",
  authDomain: "tastelee-3c9f3.firebaseapp.com",
  databaseURL: "https://tastelee-3c9f3.firebaseio.com",
  storageBucket: "tastelee-3c9f3.appspot.com",
};
firebase.initializeApp(config);

const routes = {
  landing: Landing,
  index: Index,
  add: Add,
  recipesFromIngredients: RecipesFromIngredients,
  activeRecipe: ActiveRecipe,
}

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

export default class Main extends Component {
  renderScene = (route, navigator) => {
    const Component = routes[route.name];
    return (
      <Component
      route={route}
      navigator={navigator}/>
    )
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator
        style={styles.container}
        initialRoute={{name: 'landing'}}
        renderScene={this.renderScene}
        configureScene={() =>{ return Navigator.SceneConfigs.FloatFromRight; }} />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});