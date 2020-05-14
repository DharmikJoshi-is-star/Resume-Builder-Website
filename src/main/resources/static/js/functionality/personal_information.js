
document.getElementById("file").addEventListener("change", function () {
  var file = this.files[0];
  console.log(file);
  document.getElementById("typePicture").setAttribute("value", file.name);
  if (file) {
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      console.log(this.result);
      //////alert(this.result);
      document.getElementById("picture").setAttribute("value", this.result);
    });

    reader.readAsDataURL(file);
  }
});

function dataURItoBlob(dataURI, callback) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(",")[1]);

  // separate out the mime component
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  var bb = new Blob([ab]);
  return bb;
}

function dataBlobtoURI(blob) {
  let fileReader = new FileReader();

  fileReader.readAsDataURL(blob);
  var uri;
  fileReader.onload = function (event) {
    uri = fileReader.result;
    console.log("uri:", uri);
    console.log(fileReader);
    console.log(fileReader.result);
    return fileReader;
  };
}

function personalInformationForm() {
  var form = document.getElementById("personalInformation");

  var id = form["personalInformationId"].value;
  var name = form["name"].value;
  var title = form["title"].value;
  var summary = form["summary"].value;
  var picture = form["picture"].value;
  var typePicture = form["typePicture"].value;

  var personalInformation = {
    id: id,
    name: name,
    title: title,
    summary: summary,
    picture: picture,
    typePicture: typePicture,
  };
  console.log(picture);
  
  if(id!=0){
	  
	  swal({
			title: "Are you sure?",
			text: "You want to change personal information?",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: '#DD6B55',
			confirmButtonText: 'Yes, change it!',
			closeOnConfirm: false,
			//closeOnCancel: false
		},
		function(){
			console.log(personalInformation);
			//alert("1");
			 if(callAddPersonalInformationAPI(personalInformation)){
			    	
			    	swal("Cancelled", "Error in saving you data!", "error");
			    	
			    }else{
			    	  
				    swal("Success", "Personal information is saved successfully", "success");
				    
			 }
			
		});
	  
		  
  }else{
	  
	  callAddPersonalInformationAPI(personalInformation);
	 
  }
	  

  
}

function setProfileCard(personalInformation) {
  //////alert("hello");
	//alert(personalInformation.summary);
  document.getElementById("userName").innerHTML = personalInformation.name;
  document.getElementById("userTitle").innerHTML = personalInformation.title;
  document.getElementById("userSummary").innerHTML =personalInformation.summary;
  document
    .getElementById("userPicture")
    .setAttribute(
      "src",
      "data:image/png;base64," + personalInformation.picture
    );
  //////alert("hello");
  console.log("done?");
}

function callAddPersonalInformationAPI(personalInformation) {
	
  console.log(personalInformation);
  //alert("2");
  var userId = document.getElementById("uId").value;
  //alert(userId);
  
  fetch(path+"/addPersonalInformation/" + userId, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personalInformation),
  })
    .then((response) => console.log(response))
    .then((data) => {
    	
      console.log("Success:", data);
      console.log("data is sent successfully");
      
      onLoadPopulateProfileCard();
    
    })
    .catch((error) => {
    	return true;
    });
}

function onLoadPopulateProfileCard() {
	
  var userId = document.getElementById("uId").value;
  if (userId != null) {
	  
    callGetpersonalInformationAPI(userId);
    
    var form = document.getElementById("personalInformation");

    form["file"].required = false;
    
  }
  
  populateUrl();
  
}

function callGetpersonalInformationAPI(userId) {
  fetch(path+"/getPersonalInformation/" + userId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((personalInformation) => {
      console.log("Success:", personalInformation);

      console.log("data is fetched");
      if (personalInformation != null) {
        setProfileCard(personalInformation);
        setPersonalInFormationForm(personalInformation);
      }
    })
    .catch((error) => {
      //console.error("Error:", error);
      return null;
    });

  return null;
}

function setPersonalInFormationForm(personalInformation) {
  ////alert("setting form");

  var form = document.getElementById("personalInformation");

  form["personalInformationId"].value = personalInformation.id;
  form["name"].value = personalInformation.name;
  form["title"].value = personalInformation.title;
  form["summary"].value = personalInformation.summary;
  form["picture"].value = personalInformation.picture;
  form["typePicture"].value = personalInformation.typePicture;
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
