function onLoadPopulate() {
	
	var userId = document.getElementById("uId").value;
	
	if(userId!=null){
		 getAllGraduationAPI();
		 getAllCourseAPI();
		 getAllCertificationAPI();
		 getAllJobInternshipAPI();
		 getAllVolunteerAPI();
		 getAllProjectAPI();
		 getAllTechnicalSkillAPI();
		 getAllOtherSkillAPI();
	}
	
}


/*From here all functions are responsible to populate Graduation View*/
/*------------------------------------------*/
function getAllGraduationAPI(){
	
	var userId = document.getElementById("uId").value;
	
	fetch("http://localhost:8086/getAllGraduations/"+userId,{
		
		method: "GET",
	    headers: {
	      "Content-Type": "application/json",
	    },
		
	})
	.then((response)=>response.json())
	.then((graduations)=>{
		console.log("successfully fecth all data", graduations);
		if(graduations){
			populateGraduations(graduations);
		}
	})
	.then((error)=>{
		
		return null;
		
	});
	
}

function populateGraduations(graduations){
	
	document.getElementById("graduationCount").innerHTML = "&nbsp;total: "+graduations.length+"&nbsp;";
	
	for (var index = 0; index < graduations.length; index++) {
		addRowManageGraduation(graduations[index]);
	}
	
}

function addRowManageGraduation(graduation) {
  var tableBody = document.getElementById("manage-graduation");

  var tr = document.createElement("tr");

  var tdEntry = document.createElement("td");
  tdEntry.classList.add("taskDesc");
  var entry = document.createElement("p");
  entry.innerHTML =  graduation.type+"<br>"+graduation.universityName+"<br>"+graduation.filedOfStudy;
  tdEntry.appendChild(entry);
  tr.appendChild(tdEntry);

  var tdStatus = document.createElement("td");
  tdStatus.classList.add("taskStatus");
  var status = document.createElement("span");
  status.id = "statusId"+graduation.id;
  
  if(graduation.view== true ){
	  status.classList.add("in-progress");
	  status.innerHTML = "Visitors can view";
  }else if(graduation.view== false ){
	  status.classList.add("pending");
	  status.innerHTML = "Visitors can not view";
  }
  
  
  tdStatus.appendChild(status);
  tr.appendChild(tdStatus);

  var tdOptions = document.createElement("td");
  tdOptions.classList.add("taskStatus");

  var anchorView = document.createElement("a");
  anchorView.href = "javascript:void(0);";
  anchorView.id = "viewId"+graduation.id;
  anchorView.classList.add("tip-top");
  anchorView.setAttribute("data-original-title", "view on");

  var view = document.createElement("input");
  view.type = "hidden";
  view.value = graduation.view;
  anchorView.appendChild(view);

  var iconView = document.createElement("i");
  
  //alert(graduation.view);
  
  if(graduation.view== true ){
	  
	  iconView.classList.add("fa");
	  iconView.classList.add("fa-eye");
	  iconView.classList.add("in-progress");
	  
  }else if(graduation.view== false ){
	  
	  iconView.classList.add("fa");
	  iconView.classList.add("fa-eye-slash");
	  iconView.classList.add("pending");
	  
  }
  
  iconView.style = " font-size: 24px;";

  anchorView.onclick = function () {
    changeViewAPI("changeViewGraduation", graduation.id);
	//changeViewOfGraduation(anchorView.id);
  };
  anchorView.appendChild(iconView);

  tdOptions.appendChild(anchorView);

  tr.appendChild(tdOptions);

  tableBody.appendChild(tr);
  
}
/*------------------------------------------*/


/*From here all functions are responsible to populate Course View*/
/*---------------------------------------------*/

function getAllCourseAPI(){
	
	var userId = document.getElementById("uId").value;
	
	fetch("http://localhost:8086/getAllCoursesDashboard/"+userId,{
		
		method: "GET",
	    headers: {
	      "Content-Type": "application/json",
	    },
		
	})
	.then((response)=>response.json())
	.then((courses)=>{
		console.log("successfully fecth all data", courses);
		if(courses){
			populateCourse(courses);
		}
	})
	.then((error)=>{
		
		return null;
		
	});
	
}

