import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterAction from '../actions/RegisterAction.js';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			registrationResponse: ""
		}
        this.registerInformation = this.registerInformation.bind(this);
    }
	registerInformation(event){
		event.preventDefault();
		var userName = event.target[0].value
		var password = event.target[1].value
		this.props.registerAction({
			username: userName,
			password: password
		});
	}


	render(){
		if(this.props.registerResponse.msg == 'userNameTaken'){
			var message = 'User Name is Taken'
		}else if(this.props.registerResponse.msg == 'userInserted'){
			var message = 'User was inserted'
		}else{
			var message = ''
		}
		return(
			<div>
				<form onSubmit={this.registerInformation} >
					<input type="text" name="username" placeholder="Username" />
					<input type="password" name="password" placeholder="Password" />
					<input type="submit" value="Register" />
					<h1>{message}</h1>
				</form>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		registerResponse: state.register
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		registerAction: RegisterAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
