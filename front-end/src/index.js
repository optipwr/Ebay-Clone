import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Product from './components/Product.js';
import Home from './components/Home.js';
import '../public/stylesheets/styles.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/product" component={Product} />
		</Route>
	</Router>,
	document.getElementById('root')
);
