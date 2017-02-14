import React, { Component } from 'react';
import Login from './containers/Login.js';
import { Link } from 'react-router';

class App extends Component {
    render() {
        return (
            <div className='container ebay-wrapper'>
            	<div className='sign-in-nav-bar-wrapper'>
                    <Link to="/login">
                        Log in
                    </Link>
            	</div>
            	<div className='body-wrapper'>
            		<div className='search-bar-wrapper'>
            			Logo goes here
            			<input type='text' placeholder="Search..."/>
            			<button className='btn btn-primary'>Search</button>
            		</div>
                    {this.props.children}
            	</div>
			</div>
        );
    }
}

export default App;
