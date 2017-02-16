import React, {Component} from 'react';
import FetchAccount from '../actions/FetchAccount.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class Account extends Component {
    componentDidMount() {
      this.props.FetchAccount(this.props.params.username);
      console.log(this.props.params.username)

    }     
    render() {
      var accountName = ''
      if(this.props.account.results !== undefined){
              accountName = this.props.account.results[0].name
            }else{
              accountName = ''
            }
        return (
          <div className="account-form-wrapper">
             {accountName}
          </div>
        );
    }
}

function mapStateToProps(state){
  console.log(state.account)
  return{
    account: state.account
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    FetchAccount
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
