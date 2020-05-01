/**
 * 
 */

function onLoadPopulate(){
	var userId = document.getElementById("uId").value;
	
	if(userId){
		onLoadPopulateOtherTemplates();
		onLoadPopulateUserTemplate();
		populateUrl();
		
	}
	
}

function setUrl(){
	
	var userId = document.getElementById("uId").value;
	
	var url = document.getElementById("url").value;

	if(url=="") return;
	
	url = url;
	
	var urlData = {
			url:url,
	};
	
	if(userId){
		
		fetch("http://localhost:8086/saveUserUrl/"+userId, {
		    method: "POST", // or 'PUT'
		    headers: {
		      "Content-Type": "application/json",
		    },
		    body: JSON.stringify(urlData),
		  })
		    .then((response) => response.json())
		    .then((urlInfo) => {
		      console.log("Success:", urlInfo);
		      console.log("data is saved successfully");
		      
		      document.getElementById("url").value = userUrl.url;
	    	  
	    	  document.getElementById("visitSite").href = "http://localhost:8086/view?id="+userUrl.url;
	    	
		    })
		    .catch((error) => {
		    	return true;
		 });
	}
}

function onLoadPopulateOtherTemplates(){
	
	fetch("http://localhost:8086/getAllTemplates", {
	    method: "GET", // or 'PUT'
	    headers: {
	      "Content-Type": "application/json",
	    },
	  })
	    .then((response) => response.json())
	    .then((templates) => {
	      console.log("Success:", templates);
	      console.log("data is sent successfully");
	      
	      	for (var index = 0; index < templates.length; index++) {
	      		setUpOtherTemplate(templates[index]);
			}
	      	//setUpTemplateForUser(template);
	      
	    })
	    .catch((error) => {
	    	return true;
	    });
	
}

function onLoadPopulateUserTemplate(){
	
	var userId = document.getElementById("uId").value;
	
	fetch("http://localhost:8086/getTemplateByUserId/"+userId, {
	    method: "GET", // or 'PUT'
	    headers: {
	      "Content-Type": "application/json",
	    },
	  })
	    .then((response) => response.json())
	    .then((template) => {
	      console.log("Success:", template);
	      console.log("data is fetched successfully");
	      
	      if(template){
	    	  setUpTemplateForUser(template);
	      }	
	      
	      	//setUpTemplateForUser(template);
	      
	    })
	    .catch((error) => {
	    	return true;
	    });
	
}

function setUpOtherTemplate(template){

	var spanDiv = document.createElement("div");
	spanDiv.classList.add("span3");
	
	var cardDiv = document.createElement("div");
	cardDiv.classList.add("card");
	cardDiv.style = "width: 18rem;";
	
	var templateImg = document.createElement("img");
	templateImg.classList.add("card-img-top");
	templateImg.src = "template_resources/image/template1.png";
	cardDiv.appendChild(templateImg);
	
	var cardBodyDiv = document.createElement("div");
	var title = document.createElement("h5");
	title.classList.add("card-title");
	title.innerHTML = "Pure CSS Website";
	cardBodyDiv.appendChild(title);
	
	var para = document.createElement("p");
	para.classList.add("card-text");
	para.innerHTML = "single page responsive website";
	cardBodyDiv.appendChild(para);
	
	var anchorDemo = document.createElement("a");
	anchorDemo.classList.add("btn");
	anchorDemo.classList.add("btn-primary");
	anchorDemo.appendChild(document.createTextNode("Live Demo"));
	anchorDemo.href = template.templateName;
	anchorDemo.target = "_blank";
	cardBodyDiv.appendChild(anchorDemo);
	
	var anchorTry = document.createElement("a");
	anchorTry.classList.add("btn");
	anchorTry.classList.add("btn-success");
	anchorTry.appendChild(document.createTextNode("Try"));
	anchorTry.href = "#";
	anchorTry.onclick = function(){
		saveTemplate(template.id);
	};
	cardBodyDiv.appendChild(anchorTry);
	
	cardDiv.appendChild(cardBodyDiv);
	
	spanDiv.appendChild(cardDiv);
	
	document.getElementById("otherTemplate").appendChild(spanDiv);
}

function saveTemplate(templateId){
	
	var userId = document.getElementById("uId").value;
	
	
	  fetch("http://localhost:8086/saveTemplateForUser/"+userId+"/"+templateId, {
		    method: "POST", // or 'PUT'
		    headers: {
		      "Content-Type": "application/json",
		    },
		  })
		    .then((response) => response.json())
		    .then((template) => {
		      console.log("Success:", template);
		      console.log("data is sent successfully");
		      
		      setUpTemplateForUser(template);
		      
		    })
		    .catch((error) => {
		    	return true;
		    });
	
}

function setUpTemplateForUser(template){

	
	if(document.getElementById("userTemplateId")){
		document.getElementById("userTemplateId").remove();
	}
	
	var spanDiv = document.createElement("div");
	spanDiv.classList.add("span3");
	spanDiv.id = "userTemplateId";
	
	var cardDiv = document.createElement("div");
	cardDiv.classList.add("card");
	cardDiv.style = "width: 18rem;";
	
	var templateImg = document.createElement("img");
	templateImg.classList.add("card-img-top");
	templateImg.src = "template_resources/image/template1.png";
	cardDiv.appendChild(templateImg);
	
	var cardBodyDiv = document.createElement("div");
	var title = document.createElement("h5");
	title.classList.add("card-title");
	title.innerHTML = "Pure CSS Website";
	cardBodyDiv.appendChild(title);
	
	var para = document.createElement("p");
	para.classList.add("card-text");
	para.innerHTML = "single page responsive website";
	cardBodyDiv.appendChild(para);
	
	var anchorDemo = document.createElement("a");
	anchorDemo.classList.add("btn");
	anchorDemo.classList.add("btn-primary");
	anchorDemo.appendChild(document.createTextNode("Live Demo"));
	anchorDemo.href = template.templateName;
	anchorDemo.target = "_blank";
	cardBodyDiv.appendChild(anchorDemo);
	
	var anchorTry = document.createElement("a");
	anchorTry.classList.add("btn");
	anchorTry.classList.add("btn-success");
	anchorTry.appendChild(document.createTextNode("Try"));
	anchorTry.href = "#";
	cardBodyDiv.appendChild(anchorTry);
	
	cardDiv.appendChild(cardBodyDiv);
	
	spanDiv.appendChild(cardDiv);
	alert("hello3");
	//document.getElementById("userTemplateId").remove();
	document.getElementById("userTemplate").append(spanDiv);
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
		    	  document.getElementById("url").value = userUrl.url;
		    	  
		    	  document.getElementById("visitSite").href = "http://localhost:8086/view?id="+userUrl.url;
		    	  
		      }
		      
		    })
		    .catch((error) => {
		    	return true;
		    });
	
	
	
}