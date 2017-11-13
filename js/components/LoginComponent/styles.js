import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#ffffff'
  },
  logo: {
    height: 120,
    width: 120,
    marginTop: 105,
    alignSelf: 'center'
  },
  form: {
    paddingTop: 25,
    paddingRight: 15.5,
  },
  checkbox: {
    borderColor: 'transparent',
    paddingTop: 25,
    paddingRight: 15.5,
  },
  rememberme: {
    paddingLeft: 13,
  },
  button: {
    alignSelf: 'center',
    marginTop: 25,
    width: 127,
    backgroundColor: '#f47a24',
    borderRadius: 25,
  },
  logintext: {
    paddingLeft: 42.5,
  },
  footer: {
    borderColor: 'transparent',
    paddingTop: 25,
    alignSelf: 'center'
  },
  signup: {
    color: '#f47a24'
  }
})

export default styles;
