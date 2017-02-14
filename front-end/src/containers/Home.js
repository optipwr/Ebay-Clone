import React, {Component} from 'react';
import EachItemInFrontPage from '../components/EachItemInFrontPage.js'
import FetchItems from '../actions/FetchItems.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props){
  		super(props);
    }
    componentDidMount() {
    	this.props.FetchItems();
    }
    render() {
      if(this.props.items.results !== undefined){
        var items = []
        this.props.items.results.map(value => {
          items.push(<EachItemInFrontPage item={value} key={value.id}/>)
        })
      }
      return (
  			<div className='body-content-wrapper'>
      		{items}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);





// export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);



//     this.changeZipCode = this.changeZipCode.bind(this);
//     this.getMovie = this.getMovie.bind(this);
//     this.changeMovie = this.changeMovie.bind(this);
//     this.getStock = this.getStock.bind(this);
//     this.changeStock = this.changeStock.bind(this);
//   }
//   changeStock(e){
//     this.setState({
//       stockSearch: e.target.value
//     })
//   }
//   getStock(e){
//     e.preventDefault();
//     this.props.FetchStock(this.state.stockSearch)
//

//     var stockData
//     if(this.props.stockData == null){stockData = ''}
//     // else{stockData = this.props.stockData;};
//     else{stockData = this.props.stockData.query.results.quote.symbol + ': ' + this.props.stockData.query.results.quote.Bid};

//     // else{stockData = this.props.stockData.query.quote.symbol + ": " + this.props.stockData.query.quote.Bid};
//     return (
//       <div>
//         <form onSubmit={this.getWeather}>
//           <input placeholder="Enter Zip Code" value={this.state.zipCode} onChange={this.changeZipCode} />
//           <button type='submit' className='btn btn-primary'>Get the Weather!</button>
//         </form>
//         <form onSubmit={this.getMovie}>
//           <input placeholder="Enter Movie Name" value={this.state.movieSearch} onChange={this.changeMovie} />
//           <button type='submit' className='btn btn-primary'>Get the Movie!</button>
//         </form>
//         <form onSubmit={this.getStock}>
//           <input placeholder="Enter Stock Symbol" value={this.state.stockSearch} onChange={this.changeStock} />
//           <button type='submit' className='btn btn-primary'>Get the Stock!</button>
//         </form>
//         <div>Weather Data : {weatherData}</div>
//         <div>Movie Images : {movieImages}</div>
//         <div>Stock {stockData}</div>
//       </div>
//     );
//   }
// }
// // poster_path
