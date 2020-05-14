

document.getElementById("addEducation").onclick = function(){
	
	document.getElementById("educationInformationForm").reset();
}

document.getElementById("addCourse").onclick = function(){
	
	document.getElementById("courseInformationForm").reset();
}

document.getElementById("addCertificate").onclick = function(){
	
	document.getElementById("certificateInformationForm").reset();
}


//alert(window.location.href);

function onLoadPopulate(){
	var userId = document.getElementById("uId").value;
	if(userId!=null){
		populateGraduationContainer();
		populateCourseContainer();
		populateCertificationContainer();
		populateUrl();
	}
}


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


/*All the function inside this are for Graduation(education) container and form */
/*-------------------------------------------------------------*/	
document.getElementById("educationInformationForm")["currentStatus"].addEventListener("change", function () {
  if (
    document.getElementById("educationInformationForm")["currentStatus"]
      .checked == true
  ) {
    document.getElementById("educationInformationForm")[
      "completionMonth"
    ].disabled = true;
    document.getElementById("educationInformationForm")[
      "completionYear"
    ].disabled = true;
  }
  if (
    document.getElementById("educationInformationForm")["currentStatus"]
      .checked == false
  ) {
    document.getElementById("educationInformationForm")[
      "completionMonth"
    ].disabled = false;
    document.getElementById("educationInformationForm")[
      "completionYear"
    ].disabled = false;
  }
});


function addEducation(education) {
	
	  var educationContainer = document.getElementById("educationContainer");

	  var newEducationDiv = document.createElement("div");
	  newEducationDiv.classList.add("new-update");
	  newEducationDiv.classList.add("clearfix");
	  newEducationDiv.id = education.id;

	  var eduIcon = document.createElement("i");
	  eduIcon.classList.add("icon-ok-sign");

	  newEducationDiv.appendChild(eduIcon);

	  var innerDIv1 = document.createElement("div");
	  innerDIv1.classList.add("update-done");

	  //element a is created
	  var a = document.createElement("a");
	  a.href = "#";

	  //element Strong is created
	  var strong = document.createElement("strong");
	  strong.innerText = education.type;
	  strong.id = education.id + "educationTypeId";

	  //strong element is append in a
	  a.appendChild(strong);

	  //element a is append in inner div1
	  innerDIv1.appendChild(a);

	  var span_universityName = document.createElement("span");
	  span_universityName.id = education.id + "educationUniversityId";
	  if (education.currentStatus == true) {
	    span_universityName.innerText =
	      education.universityName + " ( Currently Pursuing ) ";
	  } else {
	    span_universityName.innerText =
	      education.universityName +
	      " ( " +
	      education.completionMonth +
	      " " +
	      education.completionYear +
	      " )";
	  }

	  innerDIv1.appendChild(span_universityName);

	  var span_country = document.createElement("span");
	  span_country.id = education.id + "educationCountryId";
	  span_country.innerText = education.city + ", " + education.country;

	  innerDIv1.appendChild(span_country);

	  //element inndiv1 is append in newEducationDiv
	  newEducationDiv.appendChild(innerDIv1);

	  var innerDiv2 = document.createElement("div");
	  innerDiv2.classList.add("update-date");

	  var innerSpan = document.createElement("span");
	  innerSpan.classList.add("update-day");

	  
	  var editAnchor = document.createElement("a");
	  editAnchor.title = "edit";
	  editAnchor.href = "javascript:void(0);";

	  var innerIcon = document.createElement("i");
	  innerIcon.classList.add("icon");
	  innerIcon.classList.add("icon-edit");
	  innerIcon.addEventListener("click", function () {
	    editEducation(education.id);
	  });
	  //innerIcon.setAttribute("");
	  editAnchor.appendChild(innerIcon);
	  innerSpan.appendChild(editAnchor);

	  var trashAnchor = document.createElement("a");
	  trashAnchor.title = "delete";
	  trashAnchor.href = "javascript:void(0);";

	  var innerIcon1 = document.createElement("i");
	  innerIcon1.classList.add("icon");
	  innerIcon1.classList.add("icon-trash");
	  innerIcon1.addEventListener("click", function () {
	    removeEducation(education.id);
	  });
	  //innerIcon1.onclick = "removeEducation(education.id)";
	  trashAnchor.appendChild(innerIcon1);
	  innerSpan.appendChild(trashAnchor);

	  innerDiv2.appendChild(innerSpan);

	  newEducationDiv.appendChild(innerDiv2);

	  educationContainer.appendChild(newEducationDiv);
	}

function removeEducation(educationId) {
	
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
    
    	removeGraduationAPI(educationId);
	    document.getElementById(educationId).remove();

      swal("Deleted!", "Your Graduation is deleted", "success");
      
    } else {
      swal("Cancelled", "Your Graduation is safe :)", "error");
    }
	});
	
	/*
	  if (confirm("You want to delete education?")) {
		removeGraduationAPI(educationId);
	    document.getElementById(educationId).remove();
	  }*/
}

