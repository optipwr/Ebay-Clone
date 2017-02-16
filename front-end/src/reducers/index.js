import { combineReducers} from 'redux';
import GetItemReducer from './GetItemReducer.js';
import RegisterReducer from './RegisterReducer.js';
import LoginReducer from './LoginReducer.js';
import GetAccountReducer from './GetAccountReducer.js';

const rootReducer = combineReducers({
	getItem: GetItemReducer,
	register: RegisterReducer,
	login: LoginReducer,
	account: GetAccountReducer
})

export default rootReducer;
