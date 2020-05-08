function onLoadPopulate(){
	var userId = document.getElementById("uId").value;	
	//alert(userId);
	if(userId!=null){
		populateJobInternshipContainer();
		populateVolunteerContainer();
		populateProjectContainer();
	}
	
}


document
  .getElementById("jobInternshipInformationForm")
  ["jobInternshipCurrentStatus"].addEventListener("change", function () {
    var form = document.getElementById("jobInternshipInformationForm");

    if (form["jobInternshipCurrentStatus"].checked == true) {
      form["jobInternshipEndYear"].disabled = true;
      form["jobInternshipEndMonth"].disabled = true;
    }
    if (form["jobInternshipCurrentStatus"].checked == false) {
      form["jobInternshipEndMonth"].disabled = false;
      form["jobInternshipEndYear"].disabled = false;
    }
  });

document
  .getElementById("volunteerInformationForm")
  ["volunteerCurrentStatus"].addEventListener("change", function () {
    var form = document.getElementById("volunteerInformationForm");

    if (form["volunteerCurrentStatus"].checked == true) {
      form["volunteerEndYear"].disabled = true;
      form["volunteerEndMonth"].disabled = true;
    }
    if (form["volunteerCurrentStatus"].checked == false) {
      form["volunteerEndMonth"].disabled = false;
      form["volunteerEndYear"].disabled = false;
    }
  });

document
  .getElementById("projectInformationForm")
  ["projectCurrentStatus"].addEventListener("change", function () {
    var form = document.getElementById("projectInformationForm");

    if (form["projectCurrentStatus"].checked == true) {
      form["projectEndYear"].disabled = true;
      form["projectEndMonth"].disabled = true;
    }
    if (form["projectCurrentStatus"].checked == false) {
      form["projectEndMonth"].disabled = false;
      form["projectEndYear"].disabled = false;
    }
  });

document
  .getElementById("jobInternshipFile")
  .addEventListener("change", function () {
    var file = this.files[0];
    console.log(file);
    document
      .getElementById("jobInternshipTypeOfAttachment")
      .setAttribute("value", file.name);
    if (file) {
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        console.log(this.result);
        document
          .getElementById("jobInternshipAttachment")
          .setAttribute("value", this.result);
      });
      reader.readAsDataURL(file);
    }
  });

document
  .getElementById("volunteerAttachmentFile")
  .addEventListener("change", function () {
    var file = this.files[0];
    console.log(file);
    document
      .getElementById("volunteerTypeOfAttachment")
      .setAttribute("value", file.name);
    if (file) {
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        console.log(this.result);
        document
          .getElementById("volunteerAttachment")
          .setAttribute("value", this.result);
      });
      reader.readAsDataURL(file);
    }
  });

