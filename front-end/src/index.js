import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Product from './containers/Product.js';
import Home from './containers/Home.js';
import '../public/stylesheets/styles.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index.js'
import reduxPromise from 'redux-promise';

const theStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)(reducers)

ReactDOM.render(
	<Provider store={theStoreWithMiddleware}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="products/:id" component={Product} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
