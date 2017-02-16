import React, {Component} from 'react';
import { connect } from 'react-redux'

class Account extends Component {
    render() {
        return (
          <div className="account-form-wrapper">
             The account page
          </div>
        );
    }
}

function mapStateToProps(state){
  // return{
  //   loginResponse: state.login
  // }
}

function mapDispatchToProps(dispatch){
  // return bindActionCreators({
  //   LoginAction
  // }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