function editEducation(educationId) {
	
	 fetch(path+"/getGraduation/"+educationId, {
		    method: "GET",
		    headers: {
		      "Content-Type": "application/json",
		    },
		  })
		    .then((response) => response.json())
		    .then((education) => {
		      console.log("Success:", education);
		      console.log("data is fetched");
		      if (education != null) {
		        
		    	  var educationForm = document.getElementById("educationInformationForm");

		    	  document.getElementById("addEducation").click();
		    	  
		    	  educationForm["educationId"].value = education.id;
		    	  educationForm["type"].value = education.type;
		    	  educationForm["universityName"].value = education.universityName;
		    	  educationForm["country"].value = education.country;
		    	  educationForm["state"].value = education.state;
		    	  educationForm["city"].value = education.city;
		    	  educationForm["degree"].value = education.degree;
		    	  educationForm["filedOfStudy"].value = education.filedOfStudy;
		    	  educationForm["grade"].value = education.grade;
		    	  educationForm["currentStatus"].checked = education.currentStatus;
		    	  educationForm["completionYear"].value = education.completionYear;
		    	  educationForm["completionMonth"].value = education.completionMonth;


		      }
		      
		    })
		    .catch((error) => {
		      console.error("Error:", error);
		      return null;
	 });
	
	 
}

function populateGraduationContainer(){
	
	var userId = document.getElementById("uId").value;
	
	if(userId){
		
		 fetch(path+"/getAllGraduations/" + userId, {
			    method: "GET",
			    headers: {
			      "Content-Type": "application/json",
			    },
			  })
			    .then((response) => response.json())
			    .then((graduations) => {
			      console.log("Success:", graduations);
			      console.log("data is fetched");
			      if (graduations != null) {
			        
			    	  iteratorForGraduation(graduations);
			      }
			      
			    })
			    .catch((error) => {
			      console.error("Error:", error);
			      return null;
		 });

	}
	
}

function iteratorForGraduation(graduations){
	
	for (var index = 0; index < graduations.length; index++) {
		addEducation(graduations[index]);
	}
	
}

function saveGraduationAPI(graduation){

	var userId = document.getElementById("uId").value;
	
	if(userId){
		
		 fetch(path+"/saveGraduation/" + userId, {
			    method: "POST",
			    headers: {
			      "Content-Type": "application/json",
			    },
			    body: JSON.stringify(graduation),
			  })
			    .then((response) => response.json())
			    .then((graduation) => {
			      console.log("Success:", graduation);
			      console.log("data is fetched");
			      if (graduation != null) {
			        
			    	  addEducation(graduation);
			    	  
			      }
			      
			    })
			    .catch((error) => {
			      console.error("Error:", error);
			      return true;
		 });
	}
}

function editGraduationAPI(graduation){

	var userId = document.getElementById("uId").value;

	if(userId){
		
		 fetch(path+"/editSaveGraduation/", {
			    method: "POST",
			    headers: {
			      "Content-Type": "application/json",
			    },
			    body: JSON.stringify(graduation),
			  })
			    .then((response) => response.json())
			    .then((graduation) => {
			      console.log("Success:", graduation);
			      console.log("data is fetched");
			      if (graduation != null) {
			        
			    	  changeEducation(graduation);
			    	  
			      }
			      
			    })
			    .catch((error) => {
			      console.error("Error:", error);
			      return true;
		 });
	}
}

function removeGraduationAPI(graduationId){
	
	fetch(path+"/deleteGraduation/"+graduationId, {
	    method: "DELETE",
	    headers: {
	      "Content-Type": "application/json",
	    },
	  })
	    .then((response) => console.log(response))
	    .then((data) => {
	      console.log("Success:", data);
	      console.log("data is deleted "); 
	    })
	    .catch((error) => {
	      console.error("Error:", error);
	      return null;
	    });

}

