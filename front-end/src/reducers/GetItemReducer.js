export default function (state = [], action){
	console.log(action)
	switch(action.type){
		case "GET_ITEM" :
		console.log('item retrieved')
		return action.payload
	}
	return state
}