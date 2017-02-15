import { combineReducers} from 'redux';
import GetItemReducer from './GetItemReducer.js';
import RegisterReducer from './RegisterReducer.js';

const rootReducer = combineReducers({
	getItem: GetItemReducer,
	register: RegisterReducer
})

export default rootReducer;