/**
 * 
 */
/**
 * 
 */

fetch("http://localhost:8086/getAllCourse",{
	
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
	},
	
})
.then((response)=> response.json())
.then((courseData)=> {
	console.log("API is called: "+courseData);
	if(courseData!=null){
		
		console.log(courseData);
		
		courses = [];
		for (var index = 0; index < courseData.length; index++) {
			courses[index] = courseData[index].name;
		}
		
		console.log(courses);
	
		    $( "#courseName" ).autocomplete({  
		      source: courses  ,
		      
		    	});  
		    
		    $( "#certificateTitle" ).autocomplete({  
			      source: courses  ,
			    });  
		
	}
})
.catch((error)=> {
	console.log("Error: "+error);
});