document
  .getElementById("projectAttachmentFile")
  .addEventListener("change", function () {
    ////alert("changed");
    var file = this.files[0];
    console.log(file);
    document
      .getElementById("projectTypeOfAttachment")
      .setAttribute("value", file.name);
    if (file) {
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        console.log(this.result);
        document
          .getElementById("projectAttachment")
          .setAttribute("value", this.result);
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

/*All the function under this are for job/internship container*/
/*---------------------------------------------------------*/

function saveJobInternshipAPI(jobInternship){
	
	var userId = document.getElementById("uId").value;
	
	if(userId){
		
		 fetch("http://localhost:8086/saveJobInternship/" + userId, {
			    method: "POST",
			    headers: {
			      "Content-Type": "application/json",
			    },
			    body: JSON.stringify(jobInternship),
			  })
			    .then((response) => response.json())
			    .then((jobInternshipId) => {
			    	
			      console.log("Success:", jobInternshipId);
			      console.log("data is fetched");
			      if (jobInternshipId != null) {
			        
			    	  //addJobInternship(jobInternshipData);
			    	  
			    	  fetch("http://localhost:8086/getJobInternship/" + jobInternshipId, {
						    method: "GET",
						    headers: {
						      "Content-Type": "application/json",
						    },
						   
						  })
						    .then((response) => response.json())
						    .then((jobInternshipData) => {
						    	
						      console.log("Success:", jobInternshipData);
						      console.log("data is fetched");
						      if (jobInternshipData != null) {
						        
						    	  addJobInternship(jobInternshipData);
						    	  
						    	  swal("Good job!", "You clicked the button!", "success");
						    		
						      }
						      
						    })
						    .catch((error) => {
						      console.error("Error:", error);
						      return true;
					   });
			    	  
			      }
			      
			    })
			    .catch((error) => {
			      console.error("Error:", error);
			      return true;
		 });
	}
	
	
}

function editSaveJobInternshipAPI(jobInternship){
	
	var userId = document.getElementById("uId").value;

	if(userId){
		
		 fetch("http://localhost:8086/editSaveJobInternship/", {
			    method: "POST",
			    headers: {
			      "Content-Type": "application/json",
			    },
			    body: JSON.stringify(jobInternship),
			  })
			    .then((response) => response.json())
			    .then((jobInternshipId) => {
			      console.log("Success:", jobInternshipId);
			      console.log("data is fetched");
			      if (jobInternshipId != null) {
			        
			    	  fetch("http://localhost:8086/getJobInternship/" + jobInternshipId, {
						    method: "GET",
						    headers: {
						      "Content-Type": "application/json",
						    },
						   
						  })
						    .then((response) => response.json())
						    .then((jobInternshipData) => {
						    	
						      console.log("Success:", jobInternshipData);
						      console.log("data is fetched");
						      if (jobInternshipData != null) {
						        
						    	  //addJobInternship(jobInternshipData);
						    	  changeJobInternship(jobInternshipData);
						      }
						      
						    })
						    .catch((error) => {
						      console.error("Error:", error);
						      return true;
					   });
			    	  
			      }
			      
			    })
			    .catch((error) => {
			      console.error("Error:", error);
			      return true;
		 });
	}
	
}

function removeJobInternshipAPI( jobInternshipId ){
	
	fetch("http://localhost:8086/deleteJobInternship/" + jobInternshipId, {
	    method: "DELETE",
	    headers: {
	      "Content-Type": "application/json",
	    },
	   
	  })
	    .then((response) => console.log(response))
	    .then((data) => {
	    	console.log("Success: "+data);
	    	console.log("successfully deleted");
	    })
	    .catch((error) => {
	      console.error("Error:", error);
	      return null;
   });
  
	
}

function populateJobInternshipContainer(){
	
	var userId = document.getElementById("uId").value;
	
	if(userId){
		
		 fetch("http://localhost:8086/getAllJobInternship/" + userId, {
			    method: "GET",
			    headers: {
			      "Content-Type": "application/json",
			    },
			  })
			    .then((response) => response.json())
			    .then((jobInternships) => {
			      console.log("Success:", jobInternships);
			      console.log("data is fetched");
			      if (jobInternships != null) {
			        
			    	  iteratorForJobInternship(jobInternships);
			      }
			      
			    })
			    .catch((error) => {
			      console.error("Error:", error);
			      return null;
		 });

	}
	
}

function iteratorForJobInternship(jobInternships){
	
	for (var index = 0; index < jobInternships.length; index++) {
		addJobInternship( jobInternships[index] );
	}
	
}

function jobInternshipFormProcess() {
  var jobInternshipInformationForm = document.getElementById(
    "jobInternshipInformationForm"
  );
  var jobId = jobInternshipInformationForm["jobId"].value;
  var jobInternshipTitle =
    jobInternshipInformationForm["jobInternshipTitle"].value;
  var jobInternshipCompanyName =
    jobInternshipInformationForm["jobInternshipCompanyName"].value;
  var jobInternshipCountry =
    jobInternshipInformationForm["jobInternshipCountry"].value;
  var jobInternshipState =
    jobInternshipInformationForm["jobInternshipState"].value;
  var jobInternshipCity =
    jobInternshipInformationForm["jobInternshipCity"].value;
  var jobInternshipStartMonth =
    jobInternshipInformationForm["jobInternshipStartMonth"].value;
  var jobInternshipStartYear =
    jobInternshipInformationForm["jobInternshipStartYear"].value;
  var jobInternshipCurrentStatus =
    jobInternshipInformationForm["jobInternshipCurrentStatus"].checked;
  var jobInternshipEndMonth =
    jobInternshipInformationForm["jobInternshipEndMonth"].value;
  var jobInternshipEndYear =
    jobInternshipInformationForm["jobInternshipEndYear"].value;
  ////alert("jobInternshipEndYear:" + jobInternshipEndYear);
  var jobInternshipDescription =
    jobInternshipInformationForm["jobInternshipDescription"].value;
  var jobInternshipAttachment =
    jobInternshipInformationForm["jobInternshipAttachment"].value;
  var jobInternshipTypeOfAttachment =
    jobInternshipInformationForm["jobInternshipTypeOfAttachment"].value;
  

  var jobInternshipInformation;

  if (jobId == 0) {
    if (jobInternshipCurrentStatus == true) {
      jobInternshipInformation = {
        
        title: jobInternshipTitle,
        company: jobInternshipCompanyName,
        country: jobInternshipCountry,
        state: jobInternshipState,
        city: jobInternshipCity,
        startMonth: jobInternshipStartMonth,
        startYear: jobInternshipStartYear,
        currentStatus: jobInternshipCurrentStatus,
        endMonth: null,
        endYear: null,
        description: jobInternshipDescription,
        attachment: jobInternshipAttachment,
        typeOfAttachment: jobInternshipTypeOfAttachment,
      };
    } else {
      // //alert("for:" + jobInternshipEndYear);
      jobInternshipInformation = {
        
        title: jobInternshipTitle,
        company: jobInternshipCompanyName,
        country: jobInternshipCountry,
        state: jobInternshipState,
        city: jobInternshipCity,
        startMonth: jobInternshipStartMonth,
        startYear: jobInternshipStartYear,
        currentStatus: jobInternshipCurrentStatus,
        endMonth: jobInternshipEndMonth,
        endYear: jobInternshipEndYear,
        description: jobInternshipDescription,
        attachment: jobInternshipAttachment,
        typeOfAttachment: jobInternshipTypeOfAttachment,
      };
    }
    
    if(saveJobInternshipAPI(jobInternshipInformation)){
    	
    	document.getElementById("modalJobInternship").click();
    	
    	swal("Cancelled", "Error in saving you data!", "error");
    	
    }else{
    	
    	document.getElementById("modalJobInternship").click();
    	   
	    swal("Success", "Value is added successfully", "success");
	    
	    jobInternshipInformationForm.reset();
    	
    }

   
	
    ////alert("before calling:" + jobInternshipInformation.endyear);
    //addJob(jobInternshipInformation);
    console.log(jobInternshipInformation);
  } else {
    if (jobInternshipCurrentStatus == true) {
      jobInternshipInformation = {
        id: jobId,
        title: jobInternshipTitle,
        company: jobInternshipCompanyName,
        country: jobInternshipCountry,
        state: jobInternshipState,
        city: jobInternshipCity,
        startMonth: jobInternshipStartMonth,
        startYear: jobInternshipStartYear,
        currentStatus: jobInternshipCurrentStatus,
        endMonth: null,
        endYear: null,
        description: jobInternshipDescription,
        attachment: jobInternshipAttachment,
        typeOfAttachment: jobInternshipTypeOfAttachment,
      };
    } else {
      jobInternshipInformation = {
        id: jobId,
        title: jobInternshipTitle,
        company: jobInternshipCompanyName,
        country: jobInternshipCountry,
        state: jobInternshipState,
        city: jobInternshipCity,
        startMonth: jobInternshipStartMonth,
        startYear: jobInternshipStartYear,
        currentStatus: jobInternshipCurrentStatus,
        endMonth: jobInternshipEndMonth,
        endYear: jobInternshipEndYear,
        description: jobInternshipDescription,
        attachment: jobInternshipAttachment,
        typeOfAttachment: jobInternshipTypeOfAttachment,
      };
    }
    
 
    if(editSaveJobInternshipAPI(jobInternshipInformation)){
    	
    	document.getElementById("modalJobInternship").click();
    	
    	swal("Cancelled", "Error in saving you data!", "error");
    	
    }else{
    	
    	document.getElementById("modalJobInternship").click();
    	   
	    swal("Success", "Value is added successfully", "success");
	    
	    jobInternshipInformationForm.reset();
    	
    }
    
    //changeJob(jobInternshipInformation);
  }

  console.log(jobInternshipInformation);
}

function addJobInternship(job) {
	  ////alert("before calling:" + job.endyear);
	  // alert("1: " + job.endYear);
	  console.log(job);

	  var jobContainer = document.getElementById("jobContainer");

	  var newDiv = document.createElement("div");
	  newDiv.classList.add("new-update");
	  newDiv.classList.add("clearfix");
	  newDiv.id = job.id;

	  var icon = document.createElement("i");
	  icon.classList.add("icon-ok-sign");

	  newDiv.appendChild(icon);

	  var innerDIv1 = document.createElement("div");
	  innerDIv1.classList.add("update-done");

	  //element a is created
	  var a = document.createElement("a");
	  a.href = "#";

	  //element Strong is created
	  var strong = document.createElement("strong");
	  strong.innerText = job.title;
	  strong.id = job.id + "jobTitleId";

	  //strong element is append in a
	  a.appendChild(strong);

	  //element a is append in inner div1
	  innerDIv1.appendChild(a);

	  var span_Name = document.createElement("span");
	  span_Name.id = job.id + "jobCompany";
	  span_Name.innerText = job.company;

	  innerDIv1.appendChild(span_Name);

	  var nextSpan = document.createElement("span");
	  nextSpan.id = job.id + "jobYearMonth";

	  if (job.currentStatus == false) {
	    nextSpan.innerHTML =
	      "( " +
	      job.startMonth +
	      " " +
	      job.startYear +
	      " - " +
	      job.endMonth +
	      " " +
	      job.endYear +
	      " )";
	    //alert(job.endYear);
	  } else {
	    nextSpan.innerHTML =
	      "( " +
	      job.startMonth +
	      " " +
	      job.startYear +
	      " - " +
	      "currently work here )";
	  }

	  innerDIv1.appendChild(nextSpan);

	  var nextSpan1 = document.createElement("span");
	  nextSpan1.id = job.id + "jobDescription";

	  nextSpan1.innerText = job.description;

	  innerDIv1.appendChild(nextSpan1);

	 
	    var linkSpan = document.createElement("span");

	    var linkAnchor = document.createElement("a");
	    var textView = document.createElement("b");
	    var link = document.createTextNode("view attachment");
	    textView.appendChild(link);
	    linkAnchor.appendChild(textView);
	    linkAnchor.title = "view attachment";
	    linkAnchor.href =
	      "data:application/pdf;base64," + job.attachment;
	    linkAnchor.id = job.id + "jobAttachment";
	    //linkAnchor.addEventListener("click", editTableData);
	    linkSpan.appendChild(linkAnchor);

	    innerDIv1.appendChild(linkSpan);

	  /*var spanUrl = document.createElement("span");
	  var anchortUrl = document.createElement("a");
	  var linkUrl = document.createTextNode("attachment Url");
	  anchortUrl.appendChild(linkUrl);
	  anchortUrl.title = "attachment Url";
	  anchortUrl.href = course.url;
	  anchortUrl.id = course.id + "attachmentUrl";
	  spanUrl.appendChild(anchortUrl);

	  innerDIv1.appendChild(spanUrl);
	  */

	  //element inndiv1 is append in newEducationDiv
	  newDiv.appendChild(innerDIv1);

	  var innerDiv2 = document.createElement("div");
	  innerDiv2.classList.add("update-date");

	  var innerSpan = document.createElement("span");
	  innerSpan.classList.add("update-day");

	  var innerIcon = document.createElement("i");
	  innerIcon.id = "jobEdit";
	  innerIcon.classList.add("icon");
	  innerIcon.classList.add("icon-edit");
	  innerIcon.addEventListener("click", function () {
	    editJobInternship(job.id);
	  });
	  //innerIcon.setAttribute("");
	  innerSpan.appendChild(innerIcon);

	  var innerIcon1 = document.createElement("i");
	  innerIcon1.id = "jobTrash";
	  innerIcon1.classList.add("icon");
	  innerIcon1.classList.add("icon-trash");
	  innerIcon1.addEventListener("click", function () {
		  removeJobInternship(job.id);
	  });
	  //innerIcon1.onclick = "removeEducation(education.id)";
	  innerSpan.appendChild(innerIcon1);

	  innerDiv2.appendChild(innerSpan);

	  newDiv.appendChild(innerDiv2);

	  jobContainer.appendChild(newDiv);
	}

function removeJobInternship(jobId) {
		
	swal({
		title: "Are you sure?",
		text: "You will not be able to recover this Data!",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: '#DD6B55',
		confirmButtonText: 'Yes, delete it!',
		cancelButtonText: "No, cancel plx!",
		closeOnConfirm: false,
		closeOnCancel: false
	},
	function(isConfirm){
    if (isConfirm){
    
      removeJobInternshipAPI(jobId);
  	  document.getElementById(jobId).remove();
      swal("Deleted!", "Your Job/Internship is deleted", "success");
      
    } else {
      swal("Cancelled", "Your Job/Internship is safe :)", "error");
    }
	});
	
	  /*if (confirm("You want to delete Job/Internship?")){
		  removeJobInternshipAPI(jobId);
		  document.getElementById(jobId).remove();
	  }
	    */
	  
	}

function editJobInternship(jobInternshipId) {
		
	
	fetch("http://localhost:8086/getJobInternship/" + jobInternshipId, {
	    method: "GET",
	    headers: {
	      "Content-Type": "application/json",
	    },
	   
	  })
	    .then((response) => response.json())
	    .then((job) => {
	    	
	      console.log("Success:", job);
	      console.log("data is fetched");
	      if (job != null) {
	        
	    	  var jobInternshipInformationForm = document.getElementById(
	    			    "jobInternshipInformationForm"
	    			  );
	    			  jobInternshipInformationForm["jobId"].value = job.id;

	    			  jobInternshipInformationForm["jobInternshipTitle"].value = job.title;

	    			  jobInternshipInformationForm["jobInternshipCompanyName"].value = job.company;

	    			  jobInternshipInformationForm["jobInternshipCountry"].value = job.country;

	    			  jobInternshipInformationForm["jobInternshipState"].value = job.state;

	    			  jobInternshipInformationForm["jobInternshipCity"].value = job.city;

	    			  jobInternshipInformationForm["jobInternshipStartMonth"].value =
	    			    job.startMonth;

	    			  jobInternshipInformationForm["jobInternshipStartYear"].value = job.startYear;

	    			  jobInternshipInformationForm["jobInternshipCurrentStatus"].checked =
	    			    job.currentStatus;

	    			  jobInternshipInformationForm["jobInternshipEndMonth"].value = job.endMonth;

	    			  jobInternshipInformationForm["jobInternshipEndYear"].value = job.endYear;

	    			  jobInternshipInformationForm["jobInternshipDescription"].value =
	    			    job.description;

	    			    jobInternshipInformationForm["jobInternshipAttachment"].value =
	    			      "data:application/pdf;base64," + job.attachment;

	    			  jobInternshipInformationForm["jobInternshipTypeOfAttachment"].value =
	    			    job.typeOfAttachment;

	    			  document.getElementById("addJob").click();
	    	  
	      }
	      
	    })
	    .catch((error) => {
	      console.error("Error:", error);
	      return null;
   });

}

function changeJobInternship(job) {
	
	  document.getElementById(job.id + "jobTitleId").innerHTML = job.title;
	  document.getElementById(job.id + "jobCompany").innerHTML = job.company;
	  if (job.currentStatus == false) {
	    document.getElementById(job.id + "jobYearMonth").innerHTML =
	      "( " +
	      job.startMonth +
	      " " +
	      job.startYear +
	      " - " +
	      job.endMonth +
	      " " +
	      job.endYear +
	      " )";
	  } else {
	    document.getElementById(job.id + "jobYearMonth").innerHTML =
	      "( " +
	      job.startMonth +
	      " " +
	      job.startYear +
	      " - " +
	      "currently work here )";
	  }

	  document.getElementById(job.id + "jobDescription").innerHTML =
	    job.description;

	    document.getElementById(job.id + "jobAttachment").href =
	      "data:application/pdf;base64," + job.attachment;
}


/*---------------------------------------------------------*/



/*All the functions under this are for volunteer container*/

/*---------------------------------------------------------*/

function populateVolunteerContainer(){
	
	var userId = document.getElementById("uId").value;
	
	if(userId){
		
		 fetch("http://localhost:8086/getAllVolunteer/" + userId, {
			    method: "GET",
			    headers: {
			      "Content-Type": "application/json",
			    },
			  })
			    .then((response) => response.json())
			    .then((volunteers) => {
			    	
			      console.log("Success:", volunteers);
			      console.log("data is fetched");
			      if (volunteers != null) {
			        
			    	  iteratorForVolunteer(volunteers);
			      }
			      
			    })
			    .catch((error) => {
			      console.error("Error:", error);
			      return null;
		 });

	}
	
}

function iteratorForVolunteer(volunteers){
	
	for (var index = 0; index < volunteers.length; index++) {
		
		addVolunteer( volunteers[index] );
	}
	
}

function saveVolunteerAPI(volunteer){
	
	var userId = document.getElementById("uId").value;
	
	if(userId){
		
		 fetch("http://localhost:8086/saveVolunteer/" + userId, {
			    method: "POST",
			    headers: {
			      "Content-Type": "application/json",
			    },
			    body: JSON.stringify(volunteer),
			  })
			    .then((response) => response.json())
			    .then((volunteerId) => {
			    	
			      console.log("Success:", volunteerId);
			      console.log("data is fetched");
			      if (volunteerId != null) {
			        
			    	  //addJobInternship(jobInternshipData);
			    	  
			    	  fetch("http://localhost:8086/getVolunteer/" + volunteerId, {
						    method: "GET",
						    headers: {
						      "Content-Type": "application/json",
						    },
						   
						  })
						    .then((response) => response.json())
						    .then((volunteerData) => {
						    	
						      console.log("Success:", volunteerData);
						      console.log("data is fetched");
						      if (volunteerData != null) {
						        
						    	  addVolunteer(volunteerData);
						    	  
						      }
						      
						    })
						    .catch((error) => {
						      console.error("Error:", error);
						      return true;
					   });
			    	  
			      }
			      
			    })
			    .catch((error) => {
			      console.error("Error:", error);
			      return true;
		 });
	}
	
	
}

function editSaveVolunteerAPI(volunteer){
	
	var userId = document.getElementById("uId").value;

	if(userId){
		
		 fetch("http://localhost:8086/editSaveVolunteer", {
			    method: "POST",
			    headers: {
			      "Content-Type": "application/json",
			    },
			    body: JSON.stringify(volunteer),
			  })
			    .then((response) => response.json())
			    .then((volunteerId) => {
			    	
			      console.log("Success:", volunteerId);
			      console.log("data is fetched");
			      if (volunteerId != null) {
			        
			    	  fetch("http://localhost:8086/getVolunteer/" + volunteerId, {
						    method: "GET",
						    headers: {
						      "Content-Type": "application/json",
						    },
						   
						  })
						    .then((response) => response.json())
						    .then((volunteerData) => {
						    	
						      console.log("Success:", volunteerData);
						      console.log("data is fetched");
						      if (volunteerData != null) {
						        
						    	  changeVolunteer(volunteerData);
						    	  //addJobInternship(jobInternshipData);
						    	  //changeJobInternship(volunteerData);
						      }
						      
						    })
						    .catch((error) => {
						      console.error("Error:", error);
						      return true;
					   });
			    	  
			      }
			      
			    })
			    .catch((error) => {
			      console.error("Error:", error);
			      return true;
		 });
	}
	
}

function removeVolunteerAPI( volunteerId ){
	
	fetch("http://localhost:8086/deleteVolunteer/" + volunteerId, {
	    method: "DELETE",
	    headers: {
	      "Content-Type": "application/json",
	    },
	   
	  })
	    .then((response) => console.log(response))
	    .then((data) => {
	    	console.log("Success: "+data);
	    	console.log("successfully deleted");
	    })
	    .catch((error) => {
	      console.error("Error:", error);
	      return null;
   });
  
	
}

function volunteerFormProcess() {
	  var volunteerInformationForm = document.getElementById(
	    "volunteerInformationForm"
	  );
	  var volunteerId = volunteerInformationForm["volunteerId"].value;
	  var volunteerRole = volunteerInformationForm["volunteerRole"].value;
	  var volunteerOrganization =
	    volunteerInformationForm["volunteerOrganization"].value;
	  var volunteerStartMonth =
	    volunteerInformationForm["volunteerStartMonth"].value;
	  var volunteerStartYear = volunteerInformationForm["volunteerStartYear"].value;
	  var volunteerCurrentStatus =
	    volunteerInformationForm["volunteerCurrentStatus"].checked;
	  var volunteerEndMonth = volunteerInformationForm["volunteerEndMonth"].value;
	  var volunteerEndYear = volunteerInformationForm["volunteerEndYear"].value;
	  var volunteerDescription =
	    volunteerInformationForm["volunteerDescription"].value;
	  var volunteerAttachment =
	    volunteerInformationForm["volunteerAttachment"].value;
	  var volunteerTypeOfAttachment =
	    volunteerInformationForm["volunteerTypeOfAttachment"].value;

	  var volunteerInformation;

	  if (volunteerId == 0) {
	    if (volunteerCurrentStatus == true) {
	      volunteerInformation = {
	        
	        role: volunteerRole,
	        organization: volunteerOrganization,
	        startMonth: volunteerStartMonth,
	        startYear: volunteerStartYear,
	        currentStatus: volunteerCurrentStatus,
	        endMonth: null,
	        endYear: null,
	        description: volunteerDescription,
	        attachment: volunteerAttachment,
	        typeOfAttachment: volunteerTypeOfAttachment,
	      };
	    } else {
	      volunteerInformation = {
	        
	        role: volunteerRole,
	        organization: volunteerOrganization,
	        startMonth: volunteerStartMonth,
	        startYear: volunteerStartYear,
	        currentStatus: volunteerCurrentStatus,
	        endMonth: volunteerEndMonth,
	        endYear: volunteerEndYear,
	        description: volunteerDescription,
	        attachment: volunteerAttachment,
	        typeOfAttachment: volunteerTypeOfAttachment,
	      };
	    }
	    
	    //addVolunteer(volunteerInformation);
	    
	    if(saveVolunteerAPI(volunteerInformation)){
	    	
	    	document.getElementById("modalVolunteer").click();
	    	
	    	swal("Cancelled", "Error in saving you data!", "error");
	    	
	    }else{
	    	
	    	document.getElementById("modalVolunteer").click();
	    	   
		    swal("Success", "Value is added successfully", "success");
		    
		    volunteerInformationForm.reset();
	    	
	    }
	    
	  
	  } else {
	    if (volunteerCurrentStatus == true) {
	      volunteerInformation = {
	        id: volunteerId,
	        role: volunteerRole,
	        organization: volunteerOrganization,
	        startMonth: volunteerStartMonth,
	        startYear: volunteerStartYear,
	        currentStatus: volunteerCurrentStatus,
	        endMonth: null,
	        endYear: null,
	        description: volunteerDescription,
	        attachment: volunteerAttachment,
	        typeOfAttachment: volunteerTypeOfAttachment,
	      };
	    } else {
	      volunteerInformation = {
	        id: volunteerId,
	        role: volunteerRole,
	        organization: volunteerOrganization,
	        startMonth: volunteerStartMonth,
	        startYear: volunteerStartYear,
	        currentStatus: volunteerCurrentStatus,
	        endMonth: volunteerEndMonth,
	        endYear: volunteerEndYear,
	        description: volunteerDescription,
	        attachment: volunteerAttachment,
	        typeOfAttachment: volunteerTypeOfAttachment,
	      };
	    }
	    
	    //changeVolunteer(volunteerInformation);
	    

	    if(editSaveVolunteerAPI(volunteerInformation)){
	    	
	    	document.getElementById("modalVolunteer").click();
	    	
	    	swal("Cancelled", "Error in saving you data!", "error");
	    	
	    }else{
	    	
	    	document.getElementById("modalVolunteer").click();
	    	   
		    swal("Success", "Value is added successfully", "success");
		    
		    volunteerInformationForm.reset();
	    	
	    }
	    
	    
	  }

	  console.log(volunteerInformation);
	}

function addVolunteer(volunteer) {
	
	  var volunteerContainer = document.getElementById("volunteerContainer");

	  var newDiv = document.createElement("div");
	  newDiv.classList.add("new-update");
	  newDiv.classList.add("clearfix");
	  newDiv.id = volunteer.id;

	  var icon = document.createElement("i");
	  icon.classList.add("icon-ok-sign");

	  newDiv.appendChild(icon);

	  var innerDIv1 = document.createElement("div");
	  innerDIv1.classList.add("update-done");

	  //element a is created
	  var a = document.createElement("a");
	  a.href = "#";

	  //element Strong is created
	  var strong = document.createElement("strong");
	  strong.innerText = volunteer.role;
	  strong.id = volunteer.id + "volunteerRole";

	  //strong element is append in a
	  a.appendChild(strong);

	  //element a is append in inner div1
	  innerDIv1.appendChild(a);

	  var span_Name = document.createElement("span");
	  span_Name.id = volunteer.id + "volunteerOrganization";
	  span_Name.innerText = volunteer.organization;

	  innerDIv1.appendChild(span_Name);

	  var nextSpan = document.createElement("span");
	  nextSpan.id = volunteer.id + "volunteerYearMonth";

	  if (volunteer.currentStatus == false) {
	    nextSpan.innerHTML =
	      "( " +
	      volunteer.startMonth +
	      " " +
	      volunteer.startYear +
	      " - " +
	      volunteer.endMonth +
	      " " +
	      volunteer.endYear +
	      " )";
	    //alert(volunteer.endYear);
	  } else {
	    nextSpan.innerHTML =
	      "( " +
	      volunteer.startMonth +
	      " " +
	      volunteer.startYear +
	      " - " +
	      "currently work here )";
	  }

	  innerDIv1.appendChild(nextSpan);

	  var nextSpan1 = document.createElement("span");
	  nextSpan1.id = volunteer.id + "volunteerDescription";

	  nextSpan1.innerText = volunteer.description;

	  innerDIv1.appendChild(nextSpan1);


	    var linkSpan = document.createElement("span");

	    var linkAnchor = document.createElement("a");
	    var textView = document.createElement("b");
	    var link = document.createTextNode("view attachment");
	    textView.appendChild(link);
	    linkAnchor.appendChild(textView);
	    linkAnchor.title = "view attachment";
	    linkAnchor.href =
	      "data:application/pdf;base64," + volunteer.attachment;
	    linkAnchor.id = volunteer.id + "volunteerAttachment";
	    //linkAnchor.addEventListener("click", editTableData);
	    linkSpan.appendChild(linkAnchor);

	    innerDIv1.appendChild(linkSpan);

	  //element inndiv1 is append in newEducationDiv
	  newDiv.appendChild(innerDIv1);

	  var innerDiv2 = document.createElement("div");
	  innerDiv2.classList.add("update-date");

	  var innerSpan = document.createElement("span");
	  innerSpan.classList.add("update-day");

	  var innerIcon = document.createElement("i");
	  innerIcon.id = "volunteerEdit";
	  innerIcon.classList.add("icon");
	  innerIcon.classList.add("icon-edit");
	  innerIcon.addEventListener("click", function () {
	    editVolunteer(volunteer.id);
	  });
	  //innerIcon.setAttribute("");
	  innerSpan.appendChild(innerIcon);

	  var innerIcon1 = document.createElement("i");
	  innerIcon1.id = "volunteerTrash";
	  innerIcon1.classList.add("icon");
	  innerIcon1.classList.add("icon-trash");
	  innerIcon1.addEventListener("click", function () {
	    removeVolunteer(volunteer.id);
	  });
	  //innerIcon1.onclick = "removeEducation(education.id)";
	  innerSpan.appendChild(innerIcon1);

	  innerDiv2.appendChild(innerSpan);

	  newDiv.appendChild(innerDiv2);

	  volunteerContainer.appendChild(newDiv);
	  
}

function removeVolunteer(volunteerId) {
	
	swal({
		title: "Are you sure?",
		text: "You will not be able to recover this Data!",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: '#DD6B55',
		confirmButtonText: 'Yes, delete it!',
		cancelButtonText: "No, cancel plx!",
		closeOnConfirm: false,
		closeOnCancel: false
	},
	function(isConfirm){
    if (isConfirm){
    
      removeVolunteerAPI(volunteerId);
  	  document.getElementById(volunteerId).remove();
      swal("Deleted!", "Your Volunteer is deleted", "success");
      
    } else {
      swal("Cancelled", "Your Volunteer is safe :)", "error");
    }
	});
	
  /*if (confirm("You want to delete Volunteer Work?")){
	  removeVolunteerAPI(volunteerId);
	  document.getElementById(volunteerId).remove();
  }*/
    
}

function editVolunteer(volunteerId) {
	
	
	fetch("http://localhost:8086/getVolunteer/" + volunteerId, {
	    method: "GET",
	    headers: {
	      "Content-Type": "application/json",
	    },
	   
	  })
	    .then((response) => response.json())
	    .then((volunteer) => {
	    	
	      console.log("Success:", volunteer);
	      console.log("data is fetched");
	      if (volunteer != null) {
	    	  	
	    	  var volunteerInformationForm = document.getElementById(
	    			    "volunteerInformationForm"
	    			  );
	    			  volunteerInformationForm["volunteerId"].value = volunteer.id;
	    			  volunteerInformationForm["volunteerRole"].value = volunteer.role;

	    			  volunteerInformationForm["volunteerOrganization"].value =
	    			    volunteer.organization;

	    			  volunteerInformationForm["volunteerStartMonth"].value = volunteer.startMonth;
	    			  volunteerInformationForm["volunteerStartYear"].value = volunteer.startYear;

	    			  volunteerInformationForm["volunteerCurrentStatus"].checked =
	    			    volunteer.currentStatus;
	    			  volunteerInformationForm["volunteerEndMonth"].value = volunteer.endMonth;
	    			  volunteerInformationForm["volunteerEndYear"].value = volunteer.endYear;

	    			  volunteerInformationForm["volunteerDescription"].value =
	    			    volunteer.description;

	    			    volunteerInformationForm["volunteerAttachment"].value =
	    			      "data:application/pdf;base64," + volunteer.attachment;

	    			  volunteerInformationForm["volunteerTypeOfAttachment"].value =
	    			    volunteer.typeOfAttachment;

	    			  document.getElementById("addVolunteer").click();
	    	  
	      }
	      
	    })
	    .catch((error) => {
	      console.error("Error:", error);
	      return null;
   });
	
	  
}

function changeVolunteer(volunteer) {
		
	  document.getElementById(volunteer.id + "volunteerRole").innerHTML =
	    volunteer.role;
	  document.getElementById(volunteer.id + "volunteerOrganization").innerHTML =
	    volunteer.organization;
	  if (volunteer.currentStatus == false) {
	    document.getElementById(volunteer.id + "volunteerYearMonth").innerHTML =
	      "( " +
	      volunteer.startMonth +
	      " " +
	      volunteer.startYear +
	      " - " +
	      volunteer.endMonth +
	      " " +
	      volunteer.endYear +
	      " )";
	  } else {
	    document.getElementById(volunteer.id + "volunteerYearMonth").innerHTML =
	      "( " +
	      volunteer.startMonth +
	      " " +
	      volunteer.startYear +
	      " - " +
	      "currently work here )";
	  }

	  document.getElementById(volunteer.id + "volunteerDescription").innerHTML =
	    volunteer.description;

	    document.getElementById(volunteer.id + "volunteerAttachment").href =
	      "data:application/pdf;base64," + volunteer.attachment;
	  
}


/*---------------------------------------------------------*/



/*All the functions under this are for project container*/

/*---------------------------------------------------------*/

function populateProjectContainer(){
	
	var userId = document.getElementById("uId").value;
	
	if(userId){
		
		 fetch("http://localhost:8086/getAllProject/" + userId, {
			    method: "GET",
			    headers: {
			      "Content-Type": "application/json",
			    },
			  })
			    .then((response) => response.json())
			    .then((projects) => {
			    	
			      console.log("Success:", projects);
			      console.log("data is fetched");
			      if (projects != null) {
			        
			    	  iteratorForProject(projects);
			      }
			      
			    })
			    .catch((error) => {
			      console.error("Error:", error);
			      return null;
		 });

	}

}

function iteratorForProject(projects){
	
	for (var index = 0; index < projects.length; index++) {
		
		addProject(projects[index]);
		
	}
	
}

function saveProjectAPI(project){
	
	var userId = document.getElementById("uId").value;
		
		if(userId){
			
			 fetch("http://localhost:8086/saveProject/" + userId, {
				    method: "POST",
				    headers: {
				      "Content-Type": "application/json",
				    },
				    body: JSON.stringify(project),
				  })
				    .then((response) => response.json())
				    .then((projectId) => {
				    	
				      console.log("Success:", projectId);
				      console.log("data is fetched");
				      if (projectId != null) {
				        
				    	  //addJobInternship(jobInternshipData);
				    	  
				    	  fetch("http://localhost:8086/getProject/" + projectId, {
							    method: "GET",
							    headers: {
							      "Content-Type": "application/json",
							    },
							   
							  })
							    .then((response) => response.json())
							    .then((projectData) => {
							    	
							      console.log("Success:", projectData);
							      console.log("data is fetched");
							      if (projectData != null) {
							        
							    	  addProject(projectData);
							    	  
							      }
							      
							    })
							    .catch((error) => {
							      console.error("Error:", error);
							      return true;
						   });
				    	  
				      }
				      
				    })
				    .catch((error) => {
				      console.error("Error:", error);
				      return true;
			 });
		}

		
	}

function editSaveProjectAPI(project){
	
	var userId = document.getElementById("uId").value;

	if(userId){
		
		 fetch("http://localhost:8086/editSaveProject", {
			    method: "POST",
			    headers: {
			      "Content-Type": "application/json",
			    },
			    body: JSON.stringify(project),
			  })
			    .then((response) => response.json())
			    .then((projectId) => {
			    	
			      console.log("Success:", projectId);
			      console.log("data is fetched");
			      if (projectId != null) {
			        
			    	  fetch("http://localhost:8086/getProject/" + projectId, {
						    method: "GET",
						    headers: {
						      "Content-Type": "application/json",
						    },
						   
						  })
						    .then((response) => response.json())
						    .then((projectData) => {
						    	
						      console.log("Success:", projectData);
						      console.log("data is fetched");
						      if (projectData != null) {
						        
						    	  changeProject(projectData);
						    	  //addJobInternship(jobInternshipData);
						    	  //changeJobInternship(volunteerData);
						      }
						      
						    })
						    .catch((error) => {
						      console.error("Error:", error);
						      return true;
					   });
			    	  
			      }
			      
			    })
			    .catch((error) => {
			      console.error("Error:", error);
			      return true;
		 });
	}
	
}

function removeProjectAPI( projectId ){
	
	fetch("http://localhost:8086/deleteProject/" + projectId, {
	    method: "DELETE",
	    headers: {
	      "Content-Type": "application/json",
	    },
	   
	  })
	    .then((response) => console.log(response))
	    .then((data) => {
	    	console.log("Success: "+data);
	    	console.log("successfully deleted");
	    })
	    .catch((error) => {
	      console.error("Error:", error);
	      return null;
   });
  
	
}

function projectFormProcess() {
  var projectInformationForm = document.getElementById(
    "projectInformationForm"
  );
  var projectId = projectInformationForm["projectId"].value;
  var projectName = projectInformationForm["projectName"].value;
  var projectStartMonth = projectInformationForm["projectStartMonth"].value;
  var projectStartYear = projectInformationForm["projectStartYear"].value;
  var projectCurrentStatus =
    projectInformationForm["projectCurrentStatus"].checked;
  var projectEndMonth = projectInformationForm["projectEndMonth"].value;
  var projectEndYear = projectInformationForm["projectEndYear"].value;
  var projectAssociated = projectInformationForm["projectAssociated"].value;
  var projectDescription = projectInformationForm["projectDescription"].value;
  var projectUrl = projectInformationForm["projectUrl"].value;
  var sourceUrl = projectInformationForm["sourceUrl"].value;
  var projectAttachment = projectInformationForm["projectAttachment"].value;
  var projectTypeOfAttachment =
    projectInformationForm["projectTypeOfAttachment"].value;

  var projectInformation;

  if (projectId == 0) {
    if (projectCurrentStatus == true) {
      projectInformation = {
        
        name: projectName,
        startMonth: projectStartMonth,
        startYear: projectStartYear,
        currentStatus: projectCurrentStatus,
        endMonth: null,
        endYear: null,
        company: projectAssociated,
        description: projectDescription,
        projectUrl: projectUrl,
        sourceUrl: sourceUrl,
        attachment: projectAttachment,
        typeOfAttachment: projectTypeOfAttachment,
      };
    } else {
      projectInformation = {
        
        name: projectName,
        startMonth: projectStartMonth,
        startYear: projectStartYear,
        currentStatus: projectCurrentStatus,
        endMonth: projectEndMonth,
        endYear: projectEndYear,
        company: projectAssociated,
        description: projectDescription,
        projectUrl: projectUrl,
        sourceUrl: sourceUrl,
        attachment: projectAttachment,
        typeOfAttachment: projectTypeOfAttachment,
      };
    }
   
    
    if(saveProjectAPI(projectInformation)){
    	
    	document.getElementById("modalProject").click();
    	
    	swal("Cancelled", "Error in saving you data!", "error");
    	
    }else{
    	
    	document.getElementById("modalProject").click();
    	   
	    swal("Success", "Value is added successfully", "success");
	    
	    projectInformationForm.reset();
    	
    }
    
    //addProject(projectInformation);
  } else {
    if (projectCurrentStatus == true) {
      projectInformation = {
        id: projectId,
        name: projectName,
        startMonth: projectStartMonth,
        startYear: projectStartYear,
        currentStatus: projectCurrentStatus,
        endMonth: null,
        endYear: null,
        company: projectAssociated,
        description: projectDescription,
        projectUrl: projectUrl,
        sourceUrl: sourceUrl,
        attachment: projectAttachment,
        typeOfAttachment: projectTypeOfAttachment,
      };
    } else {
      projectInformation = {
        id: projectId,
        name: projectName,
        startMonth: projectStartMonth,
        startYear: projectStartYear,
        currentStatus: projectCurrentStatus,
        endMonth: projectEndMonth,
        endYear: projectEndYear,
        company: projectAssociated,
        description: projectDescription,
        projectUrl: projectUrl,
        sourceUrl: sourceUrl,
        attachment: projectAttachment,
        typeOfAttachment: projectTypeOfAttachment,
      };
    }
   

    if( editSaveProjectAPI(projectInformation)){
    	
    	document.getElementById("modalProject").click();
    	
    	swal("Cancelled", "Error in saving you data!", "error");
    	
    }else{
    	
    	document.getElementById("modalProject").click();
    	   
	    swal("Success", "Value is added successfully", "success");
	    
	    projectInformationForm.reset();
    	
    }
    
    //changeProject(projectInformation);
  }
  projectInformationForm.reset();
  console.log(projectInformation);
}

function addProject(project) {
  var projectContainer = document.getElementById("projectContainer");

  var newDiv = document.createElement("div");
  newDiv.classList.add("new-update");
  newDiv.classList.add("clearfix");
  newDiv.id = project.id;

  var icon = document.createElement("i");
  icon.classList.add("icon-ok-sign");

  newDiv.appendChild(icon);

  var innerDIv1 = document.createElement("div");
  innerDIv1.classList.add("update-done");

  //element a is created
  var a = document.createElement("a");
  a.href = "#";

  //element Strong is created
  var strong = document.createElement("strong");
  strong.innerText = project.name;
  strong.id = project.id + "projectName";

  //strong element is append in a
  a.appendChild(strong);

  //element a is append in inner div1
  innerDIv1.appendChild(a);

  var span_Name = document.createElement("span");
  span_Name.id = project.id + "projectCompany";
  span_Name.innerText = project.company;

  innerDIv1.appendChild(span_Name);

  var nextSpan = document.createElement("span");
  nextSpan.id = project.id + "projectYearMonth";

  if (project.currentStatus == false) {
    nextSpan.innerHTML =
      "( " +
      project.startMonth +
      " " +
      project.startYear +
      " - " +
      project.endMonth +
      " " +
      project.endYear +
      " )";
    //alert(project.endYear);
  } else {
    nextSpan.innerHTML =
      "( " +
      project.startMonth +
      " " +
      project.startYear +
      " - " +
      "currently working )";
  }

  innerDIv1.appendChild(nextSpan);

  var nextSpan1 = document.createElement("span");
  nextSpan1.id = project.id + "projectDescription";

  nextSpan1.innerText = project.description;

  innerDIv1.appendChild(nextSpan1);

  var urlSpan = document.createElement("span");

  //project url link
  var projectUrlAnchor = document.createElement("a");
  var projectText = document.createElement("b");
  var projectUrlLink = document.createTextNode("project Url");
  projectText.appendChild(projectUrlLink);
  projectUrlAnchor.appendChild(projectText);
  projectUrlAnchor.title = "project url";
  projectUrlAnchor.href = project.projectUrl;
  projectUrlAnchor.id = project.id + "projectUrl";

  urlSpan.appendChild(projectUrlAnchor);

  urlSpan.appendChild(document.createTextNode(" | "));

  //project source url link
  var projectSourceUrlAnchor = document.createElement("a");
  var sourceText = document.createElement("b");
  var projectSourceUrlLink = document.createTextNode("project source Url");
  sourceText.appendChild(projectSourceUrlLink);

  projectSourceUrlAnchor.appendChild(sourceText);
  projectSourceUrlAnchor.title = "project source url";
  projectSourceUrlAnchor.href = project.sourceUrl;
  projectSourceUrlAnchor.id = project.id + "sourceUrl";

  urlSpan.appendChild(projectSourceUrlAnchor);

  innerDIv1.appendChild(urlSpan);

  //span click anchor
  var modalSpan = document.createElement("span");

  var modalSpanAnchor = document.createElement("a");

  var pictureText = document.createElement("b");
  var modalSpanLink = document.createTextNode("attached picture");
  pictureText.appendChild(modalSpanLink);
  modalSpanAnchor.appendChild(pictureText);
  modalSpanAnchor.title = "attachment";
  modalSpanAnchor.href = "#" + project.id + "attachmentModal";
  modalSpanAnchor.setAttribute("data-toggle", "modal");
  //modalSpanAnchor.data - toggle = "modal";
  modalSpanAnchor.id = project.id + "attachment";

  modalSpan.appendChild(modalSpanAnchor);

  innerDIv1.appendChild(modalSpan);

  //creating modal
  var modalDiv = document.createElement("div");
  modalDiv.id = project.id + "attachmentModal";
  modalDiv.classList.add("modal");
  modalDiv.classList.add("hide");

  var headerModal = document.createElement("div");
  headerModal.classList.add("modal-header");

  var headerButton = document.createElement("button");
  headerButton.classList.add("close");
  headerButton.type = "button";
  headerButton.setAttribute("data-toggle", "modal");

  headerButton.appendChild(document.createTextNode("X"));
  headerModal.appendChild(headerButton);

  var headerName = document.createElement("h3");
  headerName.appendChild(document.createTextNode("attachment"));
  headerModal.appendChild(headerName);

  modalDiv.appendChild(headerModal);

  var bodyModal = document.createElement("div");
  bodyModal.classList.add("modal-body");

  var paragraphImage = document.createElement("p");

    var attachmentImage = document.createElement("img");
    attachmentImage.id = project.id + "projectAttachment";
    attachmentImage.src = //"img/gallery/imgbox3.jpg";
      "data:image/jpeg;base64," + project.attachment;
    //alert(attachmentImage.src);
    paragraphImage.appendChild(attachmentImage);

  bodyModal.appendChild(paragraphImage);

  modalDiv.appendChild(bodyModal);

  var footerModal = document.createElement("div");
  footerModal.classList.add("modal-footer");

  var footerAnchor = document.createElement("a");
  footerAnchor.classList.add("btn");
  footerAnchor.classList.add("btn-inverse");
  var cancelText = document.createTextNode("cancel");
  footerAnchor.appendChild(cancelText);
  footerAnchor.title = "cancel";
  footerAnchor.href = "#";
  footerAnchor.setAttribute("data-dismiss", "modal");
  //modalSpanAnchor.data - toggle = "modal";

  footerModal.appendChild(footerAnchor);

  modalDiv.appendChild(footerModal);

  innerDIv1.appendChild(modalDiv);
  //end modal

  /*
  let fileReader = new FileReader();
  fileReader.readAsDataURL(project.attachment);
  fileReader.onload = function (event) {
    console.log(fileReader.result);

    var linkSpan = document.createElement("span");

    var linkAnchor = document.createElement("a");
    var link = document.createTextNode("view attachment");
    linkAnchor.appendChild(link);
    linkAnchor.title = "view attachment";
    linkAnchor.href =
      "data:application/pdf;base64," + String(fileReader.result).split(",")[1];
    linkAnchor.id = project.id + "projectAttachment";
    //linkAnchor.addEventListener("click", editTableData);

    linkSpan.appendChild(linkAnchor);

    innerDIv1.appendChild(linkSpan);
  };
*/
  //element inndiv1 is append in newEducationDiv
  newDiv.appendChild(innerDIv1);

  var innerDiv2 = document.createElement("div");
  innerDiv2.classList.add("update-date");

  var innerSpan = document.createElement("span");
  innerSpan.classList.add("update-day");

  var innerIcon = document.createElement("i");
  innerIcon.id = "projectEdit";
  innerIcon.classList.add("icon");
  innerIcon.classList.add("icon-edit");
  innerIcon.addEventListener("click", function () {
    editProject(project.id);
  });
  //innerIcon.setAttribute("");
  innerSpan.appendChild(innerIcon);

  var innerIcon1 = document.createElement("i");
  innerIcon1.id = "projectTrash";
  innerIcon1.classList.add("icon");
  innerIcon1.classList.add("icon-trash");
  innerIcon1.addEventListener("click", function () {
    removeProject(project.id);
  });
  //innerIcon1.onclick = "removeEducation(education.id)";
  innerSpan.appendChild(innerIcon1);

  innerDiv2.appendChild(innerSpan);

  newDiv.appendChild(innerDiv2);

  projectContainer.appendChild(newDiv);

}

function removeProject(projectId) {
	
	swal({
		title: "Are you sure?",
		text: "You will not be able to recover this Data!",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: '#DD6B55',
		confirmButtonText: 'Yes, delete it!',
		cancelButtonText: "No, cancel plx!",
		closeOnConfirm: false,
		closeOnCancel: false
	},
	function(isConfirm){
    if (isConfirm){
    
    	removeProjectAPI(projectId);
  	  document.getElementById(projectId).remove();
      swal("Deleted!", "Your Project is deleted", "success");
      
    } else {
      swal("Cancelled", "Your Project is safe :)", "error");
    }
	});
	
/*  if (confirm("You want to delete Project?")){
	  removeProjectAPI(projectId);
	  document.getElementById(projectId).remove();
  }*/
    
}

function editProject(projectId) {
	
	 fetch("http://localhost:8086/getProject/" + projectId, {
		    method: "GET",
		    headers: {
		      "Content-Type": "application/json",
		    },
		   
		  })
		    .then((response) => response.json())
		    .then((project) => {
		    	
		      console.log("Success:", project);
		      console.log("data is fetched");
		      if (project != null) {
		        
		    	  var projectInformationForm = document.getElementById(
		    			    "projectInformationForm"
		    			  );
    			  projectInformationForm["projectId"].value = project.id;
    			  projectInformationForm["projectName"].value = project.name;
    			  projectInformationForm["projectStartMonth"].value = project.startMonth;
    			  projectInformationForm["projectStartYear"].value = project.startYear;
    			  projectInformationForm["projectCurrentStatus"].checked =
    			    project.currentStatus;
    			  projectInformationForm["projectEndMonth"].value = project.endMonth;
    			  projectInformationForm["projectEndYear"].value = project.endYear;
    			  projectInformationForm["projectAssociated"].value = project.company;
    			  projectInformationForm["projectDescription"].value = project.description;
    			  projectInformationForm["projectUrl"].value = project.projectUrl;
    			  projectInformationForm["sourceUrl"].value = project.sourceUrl;

    			  
    			    projectInformationForm["projectAttachment"].value =
    			      "data:image/jpeg;base64," + project.attachment;

    			  projectInformationForm["projectTypeOfAttachment"].value =
    			    project.typeOfAttachment;

    			  document.getElementById("addProject").click();
		    	  
		      }
		      
		    })
		    .catch((error) => {
		      console.error("Error:", error);
		      return null;
	   });
	
	
}

function changeProject(project) {
  document.getElementById(project.id + "projectName").innerHTML = project.name;
  document.getElementById(project.id + "projectCompany").innerHTML =
    project.company;
  if (project.currentStatus == false) {
    document.getElementById(project.id + "projectYearMonth").innerHTML =
      "( " +
      project.startMonth +
      " " +
      project.startYear +
      " - " +
      project.endMonth +
      " " +
      project.endYear +
      " )";
  } else {
    document.getElementById(project.id + "projectYearMonth").innerHTML =
      "( " +
      project.startMonth +
      " " +
      project.startYear +
      " - " +
      "currently working )";
  }

  document.getElementById(project.id + "projectDescription").innerHTML =
    project.description;

  document.getElementById(project.id + "projectUrl").href = project.projectUrl;

  document.getElementById(project.id + "sourceUrl").href = project.sourceUrl;

    document
      .getElementById(project.id + "projectAttachment")
      .setAttribute(
        "src",
        "data:image/jpeg;base64," + project.attachment
      );
  
}

/*---------------------------------------------------------*/

