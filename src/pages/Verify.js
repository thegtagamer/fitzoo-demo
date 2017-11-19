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

import VerifyLogo from '../components/VerifyLogo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Verify extends Component<{}> {


  login(){
    Actions.login()
  }


	render(){
		return(

		<View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false} >
	
		<VerifyLogo />
	<Text style={styles.logoText}>VERIFY MOBILE NUMBER</Text>
  <Text style={styles.otpText}>OTP has been sent to you on your mobile number.</Text>

  <Text style={styles.otpText}>Please Enter it below</Text>


  <TextInput style={styles.inputBox} 
              underlineColorAndroid='#cccccc' 
              placeholder="Enter OTP"
              placeholderTextColor = "#c0c0c0"
              selectionColor="#f47a24"
              
              onSubmitEditing={()=> this.fitnessprogram.focus()}
              />



          
 
   <View style={{flexDirection: "row"}}>
                  <TouchableHighlight
  style={styles.buttonresend}

  underlayColor='#fff'>
      <Text style={styles.buttonText}>Resend</Text>
</TouchableHighlight>



 <TouchableHighlight
  style={styles.button}
  onPress={this.login}
  underlayColor='#fff'>
<Text style={styles.buttonText}>Next</Text>
</TouchableHighlight>
       
	</View>


	<View style={styles.signupTextCont}>

	 <TouchableOpacity onPress={this.goBack}><Text style={styles.signupText}>Change number? 
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
     color:'#585858',
    fontSize:24,
    fontWeight: '500',
    justifyContent:'center',
    alignItems: 'center',
    textAlign: 'center',
    marginVertical:12


  },

   otpText: {
     color:'#585858',
    fontSize:16,
   
    justifyContent:'center',
    alignItems: 'center',
    textAlign: 'center',
    marginVertical:4


  },
  inputBox: {
 width:300,
    backgroundColor:'rgba(255,255,255,0.3)',
    paddingHorizontal:4,
    paddingVertical:5,
    fontSize:16,
    borderBottomWidth: 2,
    borderBottomColor: "#cbcbcb",
    marginVertical: 20,
    color:'#000000',
    
    justifyContent:'center',
    alignItems: 'center'
 
    },

   
    button: {
     width:130,
    marginRight:10,
    marginLeft:10,
    marginTop:10,
    paddingTop:8,
    paddingBottom:8,
    backgroundColor:'#f47a24',
    borderRadius:25,
    borderWidth: 4,
    borderColor: '#f47a24',

  },
    buttonresend: {
     width:130,
    marginRight:10,
    marginLeft:10,
    marginTop:10,
    paddingTop:8,
    paddingBottom:8,
    backgroundColor:'#585858',
    borderRadius:25,
    borderWidth: 4,
    borderColor: '#585858',

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
