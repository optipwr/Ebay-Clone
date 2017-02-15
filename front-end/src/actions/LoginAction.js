import $ from 'jquery';

export default function(loginData){
	// console.log(registerData)
	var thePromise = $.ajax({
		method: "GET",
		url: "http://localhost:3000/login",
		data: loginData
	});
	return{
		type: "LOGIN",
		payload: thePromise
	}
}