function populateCourse(courses){
	
	document.getElementById("courseCount").innerHTML = "&nbsp;total: "+courses.length+"&nbsp;";
	
	for (var index = 0; index < courses.length; index++) {
		addRowManageCourse(courses[index]);
	}
	
}

function addRowManageCourse(course) {
	//alert("1");
  var tableBody = document.getElementById("manage-course");
  
  var tr = document.createElement("tr");

  var tdEntry = document.createElement("td");
  tdEntry.classList.add("taskDesc");
  var entry = document.createElement("p");
  
  console.log(course);
  
  if(course.currentStatus==true){
	  entry.innerHTML =  course.name+"<br>"+course.instituteName+"<br> Currently Pursuing";  
  }else{
	  entry.innerHTML =  course.name+"<br>"+course.instituteName+"<br>"+course.completionMonth +", "+course.completionYear;  
  }
  
  
  tdEntry.appendChild(entry);
  tr.appendChild(tdEntry);

  var tdStatus = document.createElement("td");
  tdStatus.classList.add("taskStatus");
  var status = document.createElement("span");
  status.id = "statusId"+course.id;
  
  if(course.view== true ){
	  status.classList.add("in-progress");
	  status.innerHTML = "Visitors can view";
  }else if(course.view== false ){
	  status.classList.add("pending");
	  status.innerHTML = "Visitors can not view";
  }
  
  
  tdStatus.appendChild(status);
  tr.appendChild(tdStatus);

  var tdOptions = document.createElement("td");
  tdOptions.classList.add("taskStatus");

  var anchorView = document.createElement("a");
  anchorView.href = "javascript:void(0);";
  anchorView.id = "viewId"+course.id;
  anchorView.classList.add("tip-top");
  anchorView.setAttribute("data-original-title", "view on");

  var view = document.createElement("input");
  view.type = "hidden";
  view.value = course.view;
  anchorView.appendChild(view);

  var iconView = document.createElement("i");
  
  //alert(course.view);
  
  if(course.view== true ){
	  
	  iconView.classList.add("fa");
	  iconView.classList.add("fa-eye");
	  iconView.classList.add("in-progress");
	  
  }else if(course.view== false ){
	  
	  iconView.classList.add("fa");
	  iconView.classList.add("fa-eye-slash");
	  iconView.classList.add("pending");
	  
  }
  
  iconView.style = " font-size: 24px;";

  anchorView.onclick = function () {
	  changeViewAPI("changeViewCourse", course.id);
	//changeViewOfGraduation(anchorView.id);
  };
  anchorView.appendChild(iconView);

  tdOptions.appendChild(anchorView);

  tr.appendChild(tdOptions);

  tableBody.appendChild(tr);
 
}

/*---------------------------------------------*/


/*From here all functions are responsible to populate Certification View*/
/*---------------------------------------------*/

function getAllCertificationAPI(){
	
	var userId = document.getElementById("uId").value;
	
	fetch("http://localhost:8086/getAllCertificationsDashboard/"+userId,{
		
		method: "GET",
	    headers: {
	      "Content-Type": "application/json",
	    },
		
	})
	.then((response)=>response.json())
	.then((certifications)=>{
		console.log("successfully fecth all data", certifications);
		if(certifications){
			populateCertification(certifications);
		}
	})
	.then((error)=>{
		
		return null;
		
	});
	
}

function populateCertification(certifications){
	
	document.getElementById("certificationCount").innerHTML = "&nbsp;total: "+certifications.length+"&nbsp;";
	
	for (var index = 0; index < certifications.length; index++) {
		addRowManageCertification(certifications[index]);
	}
	
}

