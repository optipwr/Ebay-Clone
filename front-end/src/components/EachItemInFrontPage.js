import React, { Component } from 'react';
import { Link } from 'react-router';

class EachItemInFrontPage extends Component {
    constructor(props){
      super(props);
    }
    render() {
      var routedUrl = `/products/${this.props.item.id}`
      return(
        <div className='each-item-wrapper col-sm-6'>
          <div className='each-item-image '>
            <Link to={routedUrl}>
              <img src={this.props.item.image_url}/>
            </Link>
          </div>
          <div className='each-item-description '>
            {this.props.item.name}
          </div>
        </div>
      )
    }
}

export default EachItemInFrontPage;
