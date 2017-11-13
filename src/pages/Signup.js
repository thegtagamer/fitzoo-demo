import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<{}> {


  goBack(){
    Actions.pop();
  }

	render(){
		return(

		<View style={styles.container}>
	
		<Logo />
	<Text style={styles.logoText}>REGISTER</Text>
  <TextInput style={styles.inputBox} 
              underlineColorAndroid='#cccccc' 
              placeholder="Name"
              placeholderTextColor = "#c0c0c0"
              selectionColor="#f47a24"
              
              onSubmitEditing={()=> this.fitnessprogram.focus()}
              />
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='#cccccc' 
              placeholder="Fitness progran"
              placeholderTextColor = "#c0c0c0"
              selectionColor="#f47a24"
              
              onSubmitEditing={()=> this.dob.focus()}
              />

<TextInput style={styles.inputBox} 
              underlineColorAndroid='#cccccc' 
              placeholder="D.O.B (dd/mm/yyyy)"
              placeholderTextColor = "#c0c0c0"
              selectionColor="#f47a24"
              
              onSubmitEditing={()=> this.height.focus()}
              />

<TextInput style={styles.inputBox} 
              underlineColorAndroid='#cccccc' 
              placeholder="Height (cm)"
              placeholderTextColor = "#c0c0c0"
              selectionColor="#f47a24"
              
              onSubmitEditing={()=> this.weight.focus()}
              />


<TextInput style={styles.inputBox} 
              underlineColorAndroid='#cccccc' 
              placeholder="Weight (kg)"
              placeholderTextColor = "#c0c0c0"
              selectionColor="#f47a24"
              
              onSubmitEditing={()=> this.height.focus()}
              />

          <TextInput style={styles.inputBox} 
              underlineColorAndroid='#cccccc' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#c0c0c0"
              ref={(input) => this.password = input}
              />  
       
	
	<View style={styles.signupTextCont}>
<Text style={styles.signupText}>Already have an account? </Text>
	 <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Signin
   </Text>
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
  logoText: {


    color:'#f47a24',
    fontSize:16,
    fontWeight: '500'

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
