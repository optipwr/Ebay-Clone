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
      var item = {name: '', description: '', image_url: '', buy_now_price: ''}
      if(this.props.item !== null){
        item = this.props.item.results[0]
      }

        return (
			  <div className='body-content-wrapper'>
          <div className="col-xs-12">
            <h2 className="text-center">{item.name}</h2>
          </div>
          <div className="col-xs-12">
            <div className="row">
              <div className="col-md-4">
                <img className="img-responsive" alt='a' src={item.image_url}/>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-xs-12">
                    {item.buy_now_price}
                  </div>
                  <div className="col-xs-12">
                    <button className="btn">BUY NOW</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    {item.description}
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
		item: state.getItem
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		FetchItemDetails : FetchItemDetails
		// FetchItems: FetchItems
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
