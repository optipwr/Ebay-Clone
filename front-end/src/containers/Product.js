import React, {Component} from 'react';
import FetchItemDetails from '../actions/FetchItemDetails.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class Product extends Component {
    componentDidMount() {
    	this.props.FetchItemDetails(this.props.params.id);
      // console.log(this.props)
    }
    render() {
        return (
			  <div className='body-content-wrapper'>
          <div className="col-xs-12">
            <h2 className="text-center">{this.props.item.name}</h2>
          </div>
          <div className="col-xs-12">
            <div className="row">
              <div className="col-md-4">
                <img className="img-responsive" alt='a' src={this.props.item.image_url}/>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-xs-12">
                    {this.props.item.buy_now_price}
                  </div>
                  <div className="col-xs-12">
                    <button className="btn">BUY NOW</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    {this.props.item.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
    		</div>
        );
    }
}

// go to all. like the array map function
function mapStateToProps(state){
	return{
		item: state.getItem.results[0]
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		FetchItemDetails
		// FetchItems: FetchItems
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
