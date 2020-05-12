function validateForm() {
  //alert("hello");
  var form = document.getElementById("loginform");

  var fullname = form["fullname"].value.trim();
  var mail = form["mail"].value.trim();
  var username = form["username"].value.trim();
  var password = form["password"].value;
  var confirmpassword = form["confirmpassword"].value;

  var user = {
		  name : fullname,
		  username : username,
		  mail: mail,
		  password: password,	  
  };
  
  if (fullname != "") {
    if (fullname.length < 6) {
      document.getElementById("error").innerHTML =
        "minimum size of name should be 6";
      
      return;
    }

    if (username != "") {
      if (username.length < 6) {
        document.getElementById("error").innerHTML =
          "minimum size of username should be 6";
        return;
      }

      if (password != "") {
        if (password.length < 6) {
          document.getElementById("error").innerHTML =
            "minimum size of password should be 6";

          return;
        }else{
        	if (password.match(username)) {
                document.getElementById("error").innerHTML =
                  "username and password can't be same";
                return 
              }
        }

        if (confirmpassword != "") {
          if (confirmpassword.length < 6) {
            document.getElementById("error").innerHTML =
              "minimum size of confirmpassword should be 6";
            return;
          }

          if (password.match(confirmpassword)) {
            //alert("validated");
        	  checkIfUsernameExists(user);
        		  //saveUser(user);
        	
          } else {
            document.getElementById("error").innerHTML =
              "confirm password doesn't match";
          }
        } else {
          document.getElementById("error").innerHTML =
            "confirm password doesn't match";
        }
      } else {
        document.getElementById("error").innerHTML = "Enter valid password";
      }
    } else {
      document.getElementById("error").innerHTML = "Enter valid username";
    }
  } else {
    document.getElementById("error").innerHTML = "Enter valid name";
  }
}

function checkIfUsernameExists(user){
	
fetch("http://localhost:8086/checkIfUsernameExists",{
		
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: user.username,
	})
	.then((response)=> response.json())
	.then((data)=> {
		console.log(data);
		
		if(data==true){
			//alert("true");
			document.getElementById("error").innerHTML =
			      "Entered username already exists!!";
			
		}else if(data == false){
			//alert(false);
			saveUser(user);
		}
		
	})
	.catch((error)=>{
		
		console.log("error: "+error);
		return;
	});
	
}

function validateSiteForm() {
	
	//alert("heu");
	
  var form = document.getElementById("recoverform");

  var site = form["site"].value;

  var userWebsiteUrl = {
		  url: site,	  
  };
  
  if (site.length < 5) {
    document.getElementById("errorSite").innerHTML =
      "minimum size of id must be 5";
  }
  else{
	  checkIfUrlExists(userWebsiteUrl);
  }
  
}

function checkIfUrlExists(userWebsiteUrl){
	
	fetch("http://localhost:8086/checkIfUrlExists",{
		
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: userWebsiteUrl.url,
	})
	.then((response)=> response.json())
	.then((data)=> {
		
		console.log(data);
		
		if(data==true){
			
			document.getElementById("errorSite").innerHTML =
			      "Enter id is taken kindly change!!";
			
		}else if(data == false){
			
			saveUserUrl(userWebsiteUrl);
		}
		
	})
	.catch((error)=>{
		
		console.log("error: "+error);
		
	});
	
	
}

function saveUser(user){
	
	console.log(user);
	
	fetch("http://localhost:8086/addUser",{
		
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
	.then((response)=> response.json())
	.then((data)=>{
		
		console.log("success :"+data);
		
		if(data!=null){
			document.getElementById("uId").value = data;
			 document.getElementById("to-recover").click();
		}
		
	})
	.catch((error)=>{
		console.log("error: "+error);
		return null;
	});
	
}

function saveUserUrl(userWebsiteUrl){
	//alert("website process");
	var userId = document.getElementById("uId").value;
	
	if(userId!=0){
		
		fetch("http://localhost:8086/saveUserUrl/"+userId,{
			
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userWebsiteUrl),
		})
		.then((response)=> response.json())
		.then((data)=> {
			//alert("website save");
			console.log(data);
			
			if(data!=null){
				var a = document.createElement("a");
				a.href = "/";
				a.click();
			}
			
		})
		.catch((error)=>{
			
			console.log("error: "+error);
			
		});
		
	}
	
}