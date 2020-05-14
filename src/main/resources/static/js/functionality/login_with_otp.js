
function setMsg(){
	document.getElementById("msg").innerHTML = "";
	document.getElementById("otpmsg").innerHTML = "";
	
}

function verifyMailAddress(mailAddress){
	
	//alert("hello");
	
	if(mailAddress){
		
		fetch(path+"/emailVerificationProces",{
			
			 method: "POST", 
			 headers: {
			      "Content-Type": "application/json",
			    },
			 body: mailAddress,
			
		})
		.then((response)=> response.json())
		.then((data)=>{
			
			if(data==true){
				console.log("Success: ",data);
				document.getElementById("msg").innerHTML = "Mail sent successfully!!";
				document.getElementById("msg").style.color = "lightgreen";
				
				document.getElementById("otpmsg").innerHTML = "Check your mail!!<br>We have mailed you an OTP for login purpose :)"
				document.getElementById("otpmsg").style.color = "lightgreen";
				
				document.getElementById("to-recover").click();
				
			}else if(data==false){
				
				document.getElementById("msg").innerHTML = "Mail could not be sent!!<br>kindly check your connection/mail address";
				document.getElementById("msg").style.color = "red";
			}
				
			
		})
		.then((error)=>{
			console.log("Error: ",error);
		});
		
	}
}

//incomplete function 
function verifyOTP(){
	
	var otp = document.getElementById('otp').value;
	
	//alert("hey");
	
	if(otp){
		
			fetch(path+"/verifyLoginOtp",{
				method: 'POST',
				headers: {
				      "Content-Type": "application/json",
				    },
				body: otp,
			})
			.then((response) => response.json())
			.then((data) => {
				
				console.log("success ", data);
				
				//alert(data);
				
				if(data){
					//alert(data);
					console.log("success ", data);
					
					if(data!=0){
						document.getElementById("otpmsg").innerHTML = "Correct OTP!!"
						document.getElementById("otpmsg").style.color = "lightgreen";
						
						//here is a task to complete
						var a = document.createElement("a");
						a.href="login-process/"+data;
						a.click();
						
					}else{
						//alert("hey");
						document.getElementById("otpmsg").innerHTML = "Incorrect OTP!!"
							document.getElementById("otpmsg").style.color = "red";
					}
				}
			})
			.catch((error)=> {
				document.getElementById("otpmsg").innerHTML = "Incorrect OTP!!";
				document.getElementById("otpmsg").style.color = "red";
				//alert(error);
				return true;
			});
		
	}
	
}

function checkIfMailExists(){
	
	var mailAddress = document.getElementById("mail").value;
	
	//alert(mailAddress);
	
	fetch(path+"/checkIfMailExists",{
		
		 method: "POST", 
		 headers: {
		      "Content-Type": "application/json",
		    },
		 body: mailAddress,
		
	})
	.then((response)=> response.json())
	.then((data)=>{
		
		if(data==true){
			console.log("Success: ",data);
			document.getElementById("msg").innerHTML = "Mail processing started!!<br>kindly wait till process ends";
			document.getElementById("msg").style.color = "lightgreen";
			verifyMailAddress(mailAddress);
			
		}else{
			document.getElementById("msg").innerHTML = "Entered Mail address doesn't exist!!";
			document.getElementById("msg").style.color = "red";
		}
			
		
	})
	.then((error)=>{
		console.log("Error: ",error);
	});
	
	
}