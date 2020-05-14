

function onLoadPopulate() {
	
	var userId = document.getElementById("uId").value;
	
	if(userId!=null){
		 
		 populateUrl();
	}
	
}



function populateUrl(){
	var userId = document.getElementById("uId").value;
	
	  fetch(path+"/getUserUrl/"+userId, {
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
		    	  

		    	  document.getElementById("visitSite").href = path+"/view?id="+userUrl.url;
		    	  document.getElementById("visitSite").title = "view "+path+"/view?id="+userUrl.url;
		    	  document.getElementById("siteText").innerHTML = path+"/view?id="+userUrl.url;
		    	  		    
		      }
		      
		    })
		    .catch((error) => {
		    	return true;
		    });
	
}


