


function onLoadPopulate() {
	
	var userId = document.getElementById("uId").value;
	
	if(userId!=null){
		 
		 populateUrl();
	}
	
}



function populateUrl(){
	var userId = document.getElementById("uId").value;
	
	  fetch("http://localhost:8086/getUserUrl/"+userId, {
		    method: "GET", // or 'PUT'
		    headers: {
		      "Content-Type": "application/json",
		    },
		  })
		    .then((response) => response.json())
		    .then((userUrl) => {
		      console.log("Success:", userUrl);
		      console.log("data is sent successfully");
		      
		      if(userUrl){
		    	  
		    	  document.getElementById("visitSite").href = "http://localhost:8086/view?id="+userUrl.url;
		    	  document.getElementById("visitSite").title = "view localhost:8086/view?id="+userUrl.url;
		    	  document.getElementById("siteText").innerHTML = "localhost:8086/view?id="+userUrl.url;
		    	  
		      }
		      
		    })
		    .catch((error) => {
		    	return true;
		    });
	
}