function educationInformationFormProcess() {
	  var educationForm = document.getElementById("educationInformationForm");
  	
	  var id = educationForm["educationId"].value;
	  var type = educationForm["type"].value;
	  var universityName = educationForm["universityName"].value;
	  var country = educationForm["country"].value;
	  var state = educationForm["state"].value;
	  var city = educationForm["city"].value;
	  var degree = educationForm["degree"].value;
	  var filedOfStudy = educationForm["filedOfStudy"].value;
	  var grade = educationForm["grade"].value;
	  var currentStatus = educationForm["currentStatus"].checked;
	  var completionYear = educationForm["completionYear"].value;
	  var completionMonth = educationForm["completionMonth"].value;
	  var educationInformation;

	  if (id == 0) {
	    if (currentStatus == true) {
	      educationInformation = {
	        type: type,
	        universityName: universityName,
	        country: country,
	        state: state,
	        city: city,
	        degree: degree,
	        filedOfStudy: filedOfStudy,
	        grade: grade,
	        currentStatus: currentStatus,
	        completionYear: null,
	        completionMonth: null,
	      };
	    } else {
	      educationInformation = {
	        type: type,
	        universityName: universityName,
	        country: country,
	        state: state,
	        city: city,
	        degree: degree,
	        filedOfStudy: filedOfStudy,
	        grade: grade,
	        currentStatus: currentStatus,
	        completionYear: completionYear,
	        completionMonth: completionMonth,
	      };
	    }

	    console.log(educationInformation);

	    if( saveGraduationAPI(educationInformation)){
	    	
	    	document.getElementById("modalGraduation").click();
	    	
	    	swal("Cancelled", "Error in saving you data!", "error");
	    	
	    }else{
	    	
	    	document.getElementById("modalGraduation").click();
	    	   
		    swal("Success", "Value is added successfully", "success");
		    
		    educationForm.reset();
	    	
	    }
	    
	   
	    
	    //addEducation(educationInformation);

	    //educationForm.reset();
	  } else {
	    if (currentStatus == true) {
	      educationInformation = {
	        id: id,
	        type: type,
	        universityName: universityName,
	        country: country,
	        state: state,
	        city: city,
	        degree: degree,
	        filedOfStudy: filedOfStudy,
	        grade: grade,
	        currentStatus: currentStatus,
	        completionYear: null,
	        completionMonth: null,
	      };
	    } else {
	      educationInformation = {
	        id: id,
	        type: type,
	        universityName: universityName,
	        country: country,
	        state: state,
	        city: city,
	        degree: degree,
	        filedOfStudy: filedOfStudy,
	        grade: grade,
	        currentStatus: currentStatus,
	        completionYear: completionYear,
	        completionMonth: completionMonth,
	      };
	    }

	    console.log(educationInformation);
	   
	    //changeEducation(educationInformation);
	    
	    if( editGraduationAPI(educationInformation)){
	    	
	    	document.getElementById("modalGraduation").click();
	    	
	    	swal("Cancelled", "Error in saving you data!", "error");
	    	
	    }else{
	    	
	    	document.getElementById("modalGraduation").click();
	    	   
		    swal("Success", "Value is added successfully", "success");
		    
		    educationForm.reset();
	    	
	    }

	    //educationForm.reset();
	  }
	}

function changeEducation(education) {
	  document.getElementById(education.id + "educationTypeId").innerHTML =
	    education.type;
	  if (education.currentStatus == true) {
	    document.getElementById(education.id + "educationUniversityId").innerHTML =
	      education.universityName + " ( Currently Pursuing ) ";
	  } else {
	    document.getElementById(education.id + "educationUniversityId").innerHTML =
	      education.universityName +
	      " ( " +
	      education.completionMonth +
	      " " +
	      education.completionYear +
	      " )";
	  }

	  document.getElementById(education.id + "educationCountryId").innerHTML =
	    education.city + ", " + education.country;
	}


/*-------------------------------------------------------------*/	



/*All the functions inside this part are for courses*/
/*-------------------------------------------------------------*/	


document
  .getElementById("courseInformationForm")
  ["currentStatus"].addEventListener("change", function () {
    if (
      document.getElementById("courseInformationForm")["currentStatus"]
        .checked == true
    ) {
      document.getElementById("courseInformationForm")[
        "completionMonth"
      ].disabled = true;
      document.getElementById("courseInformationForm")[
        "completionYear"
      ].disabled = true;
    }
    if (
      document.getElementById("courseInformationForm")["currentStatus"]
        .checked == false
    ) {
      document.getElementById("courseInformationForm")[
        "completionMonth"
      ].disabled = false;
      document.getElementById("courseInformationForm")[
        "completionYear"
      ].disabled = false;
    }
  });


document.getElementById("file").addEventListener("change", function () {
  var file = this.files[0];
  //console.log(file);

  document.getElementById("typeOfAttachment").setAttribute("value", file.name);
  if (file) {
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      //console.log(this.result);
      document.getElementById("attachment").setAttribute("value", this.result);
    });
    reader.readAsDataURL(file);
  }
});


function populateCourseContainer(){
	//getAllCourses
	////alert("hello");
	var userId = document.getElementById("uId").value;
	
	if(userId){
		
		 fetch(path+"/getAllCourses/" + userId, {
			    method: "GET",
			    headers: {
			      "Content-Type": "application/json",
			    },
			  })
			    .then((response) => response.json())
			    .then((courses) => {
			      console.log("Success:", courses);
			      console.log("data is fetched");
			      if (courses != null) {
			        
			    	  iteratorForCourse(courses);
			      }
			      
			    })
			    .catch((error) => {
			      console.error("Error:", error);
			      return null;
		 });

	}
}

function iteratorForCourse(courses){
	for (var index = 0; index < courses.length; index++) {
		addCourse(courses[index]);
	}
}

