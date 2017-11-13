import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';


export default class Login extends Component<{}> {

	signup(){
		Actions.signup()
	}

	render(){
		return(

		<View style={styles.container}>
	
		<Logo />
	
	<Form type="Login" />
	
	<View style={styles.signupTextCont}>
<Text style={styles.signupText}>New here? </Text>
	<TouchableOpacity onPress={this.signup}>
	<Text style={styles.signupButton}>SIGN UP</Text>
	</TouchableOpacity>
	</View>
	
		</View>


			)
	}
}
const styles = StyleSheet.create({
  container : {
    backgroundColor:'#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  signupTextCont : {

    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical:16,
    flexDirection: 'row',

  },
    signupText : {

    color:'#cbcbcb',
    fontSize:16

  },
   signupButton : {

    color:'#f47a24',
    fontSize:16,
    fontWeight: '500'

  }
 
});