function addRowManageCertification(certification) {
	
	//alert("1");
  var tableBody = document.getElementById("manage-certification");
  
  var tr = document.createElement("tr");

  var tdEntry = document.createElement("td");
  tdEntry.classList.add("taskDesc");
  var entry = document.createElement("p");
  
  console.log(certification);

  entry.innerHTML =  certification.title+"<br>"+certification.instituteName+"<br>"+certification.month +", "+certification.year;  
  
  tdEntry.appendChild(entry);
  tr.appendChild(tdEntry);

  var tdStatus = document.createElement("td");
  tdStatus.classList.add("taskStatus");
  var status = document.createElement("span");
  status.id = "statusId"+certification.id;
  
  if(certification.view== true ){
	  status.classList.add("in-progress");
	  status.innerHTML = "Visitors can view";
  }else if(certification.view== false ){
	  status.classList.add("pending");
	  status.innerHTML = "Visitors can not view";
  }
  
  
  tdStatus.appendChild(status);
  tr.appendChild(tdStatus);

  var tdOptions = document.createElement("td");
  tdOptions.classList.add("taskStatus");

  var anchorView = document.createElement("a");
  anchorView.href = "javascript:void(0);";
  anchorView.id = "viewId"+certification.id;
  anchorView.classList.add("tip-top");
  anchorView.setAttribute("data-original-title", "view on");

  var view = document.createElement("input");
  view.type = "hidden";
  view.value = certification.view;
  anchorView.appendChild(view);

  var iconView = document.createElement("i");
  
  //alert(certification.view);
  
  if(certification.view== true ){
	  
	  iconView.classList.add("fa");
	  iconView.classList.add("fa-eye");
	  iconView.classList.add("in-progress");
	  
  }else if(certification.view== false ){
	  
	  iconView.classList.add("fa");
	  iconView.classList.add("fa-eye-slash");
	  iconView.classList.add("pending");
	  
  }
  
  iconView.style = " font-size: 24px;";

  anchorView.onclick = function () {
	  changeViewAPI("changeViewCertification", certification.id);
	//changeViewOfGraduation(anchorView.id);
  };
  anchorView.appendChild(iconView);

  tdOptions.appendChild(anchorView);

  tr.appendChild(tdOptions);

  tableBody.appendChild(tr);
 
}

/*---------------------------------------------*/


/*From here all functions are responsible to populate JobInternship View*/
/*---------------------------------------------*/

function getAllJobInternshipAPI(){
	
var userId = document.getElementById("uId").value;
	
	fetch("http://localhost:8086/getAllJobInternshipDashboard/"+userId,{
		
		method: "GET",
	    headers: {
	      "Content-Type": "application/json",
	    },
		
	})
	.then((response)=>response.json())
	.then((jobInternships)=>{
		console.log("successfully fecth all data", jobInternships);
		if(jobInternships){
			populateJobInternship(jobInternships);
		}
	})
	.then((error)=>{
		
		return null;
		
	});
}

function populateJobInternship(jobInternships){
	
	document.getElementById("jobInternshipCount").innerHTML = "&nbsp;total: "+jobInternships.length+"&nbsp;";
	
	for (var index = 0; index < jobInternships.length; index++) {
		addRowManageJobInternship(jobInternships[index]);
	}
	
}

