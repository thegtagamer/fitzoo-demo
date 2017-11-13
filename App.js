import React, { Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Button } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import ScarletScreen from './ScarletScreen';
import GrayScreen from './GrayScreen';

export default class App extends React.Component {
  TestFunction(){
    Alert.alert('Button Pressed !!!')
  }

  render() {
    return (
      <View style={styles.container}>
        <Router>
        <Scene key="root">
          <Scene key="scarlet"
            component={ScarletScreen}
            title="Scarlet"
            initial
          />
          <Scene
          key="gray"
          component={GrayScreen}
          title="Gray"
        />
        </Scene>
      </Router>  
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