import { combineReducers} from 'redux';
import GetItemReducer from './GetItemReducer.js'

const rootReducer = combineReducers({
	getItem: GetItemReducer
})

export default rootReducer;