function addRowManageJobInternship(jobInternship) {
	
	//alert("1");
  var tableBody = document.getElementById("manage-jobInternship");
  
  var tr = document.createElement("tr");

  var tdEntry = document.createElement("td");
  tdEntry.classList.add("taskDesc");
  var entry = document.createElement("p");
  
  console.log(jobInternship);

  if(jobInternship.currentStatus==true){
	  entry.innerHTML =  jobInternship.title+"<br>"+jobInternship.company+"<br> ( "+jobInternship.startMonth +", "+jobInternship.startYear+"- Currently pursuing )";  
  }else{
	  entry.innerHTML =  jobInternship.title+"<br>"+jobInternship.company+"<br> ( "+jobInternship.startMonth +", "+jobInternship.startYear+"-"+jobInternship.endMonth +", "+jobInternship.endYear+" )";  
  }
  
  
  tdEntry.appendChild(entry);
  tr.appendChild(tdEntry);

  var tdStatus = document.createElement("td");
  tdStatus.classList.add("taskStatus");
  var status = document.createElement("span");
  status.id = "statusId"+jobInternship.id;
  
  if(jobInternship.view== true ){
	  status.classList.add("in-progress");
	  status.innerHTML = "Visitors can view";
  }else if(jobInternship.view== false ){
	  status.classList.add("pending");
	  status.innerHTML = "Visitors can not view";
  }
  
  
  tdStatus.appendChild(status);
  tr.appendChild(tdStatus);

  var tdOptions = document.createElement("td");
  tdOptions.classList.add("taskStatus");

  var anchorView = document.createElement("a");
  anchorView.href = "javascript:void(0);";
  anchorView.id = "viewId"+jobInternship.id;
  anchorView.classList.add("tip-top");
  anchorView.setAttribute("data-original-title", "view on");

  var view = document.createElement("input");
  view.type = "hidden";
  view.value = jobInternship.view;
  anchorView.appendChild(view);

  var iconView = document.createElement("i");
  
  //alert(jobInternship.view);
  
  if(jobInternship.view== true ){
	  
	  iconView.classList.add("fa");
	  iconView.classList.add("fa-eye");
	  iconView.classList.add("in-progress");
	  
  }else if(jobInternship.view== false ){
	  
	  iconView.classList.add("fa");
	  iconView.classList.add("fa-eye-slash");
	  iconView.classList.add("pending");
	  
  }
  
  iconView.style = " font-size: 24px;";

  anchorView.onclick = function () {
	  changeViewAPI("changeViewJobInternship", jobInternship.id);
	//changeViewOfGraduation(anchorView.id);
  };
  anchorView.appendChild(iconView);

  tdOptions.appendChild(anchorView);

  tr.appendChild(tdOptions);

  tableBody.appendChild(tr);
 
}

/*---------------------------------------------*/


/*From here all functions are responsible to populate Volunteer View*/
/*---------------------------------------------*/

function getAllVolunteerAPI(){
	
	var userId = document.getElementById("uId").value;
		
		fetch("http://localhost:8086/getAllVolunteerDashboard/"+userId,{
			
			method: "GET",
		    headers: {
		      "Content-Type": "application/json",
		    },
			
		})
		.then((response)=>response.json())
		.then((volunteers)=>{
			console.log("successfully fecth all data", volunteers);
			if(volunteers){
				populateVolunteer(volunteers);
			}
		})
		.then((error)=>{
			
			return null;
			
		});
}

function populateVolunteer(volunteers){
	
	document.getElementById("volunteerCount").innerHTML = "&nbsp;total: "+volunteers.length+"&nbsp;";
	
	for (var index = 0; index < volunteers.length; index++) {
		addRowManageVolunteer(volunteers[index]);
	}
	
}

function addRowManageVolunteer(volunteer) {
	
	//alert("1");
  var tableBody = document.getElementById("manage-volunteer");
  
  var tr = document.createElement("tr");

  var tdEntry = document.createElement("td");
  tdEntry.classList.add("taskDesc");
  var entry = document.createElement("p");
  
  console.log(volunteer);

  if(volunteer.currentStatus==true){
	  entry.innerHTML =  volunteer.role+"<br>"+volunteer.organization+"<br> ( "+volunteer.startMonth +", "+volunteer.startYear+"- Currently pursuing )";  
  }else{
	  entry.innerHTML =  volunteer.role+"<br>"+volunteer.organization+"<br> ( "+volunteer.startMonth +", "+volunteer.startYear+"-"+volunteer.endMonth +", "+volunteer.endYear+" )";  
  }
  
  
  tdEntry.appendChild(entry);
  tr.appendChild(tdEntry);

  var tdStatus = document.createElement("td");
  tdStatus.classList.add("taskStatus");
  var status = document.createElement("span");
  status.id = "statusId"+volunteer.id;
  
  if(volunteer.view== true ){
	  status.classList.add("in-progress");
	  status.innerHTML = "Visitors can view";
  }else if(volunteer.view== false ){
	  status.classList.add("pending");
	  status.innerHTML = "Visitors can not view";
  }
  
  
  tdStatus.appendChild(status);
  tr.appendChild(tdStatus);

  var tdOptions = document.createElement("td");
  tdOptions.classList.add("taskStatus");

  var anchorView = document.createElement("a");
  anchorView.href = "javascript:void(0);";
  anchorView.id = "viewId"+volunteer.id;
  anchorView.classList.add("tip-top");
  anchorView.setAttribute("data-original-title", "view on");

  var view = document.createElement("input");
  view.type = "hidden";
  view.value = volunteer.view;
  anchorView.appendChild(view);

  var iconView = document.createElement("i");
  
  //alert(volunteer.view);
  
  if(volunteer.view== true ){
	  
	  iconView.classList.add("fa");
	  iconView.classList.add("fa-eye");
	  iconView.classList.add("in-progress");
	  
  }else if(volunteer.view== false ){
	  
	  iconView.classList.add("fa");
	  iconView.classList.add("fa-eye-slash");
	  iconView.classList.add("pending");
	  
  }
  
  iconView.style = " font-size: 24px;";

  anchorView.onclick = function () {
	  changeViewAPI("changeViewVolunteer", volunteer.id);
	//changeViewOfGraduation(anchorView.id);
  };
  anchorView.appendChild(iconView);

  tdOptions.appendChild(anchorView);

  tr.appendChild(tdOptions);

  tableBody.appendChild(tr);
 
}

