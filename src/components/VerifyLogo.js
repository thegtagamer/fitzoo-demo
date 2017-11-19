import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';



export default class VerifyLogo extends Component<{}> {

	render(){
		return(

	<View style={styles.container}>

		<Image style={{width: 100, height: 82}} source={require('../images/Message_icon.png')}/>
	</View>


			)
	}
}

const styles = StyleSheet.create({
  container : {

    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems: 'center'
  },
 
});
