import React, { Component } from 'react';
import { Container, Content, Text, Form, Item, Label, Input, Body, CheckBox, ListItem, Left, Button } from 'native-base';
import styles from './styles';
import { Image, AppRegistry } from 'react-native';

import App from './../App';

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: true,
    }
  }

  enableCheck() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    return(
      <Container style={styles.container}>
        <Content>
          <Image source={require('./icon.png')} style={styles.logo}/>
          <Form style={styles.form}>
            <Item>
              <Input placeholder="Username" placeholderTextColor='#f47a24' selectionColor='#f47a24'/>
            </Item>
            <Item>
              <Input placeholder="Password" placeholderTextColor='#f47a24' selectionColor='#f47a24'/>
            </Item>
            <Item style={styles.checkbox}>
              <CheckBox checked={this.state.checked} color='#f47a24' onPress={() => {this.enableCheck()}}/>
              <Left style={styles.rememberme}>
                <Text>Remember me</Text>
              </Left>
              <Text>Forgot password?</Text>
            </Item>
            <Button style={styles.button}>
              <Text style={styles.logintext}>Login</Text>
            </Button>
            <Item style={styles.footer} onPress={() => this.props.navigation.navigate('Register1')}>
              <Text>New here? </Text>
              <Text style={styles.signup}>Sign Up</Text>
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }
}

AppRegistry.registerComponent('LoginScreen', () => App);