function saveCourseAPI(course){

	var userId = document.getElementById("uId").value;
	
	if(userId){
		
		 fetch(path+"/saveCourse/" + userId, {
			    method: "POST",
			    headers: {
			      "Content-Type": "application/json",
			    },
			    body: JSON.stringify(course),
			  })
			    .then((response) => response.json())
			    .then((courseId) => {
			      console.log("Success:", courseId);
			      console.log("data is fetched");
			      if (courseId != null) {
			        
				    	  fetch(path+"/getCourse/" + courseId, {
					  		    method: "Get",
					  		    headers: {
					  		      "Content-Type": "application/json",
					  		    },
					  		    
					  		  })
					  		    .then((response) => response.json())
					  		    .then((courseData) => {
					  		      console.log("Success:", courseData);
					  		      console.log("data is fetched");
					  		      if (courseData != null) {
					  		    	  addCourse(courseData);
					  		      }
					  		      
					  		    })
					  		    .catch((error) => {
					  		      console.error("Error:", error);
					  		      return true;
				  		    });
			    	  //course = getCourseWithId(courseId);
			    	  //if(course!=null)
			    		  
			      }
			      
			    })
			    .catch((error) => {
			      console.error("Error:", error);
			      return true;
		 });
	}
}

//function getCourseWithId(courseId){
//	
//	 fetch(path+"/getCourse/" + courseId, {
//		    method: "Get",
//		    headers: {
//		      "Content-Type": "application/json",
//		    },
//		    
//		  })
//		    .then((response) => response.json())
//		    .then((course) => {
//		      console.log("Success:", course);
//		      console.log("data is fetched");
//		      if (course != null) {
//		          return course;  
//		      }
//		      
//		    })
//		    .catch((error) => {
//		      console.error("Error:", error);
//		      return null;
//	 });
//}

function removeCourseAPI(courseId){
	
	fetch(path+"/deleteCourse/"+courseId, {
	    method: "DELETE",
	    headers: {
	      "Content-Type": "application/json",
	    },
	  })
	    .then((response) => console.log(response))
	    .then((data) => {
	      console.log("Success:", data);
	      console.log("data is deleted "); 
	    })
	    .catch((error) => {
	      console.error("Error:", error);
	      return null;
	    });

}

