import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className='container ebay-wrapper'>
            	<div className='sign-in-nav-bar-wrapper'>
            		LOG IN {"/"} Register, My Ebay, Shopping Cart (each are components)
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
