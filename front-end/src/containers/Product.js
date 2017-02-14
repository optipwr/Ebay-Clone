import React, {Component} from 'react';
import FetchItems from '../actions/FetchItems.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class Product extends Component {
    constructor(props){
		super(props);
    }
    componentDidMount() {
    	this.props.FetchItems();
    }
    render() {
        return (
			<div className='body-content-wrapper'>
                {this.props.items.message}
    		</div>
        );
    }
}

// go to all. like the array map function
function mapStateToProps(state){
	return{
		items: state.getItem
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		FetchItems
		// FetchItems: FetchItems
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
