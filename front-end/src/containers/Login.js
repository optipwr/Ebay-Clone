import React, {Component} from 'react';
import EachItemInFrontPage from '../components/EachItemInFrontPage.js'
import LoginAction from '../actions/LoginAction.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class Login extends Component {
    constructor(props){
		super(props);
        this.state = {
            loginResponse: ''
        }
    this.LoginInformation = this.LoginInformation.bind(this);
    }

    LoginInformation(event){
      event.preventDefault();
      var userName = event.target[0].value;
      var password = event.target[1].value;
      this.props.LoginAction({
        username: userName,
        password: password
      })
    }

    render() {
        console.log(this.props.loginResponse.msg)
        return (
          <div className="login-form-wrapper">
			       <form  className="text-center login-form" onSubmit={this.LoginInformation}>
                <input type="text" className="form-control" placeholder="Username" name="" />
                <input type="password" className="form-control" placeholder="Password" name="" />
                <button type="submit" className="btn">Sign In</button>
            </form>
          </div>
        );
    }
}

// go to all. like the array map function
function mapStateToProps(state){
	return{
		loginResponse: state.login
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		LoginAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
