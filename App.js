import React, { Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Button } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>help</Text>
        <Router>
        <Scene key="root">
          <Scene key="signup"
            component={SignupScreen}
            title="Signup"
            initial
          />
          <Scene
          key="login"
          component={LoginScreen}
          title="Login"
        />
        </Scene>
      </Router>
      <Text>help</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

AppRegistry.registerComponent('App', () => App);