
function contactInformationForm() {
  var contactInformationForm = document.getElementById("contactInformation");
  var id = contactInformationForm["contactInformationId"].value;
  var email = contactInformationForm["email"].value;
  var contact = contactInformationForm["contact"].value;

  var contactInformation = {
    id:id,
    mail: email,
    contact: contact,
  };

  //alert("hello");
  
  if(id!=0){
	  
	  swal({
			title: "Are you sure?",
			text: "You want to change contact information?",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: '#DD6B55',
			confirmButtonText: 'Yes, change it!',
			closeOnConfirm: false,
			//closeOnCancel: false
		},
		function(){
			
			 if(saveContactInformation(contactInformation)){
			    	
			    	swal("Cancelled", "Error in saving you data!", "error");
			    	
			    }else{
			    	  
				    swal("Success", "Contact information is saved successfully", "success");
				    
			 }
			
		});
	  
	  /*if(confirm("Do you want to change contact?"))
		  saveContactInformation(contactInformation);*/
  }else{
	  saveContactInformation(contactInformation);
  }
	  
	
  contactInformationForm.reset();
  
}

function socialContactForm() {
	
  var socialContactForm = document.getElementById("socialInformation");
  
//alert( "form starting:"+socialContactForm["socialInformationId"].value);
  
  var id = socialContactForm["socialInformationId"].value;
  var facebookUrl = socialContactForm["facebookUrl"].value;
  var instagramUrl = socialContactForm["instagramUrl"].value;
  var googleUrl = socialContactForm["googleUrl"].value;
  var linkedInUrl = socialContactForm["linkedInUrl"].value;
  var githubUrl = socialContactForm["githubUrl"].value;

  if (
    facebookUrl == "" &&
    instagramUrl == "" &&
    googleUrl == "" &&
    linkedInUrl == "" &&
    githubUrl == ""
  ) {
    return 0;
  }

  var socialInformation = {
	id:id,
    facebookUrl: facebookUrl,
    instagramUrl: instagramUrl,
    googleUrl: googleUrl,
    linkedinUrl: linkedInUrl,
    githubUrl: githubUrl,
  };

  //alert("social media: "+socialInformation.id);
  
  if(id!=0){
	  
	  //alert("edit saveing hello");
	  swal({
			title: "Are you sure?",
			text: "You want to change Social contact information?",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: '#DD6B55',
			confirmButtonText: 'Yes, change it!',
			closeOnConfirm: false,
			//closeOnCancel: false
		},
		function(){
			
			 if(saveSocialInformation(socialInformation)){
			    	
			    	swal("Cancelled", "Error in saving you data!", "error");
			    	
			    }else{
			    	  
				    swal("Success", "Social contact information is saved successfully", "success");
				    
			 }
			
		});
	  
	  
	 /* if(confirm("Do you want to change social information?"))
		  saveSocialInformation(socialInformation);*/
  }else{
	  //alert("hello");
	  saveSocialInformation(socialInformation);
  }
	    
  console.log(socialInformation);
  socialContactForm.reset();
  
}


function saveContactInformation(contactInformation){
	
	console.log(contactInformation);
	console.log(JSON.stringify(contactInformation));
	var userId = document.getElementById("uId").value;
	
	if(userId!=null){
		
		fetch(path+"/saveContactInformation/" + userId, {
		    method: "POST", // or 'PUT'
		    headers: {
		      "Content-Type": "application/json",
		    },
		    body: JSON.stringify(contactInformation),
		  })
		    .then((response) => console.log(response))
		    .then((data) => {
		      console.log("Success:", data);
		      console.log("data is sent successfully");
		      getContactInformation();
		      
		      swal("Success", "Social contact information is saved successfully", "success");
		    })
		    .catch((error) => {
		      return true;
		    });
	}
}

function onLoadPopulate(){
	
	var userId = document.getElementById("uId");
	if(userId!=null){
		getContactInformation();
		getSocialInformation();
		populateUrl();
	}
		
}

function getContactInformation(){
	
	var userId = document.getElementById("uId").value;
	
	if(userId!=null){
		
		fetch(path+"/getContactInformation/" + userId, {
		    method: "GET", // or 'PUT'
		    headers: {
		      "Content-Type": "application/json",
		    },
		  })
		    .then((response) => response.json())
		    .then((contactInformation) => {
		      console.log("Success:", contactInformation);
		      console.log("Data is Fetched successFully");
		      if(contactInformation!=null)
		    	  setUpContactForm(contactInformation);
		    })
		    .catch((error) => {
		      console.error("Error:", error);
		    });
	}
}

function setUpContactForm(contactInformation){
	 var contactInformationForm = document.getElementById("contactInformation");
	 //alert(contactInformation.id);
	 contactInformationForm["contactInformationId"].value = contactInformation.id;
	 contactInformationForm["email"].value = contactInformation.mail;
	 contactInformationForm["contact"].value = contactInformation.contact;
}

function saveSocialInformation(socialInformation){
	
var userId = document.getElementById("uId").value;
	
	if(userId!=null){
		
		fetch(path+"/saveSocialInformation/" + userId, {
		    method: "POST", // or 'PUT'
		    headers: {
		      "Content-Type": "application/json",
		    },
		    body: JSON.stringify(socialInformation),
		  })
		    .then((response) => console.log(response))
		    .then((data) => {
		      console.log("Success:", data);
		      console.log("data is sent successfully");
		      getSocialInformation();
		      swal("Success", "Social contact information is saved successfully", "success");
		    })
		    .catch((error) => {
		    	return true;
		    });
	}
	
}

function getSocialInformation(){
	
var userId = document.getElementById("uId").value;
	
	if(userId!=null){
		
		fetch(path+"/getSocialInformation/" + userId, {
		    method: "GET", // or 'PUT'
		    headers: {
		      "Content-Type": "application/json",
		    },
		  })
		    .then((response) => response.json())
		    .then((socialInformation) => {
		      console.log("Success:", socialInformation);
		      console.log("Data is Fetched successFully");
		      if(socialInformation!=null)
		    	  setUpSocialForm(socialInformation);
		    })
		    .catch((error) => {
		      console.error("Error:", error);
		    });
	}
	
}

function setUpSocialForm(socialInformation){
	
	 //alert("social media: "+socialInformation.id);
	 var socialContactForm = document.getElementById("socialInformation");
	 socialContactForm["socialInformationId"].value = socialInformation.id;
	 socialContactForm["facebookUrl"].value = socialInformation.facebookUrl;
	 socialContactForm["instagramUrl"].value = socialInformation.instagramUrl;
	 socialContactForm["googleUrl"].value = socialInformation.googleUrl;
	 socialContactForm["linkedInUrl"].value = socialInformation.linkedinUrl;
	 socialContactForm["githubUrl"].value = socialInformation.githubUrl;
	

	 //alert( "form starting:"+socialContactForm["socialInformationId"].value);
	   
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
