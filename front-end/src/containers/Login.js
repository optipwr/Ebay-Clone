import React, {Component} from 'react';
import LoginAction from '../actions/LoginAction.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';

class Login extends Component {
   constructor(props){
        super(props);
   this.LoginInformation = this.LoginInformation.bind(this);
   }

   LoginInformation(event){
     event.preventDefault();
     var userName = event.target[0].value;
     var password = event.target[1].value;
     this.props.LoginAction({
       username: userName,
       password: password
     });
     
   }
   componentDidUpdate(prevProps, prevState) {
    if(this.props.loginResponse.msg==='foundUser'){browserHistory.push('/');}
   }
   render() {
       // console.log(this.props.loginResponse.msg)
       var message
       if(this.props.loginResponse.msg === 'noAccount'){
         message = 'That username does not exist'
       }else if(this.props.loginResponse.msg === 'badPassword'){
         message = 'You\'ve entered the wrong pasword'
        }else{
         message = ''
       }                
       return (
         <div className="login-form-wrapper">
           <div className='register-form-header'>
             Login to our site<br/>
             <span className='register-form-description'>
               Enter username and password to login
             </span>
           </div>          
                <form  className="text-center login-form" onSubmit={this.LoginInformation}>
                  <input type="text" className="form-control" placeholder="Username" name="" />
                  <input type="password" className="form-control" placeholder="Password" name="" />
                  {message}
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