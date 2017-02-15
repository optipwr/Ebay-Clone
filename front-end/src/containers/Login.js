import React, {Component} from 'react';
import EachItemInFrontPage from '../components/EachItemInFrontPage.js'
import FetchItems from '../actions/FetchItems.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class Login extends Component {
    constructor(props){
		super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }
    componentDidMount() {
    	this.props.FetchItems();
    }

    changeUsername(event){
        this.setState({
            username: event.target.value
        })
    }

    changePassword(event){
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
			<form  className="form-inline" action="/login" method="">
                <div className="form-group">
                    <label className="sr-only">Sign In</label>
                    <div className="input-group">
                        <input type="text" className="form-control" value={this.state.username} onChange={this.changeUsername} placeholder="User Name" name="" />
                    </div>
                    <div className="input-group">
                        <input type="password" className="form-control" value={this.state.password} onChange={this.changePassword} placeholder="Password" name="" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
        );
    }
}

// go to all. like the array map function
function mapStateToProps(state){
	return{
		items: state.getItem
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		FetchItems
		// FetchItems: FetchItems
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