/*---------------------------------------------*/


/*From here all functions are responsible to populate Project View*/
/*---------------------------------------------*/

function getAllProjectAPI(){
	
	var userId = document.getElementById("uId").value;
	
	fetch("http://localhost:8086/getAllProjectDashboard/"+userId,{
		
		method: "GET",
	    headers: {
	      "Content-Type": "application/json",
	    },
		
	})
	.then((response)=>response.json())
	.then((projects)=>{
		console.log("successfully fecth all data", projects);
		if(projects){
			populateProject(projects);
		}
	})
	.then((error)=>{
		
		return null;
		
	});
	
}

function populateProject(projects){
	
	document.getElementById("projectCount").innerHTML = "&nbsp;total: "+projects.length+"&nbsp;";
	
	for (var index = 0; index < projects.length; index++) {
		addRowManageProject(projects[index]);
	}
	
}

function addRowManageProject(project) {
	
	//alert("1");
  var tableBody = document.getElementById("manage-project");
  
  var tr = document.createElement("tr");

  var tdEntry = document.createElement("td");
  tdEntry.classList.add("taskDesc");
  var entry = document.createElement("p");
  
  console.log(project);

  if(project.currentStatus==true){
	  entry.innerHTML =  project.name+"<br>"+project.company+"<br> ( "+project.startMonth +", "+project.startYear+"- Currently pursuing )";  
  }else{
	  entry.innerHTML =  project.name+"<br>"+project.company+"<br> ( "+project.startMonth +", "+project.startYear+"-"+project.endMonth +", "+project.endYear+" )";  
  }
  
  
  tdEntry.appendChild(entry);
  tr.appendChild(tdEntry);

  var tdStatus = document.createElement("td");
  tdStatus.classList.add("taskStatus");
  var status = document.createElement("span");
  status.id = "statusId"+project.id;
  
  if(project.view== true ){
	  status.classList.add("in-progress");
	  status.innerHTML = "Visitors can view";
  }else if(project.view== false ){
	  status.classList.add("pending");
	  status.innerHTML = "Visitors can not view";
  }
  
  
  tdStatus.appendChild(status);
  tr.appendChild(tdStatus);

  var tdOptions = document.createElement("td");
  tdOptions.classList.add("taskStatus");

  var anchorView = document.createElement("a");
  anchorView.href = "javascript:void(0);";
  anchorView.id = "viewId"+project.id;
  anchorView.classList.add("tip-top");
  anchorView.setAttribute("data-original-title", "view on");

  var view = document.createElement("input");
  view.type = "hidden";
  view.value = project.view;
  anchorView.appendChild(view);

  var iconView = document.createElement("i");
  
  //alert(project.view);
  
  if(project.view== true ){
	  
	  iconView.classList.add("fa");
	  iconView.classList.add("fa-eye");
	  iconView.classList.add("in-progress");
	  
  }else if(project.view== false ){
	  
	  iconView.classList.add("fa");
	  iconView.classList.add("fa-eye-slash");
	  iconView.classList.add("pending");
	  
  }
  
  iconView.style = " font-size: 24px;";

  anchorView.onclick = function () {
	  changeViewAPI("changeViewProject", project.id);
	//changeViewOfGraduation(anchorView.id);
  };
  anchorView.appendChild(iconView);

  tdOptions.appendChild(anchorView);

  tr.appendChild(tdOptions);

  tableBody.appendChild(tr);
 
}

