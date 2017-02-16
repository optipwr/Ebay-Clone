import React, { Component } from 'react';
import Login from './containers/Login.js';
import { Link } from 'react-router';

class App extends Component {
    render() {
        return (
            <div className='ebay-wrapper'>
            	<div className='sign-in-nav-bar-wrapper'>
                    <div className='logo'><Link to='/'>Logo / Home</Link></div>
                    <div className='search-bar-wrapper'>
                        <Link to="/login">Sign in</Link> or
                        <Link to="/register">Register</Link>
                            &nbsp;&nbsp;&nbsp;
                        <form>
                            <input type='text' placeholder=" &nbsp;Search Items"/>
                            <button className='btn btn-warning'>Search</button>
                        </form>
                    </div>
            	</div>
            	<div className='body-wrapper'>
            		
                    {this.props.children}
            	</div>
			</div>
        );
    }
}

export default App;
