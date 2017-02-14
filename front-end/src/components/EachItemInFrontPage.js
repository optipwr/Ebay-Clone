import React, { Component } from 'react';
import { Link } from 'react-router';

class EachItemInFrontPage extends Component {
    constructor(props){
      super(props);
    }
    render() {
      var routedUrl = `/products/${this.props.item.id}`
    	return(
    		<div className='each-item-wrapper'>
    			<div className='col-md-4 each-item-image '>
            <Link to={routedUrl}>
              <img src={this.props.item.image_url}/>
            </Link>
          </div>
    			<div className='col-md-7 col-md-offset-1 each-item-description '>
    				{this.props.item.name}
    			</div>
    		</div>
    	)
    }
}

export default EachItemInFrontPage;
