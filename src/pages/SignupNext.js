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

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class SignupNext extends Component<{}> {


  goBack(){
    Actions.pop();
  }

    verify(){
    Actions.verify()
  }



	render(){
		return(

		<View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false} >
	
		<Logo />
	<Text style={styles.logoText}>REGISTER</Text>

  <TextInput style={styles.inputBox} 
              underlineColorAndroid='#cccccc' 
              placeholder="Address"
              placeholderTextColor = "#c0c0c0"
              selectionColor="#f47a24"
              
              onSubmitEditing={()=> this.fitnessprogram.focus()}
              />

              <TextInput style={styles.inputBox} 
              underlineColorAndroid='#cccccc' 
              placeholder="State"
              placeholderTextColor = "#c0c0c0"
              selectionColor="#f47a24"
              
              onSubmitEditing={()=> this.dob.focus()}
              />

<TextInput style={styles.inputBox} 
              underlineColorAndroid='#cccccc' 
              placeholder="City"
              placeholderTextColor = "#c0c0c0"
              selectionColor="#f47a24"
              
              onSubmitEditing={()=> this.height.focus()}
              />

<TextInput style={styles.inputBox} 
              underlineColorAndroid='#cccccc' 
              placeholder="Area"
              placeholderTextColor = "#c0c0c0"
              selectionColor="#f47a24"
              
              onSubmitEditing={()=> this.weight.focus()}
              />


<TextInput style={styles.inputBox} 
              underlineColorAndroid='#cccccc' 
              placeholder="Pin Code"
              placeholderTextColor = "#c0c0c0"
              selectionColor="#f47a24"
              
              onSubmitEditing={()=> this.height.focus()}
              />
   <TextInput style={styles.inputBox} 
                  underlineColorAndroid='#cccccc' 
              placeholder="Email"
              placeholderTextColor = "#c0c0c0"
              selectionColor="#f47a24"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />

               <TextInput style={styles.inputBox} 
              underlineColorAndroid='#cccccc' 
              placeholder="Mobile number"
              secureTextEntry={true}
              placeholderTextColor = "#c0c0c0"
              ref={(input) => this.password = input}
              />  


                 <TouchableHighlight
  style={styles.button}
  onPress={this.verify}
  underlayColor='#fff'>
      <Text style={styles.buttonText}>Next</Text>
</TouchableHighlight>
       
	
	<View style={styles.signupTextCont}>
<Text style={styles.signupText}>Already have an account? </Text>
	 <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Signin
   </Text>
	 </TouchableOpacity>
   </View>
	
    </ScrollView>
		</View>


			)
	}
}
const styles = StyleSheet.create({
  container : {
    backgroundColor:'#ffffff',
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems: 'center'

  },
  logoText: {
     color:'#f47a24',
    fontSize:16,
    fontWeight: '500',
    justifyContent:'center',
    alignItems: 'center',
    textAlign: 'center'


  },
  inputBox: {
    width:260,
    backgroundColor:'rgba(255,255,255,0.3)',
    paddingHorizontal:4,
    paddingVertical:5,
    fontSize:16,
    borderBottomWidth: 2,
    borderBottomColor: "#cbcbcb",
    color:'#000000',
    marginVertical:20,
    },
    button: {
     width:130,
    marginRight:60,
    marginLeft:60,
    marginTop:10,
    paddingTop:8,
    paddingBottom:8,
    backgroundColor:'#f47a24',
    borderRadius:25,
    borderWidth: 4,
    borderColor: '#f47a24'
  },
    buttonText: {

    fontSize:16,
    fontWeight: '500',
    color:'#ffffff',
    textAlign: 'center'
   

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
