import React, { Component } from 'react';
class EachItem extends Component {
    render() {
    	return(
    		<div className='each-item-wrapper'>
    			<div className='col-md-4 each-item-image '><img src ='http://placehold.it/350x250'/></div>
    			<div className='col-md-8 each-item-description '>
    				16 Week Immersive BootcampAtlanta Tech VillageMeeting daysMon Tue Wed Thu Fri
    				16 Week Immersive BootcampAtlanta Tech VillageMeeting daysMon Tue Wed Thu Fri
    				16 Week Immersive BootcampAtlanta Tech VillageMeeting daysMon Tue Wed Thu Fri
    			</div>
    		</div>
    	)
    }
}

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
            		<div className='body-content-wrapper'>
            			<EachItem />
            			<EachItem />
            			<EachItem />
            		</div>
            	</div>
			</div>
        );
    }
}

export default App;
