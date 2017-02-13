import React, { Component } from 'react';

class EachItemInFrontPage extends Component {
    render() {
    	return(
    		<div className='each-item-wrapper'>
    			<div className='col-md-4 each-item-image '><img src ='http://placehold.it/350x250'/></div>
    			<div className='col-md-7 col-md-offset-1 each-item-description '>
    				16 Week Immersive BootcampAtlanta Tech VillageMeeting daysMon Tue Wed Thu Fri
    				16 Week Immersive BootcampAtlanta Tech VillageMeeting daysMon Tue Wed Thu Fri
    				16 Week Immersive BootcampAtlanta Tech VillageMeeting daysMon Tue Wed Thu Fri
    			</div>
    		</div>
    	)
    }
}

export default EachItemInFrontPage;