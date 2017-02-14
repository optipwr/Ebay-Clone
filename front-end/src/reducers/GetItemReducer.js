export default function (state = [], action){
	switch(action.type){
		case "GET_ITEM" :
			return action.payload
		case 'GET_ITEM_DETAILS':
			return action.payload
	}
	return state
}
