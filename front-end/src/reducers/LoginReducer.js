export default function (state = [], action){
	switch(action.type){
		case "LOGIN":
			localStorage.setItem("token",action.payload.token);
			return action.payload
		default:
						
	}
	return state;
}
