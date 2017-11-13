import React, { Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Button, StatusBar } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Routes from './src/Routes';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
   
        <StatusBar
           backgroundColor="#1c313a"
           barStyle="light-content"
         />
        <Routes/>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  }
});

AppRegistry.registerComponent('App', () => App);