function editCourseAPI(course){

	var userId = document.getElementById("uId").value;

	if(userId){
		
		 fetch(path+"/editSaveCourse/", {
			    method: "POST",
			    headers: {
			      "Content-Type": "application/json",
			    },
			    body: JSON.stringify(course),
			  })
			    .then((response) => response.json())
			    .then((courseId) => {
			      console.log("Success:", courseId);
			      console.log("data is fetched");
			      if (courseId != null) {
			    	  ////alert("2: change");
			    	  
				    	  fetch(path+"/getCourse/" + courseId, {
					  		    method: "Get",
					  		    headers: {
					  		      "Content-Type": "application/json",
					  		    },
					  		    
					  		  })
					  		    .then((response) => response.json())
					  		    .then((course) => {
					  		      console.log("Success:", course);
					  		      console.log("data is fetched");
					  		      if (course != null) {
					  		    	  changeCourse(course);
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

function courseInformationFormProcess() {
	  var courseForm = document.getElementById("courseInformationForm");

	  var courseId = courseForm["courseId"].value;
	  var courseName = courseForm["courseName"].value;

	  var instituteName = courseForm["instituteName"].value;

	  var currentStatus = courseForm["currentStatus"].checked;

	  var completionYear = courseForm["completionYear"].value;

	  var completionMonth = courseForm["completionMonth"].value;

	  var attachment = courseForm["attachment"].value;

	  var typeOfAttachment = courseForm["typeOfAttachment"].value;

	  var url = courseForm["url"].value;

	  var courseInformation;

	  if (courseId == 0) {
	    if (currentStatus == true) {
	      courseInformation = {
	        
	        name: courseName,
	        instituteName: instituteName,
	        currentStatus: currentStatus,
	        completionYear: null,
	        completionMonth: null,
	        attachment: attachment,
	        typeOfAttachment: typeOfAttachment,
	        url: url,
	      };
	    } else {
	      courseInformation = {
	        
	        name: courseName,
	        instituteName: instituteName,
	        currentStatus: currentStatus,
	        completionYear: completionYear,
	        completionMonth: completionMonth,
	        attachment: attachment,
	        typeOfAttachment: typeOfAttachment,
	        url: url,
	      };
	    }
	    console.log(courseInformation);
	   
	    
	    if(saveCourseAPI(courseInformation)){
	    	
	    	document.getElementById("modalCourse").click();
	    	
	    	swal("Cancelled", "Error in saving you data!", "error");
	    	
	    }else{
	    	
	    	document.getElementById("modalCourse").click();
	    	   
		    swal("Success", "Value is added successfully", "success");
		    
		    courseForm.reset();
	    	
	    }
	    
	    //addCourse(courseInformation);
	    //courseForm.reset();
	  } else {
	    if (currentStatus == true) {
	      courseInformation = {
	        id: courseId,
	        name: courseName,
	        instituteName: instituteName,
	        currentStatus: currentStatus,
	        completionYear: null,
	        completionMonth: null,
	        attachment: attachment,
	        typeOfAttachment: typeOfAttachment,
	        url: url,
	      };
	    } else {
	      courseInformation = {
	        id: courseId,
	        name: courseName,
	        instituteName: instituteName,
	        currentStatus: currentStatus,
	        completionYear: completionYear,
	        completionMonth: completionMonth,
	        attachment: attachment,
	        typeOfAttachment: typeOfAttachment,
	        url: url,
	      };
	    }
	    console.log(courseInformation);
	    
	    //changeCourse(courseInformation);
	    if(editCourseAPI(courseInformation)){
	    	
	    	document.getElementById("modalCourse").click();
	    	
	    	swal("Cancelled", "Error in saving you data!", "error");
	    	
	    }else{
	    	
	    	document.getElementById("modalCourse").click();
	    	   
		    swal("Success", "Value is added successfully", "success");
		    
		    courseForm.reset();
	    	
	    }	
	    
	    //courseForm.reset();
	  }
	}

function changeCourse(course) {
	
	////alert("change");
	  document.getElementById(course.id + "courseTypeId").innerHTML = course.name;

	  document.getElementById(course.id + "courseInstitute").innerHTML =
	    course.instituteName;

	  if (course.currentStatus == false) {
	    document.getElementById(course.id + "yearMonth").innerHTML =
	      course.completionMonth + " " + course.completionYear;
	  }
	  else{
		  document.getElementById(course.id + "yearMonth").innerHTML = "currently pursuing";
	  }
	  

    document.getElementById(course.id + "courseAttachment").href =
      "data:application/pdf;base64," + course.attachment;

	  document.getElementById(course.id + "attachmentUrl").href = course.url;

	 /* document.getElementById("courseEdit").addEventListener("click", function () {
	    editCourse(course);
	  });

	  document.getElementById("courseTrash").addEventListener("click", function () {
	    removeCourse(course.id);
	  });*/
}

function addCourse(course) {
  //////alert("heloo");
  console.log(course);

  var courseContainer = document.getElementById("courseContainer");

  var newDiv = document.createElement("div");
  newDiv.classList.add("new-update");
  newDiv.classList.add("clearfix");
  newDiv.id = course.id;

  var eduIcon = document.createElement("i");
  eduIcon.classList.add("icon-ok-sign");

  newDiv.appendChild(eduIcon);

  var innerDIv1 = document.createElement("div");
  innerDIv1.classList.add("update-done");

  //element a is created
  var a = document.createElement("a");
  a.href = "#";

  //element Strong is created
  var strong = document.createElement("strong");
  strong.innerText = course.name;
  strong.id = course.id + "courseTypeId";

  //strong element is append in a
  a.appendChild(strong);

  //element a is append in inner div1
  innerDIv1.appendChild(a);

  var span_Name = document.createElement("span");
  span_Name.id = course.id + "courseInstitute";
  span_Name.innerText = course.instituteName;

  innerDIv1.appendChild(span_Name);

  var nextSpan = document.createElement("span");
  nextSpan.id = course.id + "yearMonth";

  if (course.currentStatus == false) {
    nextSpan.innerText = course.completionMonth + " " + course.completionYear;
  }else{
	  nextSpan.innerText = "currently pursuing";
  }

  innerDIv1.appendChild(nextSpan);

	var linkSpan = document.createElement("span");

	var linkAnchor = document.createElement("a");
	var viewText = document.createElement("b");
	var link = document.createTextNode("view certificate");
	viewText.appendChild(link);
	linkAnchor.appendChild(viewText);
	linkAnchor.title = "view certificate";
	linkAnchor.href =
	  "data:application/pdf;base64," + course.attachment;
	linkAnchor.id = course.id + "courseAttachment";
	//linkAnchor.addEventListener("click", editTableData);
    linkSpan.appendChild(linkAnchor);

    innerDIv1.appendChild(linkSpan);
	  

  var spanUrl = document.createElement("span");
  var anchortUrl = document.createElement("a");
  var linkUrl = document.createTextNode("attachment Url");
  anchortUrl.appendChild(linkUrl);
  anchortUrl.title = "attachment Url";
  anchortUrl.href = course.url;
  anchortUrl.id = course.id + "attachmentUrl";
  spanUrl.appendChild(anchortUrl);

  innerDIv1.appendChild(spanUrl);

  //element inndiv1 is append in newEducationDiv
  newDiv.appendChild(innerDIv1);

  var innerDiv2 = document.createElement("div");
  innerDiv2.classList.add("update-date");

  var innerSpan = document.createElement("span");
  innerSpan.classList.add("update-day");

  var editAnchor = document.createElement("a");
  editAnchor.title = "edit";
  editAnchor.href = "javascript:void(0);";

  
  var innerIcon = document.createElement("i");
  innerIcon.id = "courseEdit";
  innerIcon.classList.add("icon");
  innerIcon.classList.add("icon-edit");
  innerIcon.addEventListener("click", function () {
    editCourse(course.id);
  });
  //innerIcon.setAttribute("");
  editAnchor.appendChild(innerIcon);
  innerSpan.appendChild(editAnchor);

  var trashAnchor = document.createElement("a");
  trashAnchor.title = "delete";
  trashAnchor.href = "javascript:void(0);";

  var innerIcon1 = document.createElement("i");
  innerIcon1.id = "courseTrash";
  innerIcon1.classList.add("icon");
  innerIcon1.classList.add("icon-trash");
  innerIcon1.addEventListener("click", function () {
    removeCourse(course.id);
  });
  //innerIcon1.onclick = "removeEducation(education.id)";
  trashAnchor.appendChild(innerIcon1);
  innerSpan.appendChild(trashAnchor);

  innerDiv2.appendChild(innerSpan);

  newDiv.appendChild(innerDiv2);

  courseContainer.appendChild(newDiv);
}

function removeCourse(courseId) {
	
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
    
    	removeCourseAPI(courseId);
        document.getElementById(courseId).remove();

      swal("Deleted!", "Your Course is deleted", "success");
      
    } else {
      swal("Cancelled", "Your Course is safe :)", "error");
    }
	});
	
  /*if (confirm("You want to delete course?")) {
	removeCourseAPI(courseId);
    document.getElementById(courseId).remove();
  }*/
}

function editCourse(courseId) {
	
	fetch(path+"/getCourse/" + courseId, {
		    method: "Get",
		    headers: {
		      "Content-Type": "application/json",
		    },
		    
		  })
		    .then((response) => response.json())
		    .then((course) => {
		      console.log("Success:", course);
		      console.log("data is fetched");
		      if (course != null) {
		    	  var courseForm = document.getElementById("courseInformationForm");

		    	  document.getElementById("addCourse").click();
		    	  
		    	  courseForm["courseId"].value = course.id;

		    	  courseForm["courseName"].value = course.name;

		    	  courseForm["instituteName"].value = course.instituteName;

		    	  courseForm["currentStatus"].checked = course.currentStatus;

		    	  courseForm["completionYear"].value = course.completionYear;

		    	  courseForm["completionMonth"].value = course.completionMonth;

		    	courseForm["attachment"].value =
		    	  "data:application/pdf;base64," + course.attachment;

		    	  courseForm["typeOfAttachment"].value = course.typeOfAttachment;

		    	  courseForm["url"].value = course.url;

		    	 
		      }
		      
		    })
		    .catch((error) => {
		      console.error("Error:", error);
		      return null;
	    });
	
  
}

/*-------------------------------------------------------------*/	


/*All the functions inside this part are for certifications*/
/*-------------------------------------------------------------*/	

document .getElementById("certificateAttachmentFile")
.addEventListener("change", function () {
  var file = this.files[0];
  console.log(file);

  document
    .getElementById("certificatetypeOfAttachment")
    .setAttribute("value", file.name);
  if (file) {
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      console.log(this.result);
      document
        .getElementById("certificateAttachment")
        .setAttribute("value", this.result);
    });
    reader.readAsDataURL(file);
  }
});

function populateCertificationContainer(){

	//alert("hello");
	var userId = document.getElementById("uId").value;
	
	if(userId){
		
		 fetch(path+"/getAllCertifications/" + userId, {
			    method: "GET",
			    headers: {
			      "Content-Type": "application/json",
			    },
			  })
			    .then((response) => response.json())
			    .then((certifications) => {
			      console.log("Success:", certifications);
			      console.log("data is fetched");
			      if (certifications != null) {
			        
			    	  iteratorForCertifications(certifications);
			      }
			      
			    })
			    .catch((error) => {
			      console.error("Error:", error);
			      return null;
		 });

	}
	
}

function iteratorForCertifications(certifications){
	
	for (var index = 0; index < certifications.length; index++) {
		addCertificate(certifications[index]);
	}
	
}

function saveCertificationAPI(certification){

	var userId = document.getElementById("uId").value;
	
	if(userId){
		
		 fetch(path+"/saveCertification/" + userId, {
			    method: "POST",
			    headers: {
			      "Content-Type": "application/json",
			    },
			    body: JSON.stringify(certification),
			  })
			    .then((response) => response.json())
			    .then((certificationId) => {
			      console.log("Success:", certificationId);
			      console.log("data is fetched");
			      if (certificationId != null) {
			        
				    	  fetch(path+"/getCertification/" + certificationId, {
					  		    method: "Get",
					  		    headers: {
					  		      "Content-Type": "application/json",
					  		    },
					  		    
					  		  })
					  		    .then((response) => response.json())
					  		    .then((certificationData) => {
					  		      console.log("Success:", certificationData);
					  		      console.log("data is fetched");
					  		      if (certificationData != null) {
					  		    	addCertificate(certificationData);
					  		      }
					  		      
					  		    })
					  		    .catch((error) => {
					  		      console.error("Error:", error);
					  		      return true;
				  		    });
			    	  //course = getCourseWithId(courseId);
			    	  //if(course!=null)
			    		  
			      }
			      
			    })
			    .catch((error) => {
			      console.error("Error:", error);
			      return true;
		 });
	}
}

function removeCertificationAPI(certificationId){
	
	fetch(path+"/deleteCertification/"+certificationId, {
	    method: "DELETE",
	    headers: {
	      "Content-Type": "application/json",
	    },
	  })
	    .then((response) => console.log(response))
	    .then((data) => {
	      console.log("Success:", data);
	      console.log("data is deleted "); 
	    })
	    .catch((error) => {
	      console.error("Error:", error);
	      return null;
	    });

}

function editCertificateAPI(certification){

	var userId = document.getElementById("uId").value;

	if(userId){
		
		 fetch(path+"/editSaveCertification/", {
			    method: "POST",
			    headers: {
			      "Content-Type": "application/json",
			    },
			    body: JSON.stringify(certification),
			  })
			    .then((response) => response.json())
			    .then((certificationId) => {
			      console.log("Success:", certificationId);
			      console.log("data is fetched");
			      if (certificationId != null) {
			    	  //alert("2: change");
			    	  
				    	  fetch(path+"/getCertification/" + certificationId, {
					  		    method: "Get",
					  		    headers: {
					  		      "Content-Type": "application/json",
					  		    },
					  		  })
				  		    .then((response) => response.json())
				  		    .then((certificationData) => {
				  		    	
				  		    	console.log("Success:", certificationData);
				  		    	console.log("data is fetched");
				  		    	
				  		      if (certificationData != null) {
				  		    	changeCertificate(certificationData);
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

function certificateFormProcess() {
  var certificateForm = document.getElementById("certificateInformationForm");
  var certificateId = certificateForm["certificateId"].value;
  var certificateTitle = certificateForm["certificateTitle"].value;
  var certificateInstitute = certificateForm["certificateInstitute"].value;
  var certificationYear = certificateForm["certificationYear"].value;
  var certificationMonth = certificateForm["certificationMonth"].value;
  var certificatetypeOfAttachment =
    certificateForm["certificatetypeOfAttachment"].value;
  var certificateAttachment = certificateForm["certificateAttachment"].value;
  var certificateUrl = certificateForm["certificateUrl"].value;

  if (certificateId == 0) {
    certificateInformation = {
      
      title: certificateTitle,
      instituteName: certificateInstitute,
      year: certificationYear,
      month: certificationMonth,
      attachment: certificateAttachment,
      typeOfAttachment: certificatetypeOfAttachment,
      url: certificateUrl,
    };
    
    //addCertificate(certificateInformation);
    
    if(saveCertificationAPI(certificateInformation)){
    	
    	document.getElementById("modalCertificate").click();
    	
    	swal("Cancelled", "Error in saving you data!", "error");
    	
    }else{
    	
    	document.getElementById("modalCertificate").click();
    	   
	    swal("Success", "Value is added successfully", "success");
	    
	    certificateForm.reset();
    	
    }
    
  } else {
    certificateInformation = {
      id: certificateId,
      title: certificateTitle,
      instituteName: certificateInstitute,
      year: certificationYear,
      month: certificationMonth,
      attachment: certificateAttachment,
      typeOfAttachment: certificatetypeOfAttachment,
      url: certificateUrl,
    };
    //console.log(certificateInformation);
    
    if(editCertificateAPI(certificateInformation)){
    	
    	document.getElementById("modalCertificate").click();
    	
    	swal("Cancelled", "Error in saving you data!", "error");
    	
    }else{
    	
    	document.getElementById("modalCertificate").click();
    	   
	    swal("Success", "Value is added successfully", "success");
	    
	    certificateForm.reset();
    	
    }
    //addCertificate(certificateInformation);
  }

  // console.log(certificateInformation);
   //certificateForm.reset();
}

function changeCertificate(certificate) {
  document.getElementById(certificate.id + "certficateTitle").innerHTML =
    certificate.title;

  document.getElementById(certificate.id + "certificateInstitute").innerHTML =
    certificate.instituteName;

  document.getElementById(certificate.id + "yearMonth").innerHTML =
    certificate.month + " " + certificate.year;

    document.getElementById(certificate.id + "certificateAttachment").href =
      "data:application/pdf;base64," + certificate.attachment;
  

  document.getElementById(certificate.id + "attachmentUrl").href =
    certificate.url;

  /*document
    .getElementById("certificateEdit")
    .addEventListener("click", function () {
      editCertificate(certificate);
    });

  document
    .getElementById("certificateTrash")
    .addEventListener("click", function () {
      removeCertificate(certificate.id);
    });
   */
}

function addCertificate(certificate) {
  console.log(certificate);

  var certificateContainer = document.getElementById("certificateContainer");

  var newDiv = document.createElement("div");
  newDiv.classList.add("new-update");
  newDiv.classList.add("clearfix");
  newDiv.id = certificate.id;

  var eduIcon = document.createElement("i");
  eduIcon.classList.add("icon-ok-sign");

  newDiv.appendChild(eduIcon);

  var innerDIv1 = document.createElement("div");
  innerDIv1.classList.add("update-done");

  //element a is created
  var a = document.createElement("a");
  a.href = "#";

  //element Strong is created
  var strong = document.createElement("strong");
  strong.innerText = certificate.title;
  strong.id = certificate.id + "certficateTitle";
  console.log(strong.id);
  //strong element is append in a
  a.appendChild(strong);

  //element a is append in inner div1
  innerDIv1.appendChild(a);

  var span_Name = document.createElement("span");
  span_Name.id = certificate.id + "certificateInstitute";
  span_Name.innerText = certificate.instituteName;

  innerDIv1.appendChild(span_Name);

  var nextSpan = document.createElement("span");
  nextSpan.id = certificate.id + "yearMonth";

  nextSpan.innerText = certificate.month + " " + certificate.year;

  innerDIv1.appendChild(nextSpan);

    var linkSpan = document.createElement("span");

    var linkAnchor = document.createElement("a");
    var viewText = document.createElement("b");
    var link = document.createTextNode("view certificate");
    viewText.appendChild(link);
    linkAnchor.appendChild(viewText);
    linkAnchor.title = "view certificate";
    linkAnchor.href =
      "data:application/pdf;base64," + certificate.attachment;
    linkAnchor.id = certificate.id + "certificateAttachment";
    //linkAnchor.addEventListener("click", editTableData);
    linkSpan.appendChild(linkAnchor);

    innerDIv1.appendChild(linkSpan);

  var spanUrl = document.createElement("span");
  var anchortUrl = document.createElement("a");
  var linkUrl = document.createTextNode("attachment Url");
  anchortUrl.appendChild(linkUrl);
  anchortUrl.title = "attachment Url";
  anchortUrl.href = certificate.url;
  anchortUrl.id = certificate.id + "attachmentUrl";
  spanUrl.appendChild(anchortUrl);

  innerDIv1.appendChild(spanUrl);

  //element inndiv1 is append in newEducationDiv
  newDiv.appendChild(innerDIv1);

  var innerDiv2 = document.createElement("div");
  innerDiv2.classList.add("update-date");

  var innerSpan = document.createElement("span");
  innerSpan.classList.add("update-day");

  var editAnchor = document.createElement("a");
  editAnchor.title = "edit";
  editAnchor.href = "javascript:void(0);";
  
  var innerIcon = document.createElement("i");
  innerIcon.id = "certificateEdit";
  innerIcon.classList.add("icon");
  innerIcon.classList.add("icon-edit");
  innerIcon.addEventListener("click", function () {
    editCertificate(certificate.id);
  });
  //innerIcon.setAttribute("");
  editAnchor.appendChild(innerIcon);
  innerSpan.appendChild(editAnchor);

  var trashAnchor = document.createElement("a");
  trashAnchor.title = "delete";
  trashAnchor.href = "javascript:void(0);";

  var innerIcon1 = document.createElement("i");
  innerIcon1.id = "certificateTrash";
  innerIcon1.classList.add("icon");
  innerIcon1.classList.add("icon-trash");
  innerIcon1.addEventListener("click", function () {
    removeCertificate(certificate.id);
  });
  //innerIcon1.onclick = "removeEducation(education.id)";
  trashAnchor.appendChild(innerIcon1);
  innerSpan.appendChild(trashAnchor);

  innerDiv2.appendChild(innerSpan);

  newDiv.appendChild(innerDiv2);

  certificateContainer.appendChild(newDiv);
}

function removeCertificate(certificateId) {
	
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
    
    	removeCertificationAPI(certificateId);
        document.getElementById(certificateId).remove();
      swal("Deleted!", "Your Certification is deleted", "success");
      
    } else {
      swal("Cancelled", "Your Certification is safe :)", "error");
    }
	});
	
 /* if (confirm("You want to delete certificate?")) {
	  removeCertificationAPI(certificateId);
    document.getElementById(certificateId).remove();
  }*/
}

function editCertificate(certificationId) {
	
	fetch(path+"/getCertification/" + certificationId, {
		    method: "Get",
		    headers: {
		      "Content-Type": "application/json",
		    },
		  })
	    .then((response) => response.json())
	    .then((certificate) => {
	    	
	    	console.log("Success:", certificate);
	    	console.log("data is fetched");
	    	
	      if (certificate != null) {
	    	  
	    	  var certificateForm = document.getElementById("certificateInformationForm");
	    	  
	    	  document.getElementById("addCertificate").click();
	    	  
	    	  certificateForm["certificateId"].value = certificate.id;
	    	  certificateForm["certificateTitle"].value = certificate.title;
	    	  certificateForm["certificateInstitute"].value = certificate.instituteName;
	    	  certificateForm["certificationYear"].value = certificate.year;
	    	  certificateForm["certificationMonth"].value = certificate.month;

	    	  certificateForm["certificatetypeOfAttachment"].value =
	    	    certificate.typeOfAttachment;

	    	    certificateForm["certificateAttachment"].value =
	    	      "data:application/pdf;base64," + certificate.attachment;

	    	  certificateForm["certificateUrl"].value = certificate.url;

	    	  
	      }
	      
	    })
	    .catch((error) => {
	      console.error("Error:", error);
	      return null;
  });
	
  
}

/*-------------------------------------------------------------*/	
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