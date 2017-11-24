import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';



export default class HeaderLogo extends Component<{}> {

	render(){
		return(

	<View style={styles.container}>

		<Image style={{width: 180, height: 62}} source={require('../images/Fitzoo-white-bg-logo.png')}/>
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
