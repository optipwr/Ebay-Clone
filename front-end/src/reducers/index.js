import { combineReducers} from 'redux';
import GetItemReducer from './GetItemReducer.js';
import RegisterReducer from './RegisterReducer.js';
import LoginReducer from './LoginReducer.js';

const rootReducer = combineReducers({
	getItem: GetItemReducer,
	register: RegisterReducer,
	login: LoginReducer
})

export default rootReducer;
