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
	

	
  var article = document.createElement("article");

  var image = document.createElement("img");
  image.src = template.imagePath;
  image.alt = template.templateName;
  article.appendChild(image);

  var div = document.createElement("div");
  div.className = "text";

  var h3 = document.createElement("h3");
  h3.appendChild(document.createTextNode(template.templateName));
  div.appendChild(h3);

  var p = document.createElement("p");
  p.appendChild(document.createTextNode("by"));

  var creater = document.createElement("a");
  creater.href = "javascript:void(0);";
  creater.appendChild(document.createTextNode("Dharmik Joshi"));
  p.appendChild(creater);

  p.appendChild(document.createElement("br"));
  
  div.appendChild(p);

  var pdescription = document.createElement("p");
  p.appendChild(document.createTextNode(template.description));
  div.appendChild(pdescription);

  var demo = document.createElement("a");
  demo.target = "_blank";
  demo.href = template.demoPath;
  demo.classList.add("btn");
  demo.classList.add("btn-primary");
  demo.classList.add("btn-block");
  demo.appendChild(document.createTextNode("demo"));
  div.appendChild(demo);
  
  var trylink = document.createElement("a");
  trylink.href = "javascript:void(0);";
  trylink.classList.add("btn");
  trylink.classList.add("btn-success");
  trylink.classList.add("btn-block");
  trylink.appendChild(document.createTextNode("try"));
  trylink.onclick = function(){
		saveTemplate(template.id);
	};
  div.appendChild(trylink);

  article.appendChild(div);

  document.getElementById("otherTemplate").appendChild(article);
	
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
	
	var article = document.createElement("article");
	article.id = "userTemplateId";
	
	  var image = document.createElement("img");
	  image.src = template.imagePath;
	  image.alt = template.templateName;
	  article.appendChild(image);

	  var div = document.createElement("div");
	  div.className = "text";

	  var h3 = document.createElement("h3");
	  h3.appendChild(document.createTextNode(template.templateName));
	  div.appendChild(h3);

	  var p = document.createElement("p");
	  p.appendChild(document.createTextNode("by"));

	  var creater = document.createElement("a");
	  creater.href = "javascript:void(0);";
	  creater.appendChild(document.createTextNode("Dharmik Joshi"));
	  p.appendChild(creater);

	  p.appendChild(document.createElement("br"));
	  
	  div.appendChild(p);

	  var pdescription = document.createElement("p");
	  p.appendChild(document.createTextNode(template.description));
	  div.appendChild(pdescription);

	  article.appendChild(div);
	
	document.getElementById("userTemplate").append(article);
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