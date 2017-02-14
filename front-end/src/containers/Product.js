import React, {Component} from 'react';
import FetchItemDetails from '../actions/FetchItemDetails.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class Product extends Component {
    constructor(props){
		super(props);
    }
    componentDidMount() {
    	this.props.FetchItemDetails(this.props.params.id);
      console.log(this.props)
    }
    render() {
        return (
			<div className='body-content-wrapper'>
                {this.props.item.name}
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