/*---------------------------------------------*/

/*From here all functions are responsible to populate Technical Skill View*/
/*---------------------------------------------*/

function getAllTechnicalSkillAPI(){
	
var userId = document.getElementById("uId").value;
	
	var userId = document.getElementById("uId").value;
	
	fetch("http://localhost:8086/getAllTechnicalSkill/"+userId,{
		
		method: "GET",
	    headers: {
	      "Content-Type": "application/json",
	    },
		
	})
	.then((response)=>response.json())
	.then((skills)=>{
		console.log("successfully fecth all data", skills);
		if(skills){
			populateTechnicalSkills(skills);
		}
	})
	.then((error)=>{
		
		return null;
		
	});
	
}

function populateTechnicalSkills(skills){
	
	document.getElementById("technicalSkillCount").innerHTML = "&nbsp;total: "+skills.length+"&nbsp;";
	
	for (var index = 0; index < skills.length; index++) {
		addRowManageTechnicalSkill(skills[index]);
	}
	
}

function addRowManageTechnicalSkill(skill) {
	
	//alert("1");
  var tableBody = document.getElementById("manage-technicalskill");
  
  var tr = document.createElement("tr");

  var tdEntry = document.createElement("td");
  tdEntry.classList.add("taskDesc");
  var entry = document.createElement("p");
  
  console.log(skill);

  entry.innerHTML =  skill.name;  
  
  tdEntry.appendChild(entry);
  tr.appendChild(tdEntry);

  var tdStatus = document.createElement("td");
  tdStatus.classList.add("taskStatus");
  var status = document.createElement("span");
  status.id = "statusId"+skill.id;
  
  if(skill.view== true ){
	  
	  status.classList.add("in-progress");
	  status.innerHTML = "Visitors can view";
	  
  }else if(skill.view== false ){
	  
	  status.classList.add("pending");
	  status.innerHTML = "Visitors can not view";
  }
  
  
  tdStatus.appendChild(status);
  tr.appendChild(tdStatus);

  var tdOptions = document.createElement("td");
  tdOptions.classList.add("taskStatus");

  var anchorView = document.createElement("a");
  anchorView.href = "javascript:void(0);";
  anchorView.id = "viewId"+skill.id;
  anchorView.classList.add("tip-top");
  anchorView.setAttribute("data-original-title", "view on");

  var view = document.createElement("input");
  view.type = "hidden";
  view.value = skill.view;
  anchorView.appendChild(view);

  var iconView = document.createElement("i");
  
  //alert(skill.view);
  
  if(skill.view== true ){
	  
	  iconView.classList.add("fa");
	  iconView.classList.add("fa-eye");
	  iconView.classList.add("in-progress");
	  
  }else if(skill.view== false ){
	  
	  iconView.classList.add("fa");
	  iconView.classList.add("fa-eye-slash");
	  iconView.classList.add("pending");
	  
  }
  
  iconView.style = " font-size: 24px;";

  anchorView.onclick = function () {
	  changeViewAPI("changeViewTechnicalSkill", skill.id);
	//changeViewOfGraduation(anchorView.id);
  };
  anchorView.appendChild(iconView);

  tdOptions.appendChild(anchorView);

  tr.appendChild(tdOptions);

  tableBody.appendChild(tr);
 
}

/*---------------------------------------------*/

/*From here all functions are responsible to populate Other Skill View*/
/*---------------------------------------------*/

function getAllOtherSkillAPI(){
	
var userId = document.getElementById("uId").value;
	
	var userId = document.getElementById("uId").value;
	
	fetch("http://localhost:8086/getAllOtherSkill/"+userId,{
		
		method: "GET",
	    headers: {
	      "Content-Type": "application/json",
	    },
		
	})
	.then((response)=>response.json())
	.then((skills)=>{
		console.log("successfully fecth all data", skills);
		if(skills){
			populateOtherSkills(skills);
		}
	})
	.then((error)=>{
		
		return null;
		
	});
	
}

