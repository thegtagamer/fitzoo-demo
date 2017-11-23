import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  ScrollView

} from 'react-native';

import { DrawerNavigator } from 'react-navigation';

import VerifyLogo from '../components/VerifyLogo';
import FirstScreen from '../pages/FirstScreen';
import SecondScreen from '../pages/FirstScreen';


import {Actions} from 'react-native-router-flux';


const DrawerMenu  = DrawerNavigator(
  {
First: {
  path:'/',
  screen: FirstScreen,
},
Second: {
  path:'/sent',
  screen: SecondScreen,
},
  },
  {
initialRouteName: 'First',

  }
  );

export default DrawerMenu;