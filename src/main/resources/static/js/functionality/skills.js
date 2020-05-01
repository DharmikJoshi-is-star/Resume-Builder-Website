function onLoadPopulate(){
	var userId = document.getElementById("uId").value;
	
	if(userId!=null){
		populateTechnicalSkillContainer();
		populateOtherSkillContainer();
	}
	
}

/*This part is for Other skill container*/
/*------------------------------------------*/


function populateOtherSkillContainer(){
	
	var userId = document.getElementById("uId").value;
	
	if(userId!=null){
		
		fetch("http://localhost:8086/getAllOtherSkill/" + userId, {
		    method: "GET", // or 'PUT'
		    headers: {
		      "Content-Type": "application/json",
		    },
		  })
		    .then((response) => response.json())
		    .then((otherSkills) => {
		    	if(otherSkills!=null){
		    		console.log(otherSkills);
		    		console.log("successFully fetched data");
		    		iteratorForOtherSkillContainer(otherSkills);
		    	}
		    })
		    .catch((error) => {
		      console.error("Error:", error);
		    });
	}
}

function iteratorForOtherSkillContainer(otherSkills){
	
	for (var otherSkill = 0; otherSkill < otherSkills.length; otherSkill++) {
		addOtherSkill(otherSkills[otherSkill]);
	}
	
}

function saveOtherSKillAPI(otherSkillInformation){
	
	////alert("saveAPICalled");
	
	var userId = document.getElementById("uId").value;
	
	if(userId!=null){
		
		fetch("http://localhost:8086/saveOtherSkill/" + userId, {
		    method: "POST", // or 'PUT'
		    headers: {
		      "Content-Type": "application/json",
		    },
		    body: JSON.stringify(otherSkillInformation),
		  })
		    .then((response) => response.json())
		    .then((otherSkill) => {
		      console.log("Success:", otherSkill);
		      console.log("data is sent successfully");
		      addOtherSkill(otherSkill);
		    })
		    .catch((error) => {
		      console.error("Error:", error);
		    });
	}
	
}

function removeOtherSkillAPI(otherSkillId){
	
	if(otherSkillId!=0){
		
		fetch("http://localhost:8086/deleteOtherSkill/" + otherSkillId, {
		    method: "DELETE", // or 'PUT'
		    headers: {
		      "Content-Type": "application/json",
		    },
		  })
		    .then((response) => console.log(response))
		    .then((data) => {
		     console.log("successFully deleted");
		    })
		    .catch((error) => {
		      console.error("Error:", error);
		    });
	}
}

function otherSkillInformationForm() {
	
	console.log("hello");
	
  var otherSkillForm = document.getElementById("otherSkillForm");
  
  var otherSkillName = otherSkillForm["otherSkillName"].value;

  ////alert(otherSkillName);
  
  if (otherSkillName == "") return;

  
    var otherSkillInformation = {
      
      name: otherSkillName,
    };
    
    //alert("saveAPICalled");
    
    saveOtherSKillAPI(otherSkillInformation);
        
	otherSkillForm.reset();
    
    //addOtherSkill(otherSkillInformation);
    console.log(otherSkillInformation);
  
}

function addOtherSkill(otherSkill) {
  var otherSkillContainer = document.getElementById("otherSkillContainer");

  var div1 = document.createElement("div");
  div1.classList.add("new-update");
  div1.classList.add("clearfix");
  div1.id = otherSkill.id;

  var div2 = document.createElement("div");
  div2.classList.add("update-done");

  var a = document.createElement("a");
  a.href = "#";

  var strong = document.createElement("strong");

  var span = document.createElement("span");
  span.classList.add("badge");
  span.classList.add("badge-info");
  span.id = otherSkill.id + "otherSkillName";

  span.innerHTML = otherSkill.name;

  var icon = document.createElement("i");
  icon.classList.add("fas");
  icon.classList.add("fa-times-circle");
  icon.addEventListener("click", function () {
    removeOtherSkill(otherSkill.id);
  });

  span.appendChild(icon);
  strong.appendChild(span);
  a.appendChild(strong);
  div2.appendChild(a);
  div1.appendChild(div2);

  otherSkillContainer.appendChild(div1);
}

function removeOtherSkill(otherSkillId) {
	
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
    
    	removeOtherSkillAPI(otherSkillId);
		document.getElementById(otherSkillId).remove();
      swal("Deleted!", "Your skill is deleted", "success");
      
    } else {
      swal("Cancelled", "Your skill is safe :)", "error");
    }
	});
	
	/*if(confirm("Do you want to delete Other SKill?")){
		removeOtherSkillAPI(otherSkillId);
		document.getElementById(otherSkillId).remove();
	}*/

}

