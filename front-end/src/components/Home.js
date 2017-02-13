import React, {Component} from 'react';
import $ from 'jquery';
import EachItemInFrontPage from './EachItemInFrontPage.js';

class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
        message: ''
      }
    }
    componentDidMount(){
      $.getJSON('http://localhost:3000/', (data) => {
        console.log(data);
        this.setState({
          message: data.message
        });
      })
    }
    render() {
        return (
			<div className='body-content-wrapper'>
    			<EachItemInFrontPage message={this.state.message}/>
    			<EachItemInFrontPage message={this.state.message}/>
    			<EachItemInFrontPage message={this.state.message}/>
    		</div>
        );
    }
}

export default Home;
