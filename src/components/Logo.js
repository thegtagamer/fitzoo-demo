import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';



export default class Logo extends Component<{}> {

	render(){
		return(

	<View style={styles.container}>

		<Image style={{width: 125, height: 125}} source={require('../images/logo.png')}/>
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
