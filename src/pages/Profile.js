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
  ScrollView,
  Image

} from 'react-native';

import {Avatar} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import HeaderLogo from '../components/HeaderLogo';

export default class Profile extends Component<{}> {


  login(){
    Actions.login()
  }


	render(){
		return(

    

		<View style={styles.container}>



      <ScrollView showsVerticalScrollIndicator={false} >

        <View style={styles.header}>
 <View style={{flexDirection: "row"}}>

 <TouchableOpacity onPress={this._onPressButton}>
      <Image
        style={styles.MenuButton}
        source={require('../images/Menuicon.png')}
      />
    </TouchableOpacity>



  <HeaderLogo />

  </View>


      </View>
    <View style={styles.avatar}>
<Avatar 
  rounded
  xlarge 
  
  containerStyle={{flex: 3, marginTop: 25, marginLeft:30, marginRight:30, borderColor: "#f47a24", justifyContent:'center', alignItems: 'center'}}
 avatarStyle={{borderWidth: 6, borderColor: "#f47a24", }}
   source={require('../users/22140781_10212191430199280_7972072105631219814_n.jpg')} activeOpacity={0.7} />
</View>

<View>

  <Text style={styles.avatarName}>Abhishek Dey</Text>
</View>

<View style={styles.avataremail}>
  <Text style={styles.emailText}>thegtagamer@live.com</Text>
</View>


          
 <View style={styles.bioProfile}>
   <View style={{flexDirection: "row"}}>

    
        <Image style={{width: 35, height: 35, marginTop:10}} source={require('../images/Male-icon.png')}/>


      <Text style={styles.bioText}>Male</Text>

       <Image style={{width: 35, height: 35,marginLeft:20, marginTop:10}} source={require('../images/Height.png')}/>


<Text style={styles.bioText}>186 cms</Text>

 <Image style={{width: 35, height: 35,marginLeft:20, marginTop:10}} source={require('../images/Weighticon.png')}/>
     
     <Text style={styles.bioText}>70 kgs</Text>  
	</View>



  <View style={{flexDirection: "row"}}>

   <Image style={{width: 35, height: 35,marginLeft:20, marginTop:10}} source={require('../images/locationicon.png')}/>

<Text style={styles.addressText}>Ramapuram, Chennai</Text>


</View>


  <View style={{flexDirection: "row"}}>

 <Image style={{width: 35, height: 35,marginLeft:8, marginTop:10}} source={require('../images/Phone.png')}/>
     
     <Text style={styles.phoneText}>+91-7209908885</Text>  


</View>




</View>

<View style={styles.gym}>

  <Text style={styles.HeadDisplay}>My Gym</Text>


   <View style={{flexDirection: "row"}}>
      
   <View style={styles.gymavatar}>
<Avatar 
  rounded
  large 
  
  containerStyle={{flex: 3, marginTop: 25, marginLeft:30, marginRight:15, borderColor: "#ffffff"}}
 avatarStyle={{borderWidth: 4, borderColor: "#ffffff", }}
   source={require('../users/22140781_10212191430199280_7972072105631219814_n.jpg')} activeOpacity={0.7} />
</View>

<View style={styles.gymname}>
<Text style={styles.gymText}>HEALTH STUDIO</Text>

<View style={{flexDirection: "row"}}>
   <Image style={{width: 25, height: 25,marginLeft:20,marginRight:8,marginTop:8}} source={require('../images/locationicon.png')}/>

<Text style={styles.gymLocation}>Velachery</Text>
</View>


</View>

</View>


</View>
	
  <View style={styles.gym}>

  <Text style={styles.HeadDisplay}>My Trainer</Text>




   <View style={{flexDirection: "row"}}>
      
   <View style={styles.trainerAvatar}>
<Avatar 
  rounded
  large 
  
  containerStyle={{flex: 3, marginTop: 25, marginLeft:30, marginRight:15, borderColor: "#ffffff"}}
 avatarStyle={{borderWidth: 4, borderColor: "#ffffff", }}
   source={require('../users/22140781_10212191430199280_7972072105631219814_n.jpg')} activeOpacity={0.7} />
</View>

<View style={styles.trainername}>
<Text style={styles.trainerText}>Alex Ray</Text>





<View style={{flexDirection: "row"}}>
   <Image style={{width: 25, height: 25,marginLeft:20,marginRight:8,marginTop:8}} source={require('../images/Trainericon.png')}/>

<Text style={styles.trainerPos}>Lead Trainer</Text>
</View>




</View>

</View>





<View style={styles.editIcon}>

<TouchableOpacity onPress={this._onPressButton}>
      <Image
        style={styles.editButton}
        source={require('../images/edit_icon.png')}
      />
    </TouchableOpacity>

</View>


</View>
  
 </ScrollView>
    </View>

  		)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#222222',
    flex:1
    

  },
  header: {

    backgroundColor:'#ffffff',
    borderBottomWidth: 2,
    borderBottomColor: "#cbcbcb",
    justifyContent:'center',
    alignItems: 'center',
  },
  avatar:{

    justifyContent:'center',
    alignItems: 'center',
  },
  avatarName: {

    color:'#f47a24',
    fontSize:26,
    marginTop: 8,
    textAlign: 'center'

  },
  bioProfile: {

    justifyContent:'center',
    alignItems: 'center',

  },
  HeadDisplay: {
  
  color:'#f47a24',
  fontSize:22,
  marginTop: 8,
  marginLeft:28,


  },
  profileText: {

    color:'#fff',
    fontSize:19,
    

  },
  gymname: {
    marginTop:27
    

  },
   trainername: {
    marginTop:27
    

  },
  gymText: {

    color:'#fff',
    fontSize:22,
    

  },
  trainerText: {

    color:'#fff',
    fontSize:22,
    

  },
  bioText: {
   
   marginTop:18,
   color:'#fff',
   fontSize:24
    

  },
    addressText: {
   
   marginTop:18,
   marginLeft:22,
   color:'#fff',
   fontSize:24
    

  },
  phoneText: {
   
   marginTop:18,
   marginLeft:22,
   color:'#fff',

   fontSize:24
    

  },
  gymLocation: {
    marginTop:10,
    color:'#f47a24',
    fontSize:16,
    
  },
  trainerPos: {
 marginTop:10,
    color:'#f47a24',
    fontSize:16,
    
  },
  avataremail: {
    marginTop: 4
  },
  emailText: {

    color:'#fff',
    fontSize:14,
    textAlign: 'center'
  },
  gym: {
    
    marginTop: 30,

  },
  editIcon:{
    alignSelf: 'flex-end',  
    marginRight: 40
  },
  editButton:{
    width:80,
    height:80
  },
   MenuButton:{
    marginTop:8,
    width:80,
    height:80
  }

});
