
function checkCredentials(){
	
	let form = document.getElementById("loginform");
	
	let username = form['username'].value;
	let password = form['password'].value;
	
	if(username.length<6){
		document.getElementById("msg").innerHTML = "Username is to short to be verified";
		document.getElementById("msg").style.color = "red";
		form['password'].value = "";
		return;
		
	}
	else if(password.length<6){
		document.getElementById("msg").innerHTML = "Password is to short to be verified";
		document.getElementById("msg").style.color = "red";
		form['password'].value = "";
		return;
	}
	
	let user = {
			username: username,
			password: password,
	};
	
	fetch(path+"/verifyLoginCredentials",{
		
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
		
	})
	.then((response)=> response.json())
	.then((data)=> {
		console.log("success: "+data);
		
		if(data!=0){
			document.getElementById("msg").innerHTML = "Successfully Logged in :)";
			document.getElementById("msg").style.color = "lightgreen";
			var a = document.createElement("a");
			a.href="login-process/"+data;
			a.click();
		}else{
			
			document.getElementById("msg").innerHTML = "Invalid Credentials!!<br>Kindly check your username/password";
			document.getElementById("msg").style.color = "red";
			form['password'].value = "";
		}
		
	})
	.catch((error)=> {
		console.log("Error: "+error);
	});
	
}
