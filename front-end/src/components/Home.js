import React, {Component} from 'react';
import EachItemInFrontPage from './EachItemInFrontPage.js';

class Home extends Component {
    render() {
        return (
			<div className='body-content-wrapper'>
    			<EachItemInFrontPage />
    			<EachItemInFrontPage />
    			<EachItemInFrontPage />
    		</div>
        );
    }
}

export default Home;