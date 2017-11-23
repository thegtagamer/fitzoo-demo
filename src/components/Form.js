import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
 
} from 'react-native';


import {Actions} from 'react-native-router-flux';


export default class Logo extends Component<{}> {

	 profile(){
    Actions.profile()
  }


  render(){
		return(

  <View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='#cccccc' 
              placeholder="Email ID/ Phone"
              placeholderTextColor = "#c0c0c0"
              selectionColor="#f47a24"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='#cccccc' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#c0c0c0"
              ref={(input) => this.password = input}
              />  
       
           <TouchableHighlight
  style={styles.button}
  onPress={this.profile}
  underlayColor='#fff'>
      <Text style={styles.buttonText}>{this.props.type}</Text>
</TouchableHighlight>

      
      </View>


			)
	}
}

const styles = StyleSheet.create({
  container : {

    flexGrow: 1,
   
    justifyContent:'center',
    alignItems: 'center'
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
    marginRight:40,
    marginLeft:40,
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
   

  }
 
 
});