/*------------------------------------------*/


/*This part is for technical skill container*/
/*------------------------------------------*/

function iteratorForTechnicalSkillContainer(technicalSkills){
	
	for (var techSkill = 0; techSkill < technicalSkills.length; techSkill++) {
		addTechnicalSkill(technicalSkills[techSkill]);
	}
	
}
function populateTechnicalSkillContainer(){
	
	var userId = document.getElementById("uId").value;
	
	if(userId!=null){
		
		fetch("http://localhost:8086/getAllTechnicalSkill/" + userId, {
		    method: "GET", // or 'PUT'
		    headers: {
		      "Content-Type": "application/json",
		    },
		  })
		    .then((response) => response.json())
		    .then((technicalSkills) => {
		    	if(technicalSkills!=null){
		    		console.log(technicalSkills);
		    		console.log("successFully fetched data");
		    		iteratorForTechnicalSkillContainer(technicalSkills);
		    	}
		    })
		    .catch((error) => {
		      console.error("Error:", error);
		    });
	}
}

function technicalSkillFormProcess() {
  var technicalSkillForm = document.getElementById("technicalSkillForm");
  var technicalSkillName = technicalSkillForm["technicalSkillName"].value;

  if (technicalSkillName == "") return;

  
    var technicalSkillInformation = {
      name: technicalSkillName,
    };
    
    saveTechnicalSKillAPI(technicalSkillInformation);
    	
        
	technicalSkillForm.reset();
    
    

  console.log(technicalSkillInformation);
}

function saveTechnicalSKillAPI(technicalSkillInformation){
	
	var userId = document.getElementById("uId").value;
	
	if(userId!=null){
		
		fetch("http://localhost:8086/saveTechnicalSkill/" + userId, {
		    method: "POST", // or 'PUT'
		    headers: {
		      "Content-Type": "application/json",
		    },
		    body: JSON.stringify(technicalSkillInformation),
		  })
		    .then((response) => response.json())
		    .then((technicalSkill) => {
		      console.log("Success:", technicalSkill);
		      console.log("data is sent successfully");
		      addTechnicalSkill(technicalSkill);
		    })
		    .catch((error) => {
		      console.error("Error:", error);
		    });
	}
	
}

function removeTechnicalSkillAPI(technicalSkillId){
	
	if(technicalSkillId!=0){
		
		fetch("http://localhost:8086/deleteTechnicalSkill/" + technicalSkillId, {
		    method: "DELETE", // or 'PUT'
		    headers: {
		      "Content-Type": "application/json",
		    },
		  })
		    .then((response) => console.log(response))
		    .then((data) => {
		     console.log("successFully deleted");
		    })
		    .catch((error) => {
		      console.error("Error:", error);
		    });
	}
}

function addTechnicalSkill(technicalSkill) {
	
	  var technicalSkillContainer = document.getElementById(
	    "technicalSkillContainer"
	  );

	  var div1 = document.createElement("div");
	  div1.classList.add("new-update");
	  div1.classList.add("clearfix");
	  div1.id = technicalSkill.id;

	  var div2 = document.createElement("div");
	  div2.classList.add("update-done");

	  var a = document.createElement("a");
	  a.href = "#";

	  var strong = document.createElement("strong");

	  var span = document.createElement("span");
	  span.classList.add("badge");
	  span.classList.add("badge-info");
	  span.id = technicalSkill.id + "technicalSkillName";

	  span.innerHTML = technicalSkill.name;

	  var icon = document.createElement("i");
	  icon.classList.add("fas");
	  icon.classList.add("fa-times-circle");
	  icon.addEventListener("click", function () {
	    removeTechnicalSkill(technicalSkill.id);
	  });

	  span.appendChild(icon);
	  strong.appendChild(span);
	  a.appendChild(strong);
	  div2.appendChild(a);
	  div1.appendChild(div2);

	  technicalSkillContainer.appendChild(div1);
	}

function removeTechnicalSkill(technicalSkillId) {
	
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
    
    	removeTechnicalSkillAPI(technicalSkillId);
		document.getElementById(technicalSkillId).remove();
      swal("Deleted!", "Your skill is deleted", "success");
      
    } else {
      swal("Cancelled", "Your skill is safe :)", "error");
    }
	});
	
	/*if(confirm("Do you want to delete technical SKill?")){
		removeTechnicalSkillAPI(technicalSkillId);
		document.getElementById(technicalSkillId).remove();
	}*/
 
}

/*------------------------------------------*/