function populateOtherSkills(skills){
	
	document.getElementById("otherSkillCount").innerHTML = "&nbsp;total: "+skills.length+"&nbsp;";
	
	for (var index = 0; index < skills.length; index++) {
		addRowManageOtherSkill(skills[index]);
	}
	
}

function addRowManageOtherSkill(skill) {
	
	//alert("1");
  var tableBody = document.getElementById("manage-otherskill");
  
  var tr = document.createElement("tr");

  var tdEntry = document.createElement("td");
  tdEntry.classList.add("taskDesc");
  var entry = document.createElement("p");
  
  console.log(skill);

  entry.innerHTML =  skill.name;  
  
  tdEntry.appendChild(entry);
  tr.appendChild(tdEntry);

  var tdStatus = document.createElement("td");
  tdStatus.classList.add("taskStatus");
  var status = document.createElement("span");
  status.id = "statusId"+skill.id;
  
  if(skill.view== true ){
	  
	  status.classList.add("in-progress");
	  status.innerHTML = "Visitors can view";
	  
  }else if(skill.view== false ){
	  
	  status.classList.add("pending");
	  status.innerHTML = "Visitors can not view";
  }
  
  
  tdStatus.appendChild(status);
  tr.appendChild(tdStatus);

  var tdOptions = document.createElement("td");
  tdOptions.classList.add("taskStatus");

  var anchorView = document.createElement("a");
  anchorView.href = "javascript:void(0);";
  anchorView.id = "viewId"+skill.id;
  anchorView.classList.add("tip-top");
  anchorView.setAttribute("data-original-title", "view on");

  var view = document.createElement("input");
  view.type = "hidden";
  view.value = skill.view;
  anchorView.appendChild(view);

  var iconView = document.createElement("i");
  
  //alert(skill.view);
  
  if(skill.view== true ){
	  
	  iconView.classList.add("fa");
	  iconView.classList.add("fa-eye");
	  iconView.classList.add("in-progress");
	  
  }else if(skill.view== false ){
	  
	  iconView.classList.add("fa");
	  iconView.classList.add("fa-eye-slash");
	  iconView.classList.add("pending");
	  
  }
  
  iconView.style = " font-size: 24px;";

  anchorView.onclick = function () {
	  changeViewAPI("changeViewOtherSkill", skill.id);
	//changeViewOfGraduation(anchorView.id);
  };
  anchorView.appendChild(iconView);

  tdOptions.appendChild(anchorView);

  tr.appendChild(tdOptions);

  tableBody.appendChild(tr);
 
}

/*---------------------------------------------*/




//below Three functions are same for every VIEW
function changeViewAPI( api , id ){
	
	fetch("http://localhost:8086/"+api+"/"+id,{
		
		method: "POST",
		headers: {
			"Content-Type" : "application/json",
		},
		
	})
	.then((response)=> response.json() )
	.then((dataId)=>{
		console.log("succesfully put", dataId);
		
		changeView("viewId"+ dataId);
		
		changeStatus("statusId"+ dataId);
	})
	.then((error)=>{
		console.log("error in changeView API");
		return null;
	});
}

function changeView(anchorViewId) {
	//alert(anchorViewId);
  var anchor = document.getElementById(anchorViewId);
  var icon = anchor.childNodes;
  //alert(icon[0].value);
  alert(icon[0]);
  
  if (icon[0].value == "true") {
    //alert("setting view to off");
	  alert("changes eye");
    icon[1].className = "fa fa-eye-slash pending";
    alert(icon[1].className);
    icon[1].style = "font-size: 24px;";
    icon[0].value = false;
  } else {
    //alert("setting view to on");
    icon[1].className = "fa fa-eye in-progress";
    icon[1].style = "font-size: 24px;";
    icon[0].value = true;
  }
  
  //changeStatusOfGraduation("statusId");
  
}

function changeStatus(statusId) {
  var status = document.getElementById(statusId);
  if (status.className == "in-progress") {
    status.innerHTML = "Visitors can not view";
    status.className = "pending";
  } else if (status.className == "pending") {
    status.innerHTML = "Visitors can view";
    status.className = "in-progress";
  }
}
