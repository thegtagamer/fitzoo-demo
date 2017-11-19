import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import SignupNext from './pages/SignupNext';
import Verify from './pages/Verify';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="signup" component={Signup} title="Register"/>
			        <Scene key="signupNext" component={SignupNext} title="Register"/>
			        <Scene key="verify" component={Verify} title="Verify"/>
			    </Stack>
			 </Router>
			)
	}
}