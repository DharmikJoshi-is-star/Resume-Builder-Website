/**
 * 
 */
/**
 * 
 */

var fieldOfStudyGlob;



fetch("http://localhost:8086/getAllFieldOfStudy",{
	
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
	},
	
})
.then((response)=> response.json())
.then((fieldDegreeData)=> {
	console.log("API is called: "+fieldDegreeData);
	if(fieldDegreeData!=null){
		fieldOfStudyGlob = fieldDegreeData;
		console.log(fieldDegreeData);
		
		allDegrees = [];
		for (var index = 0; index < fieldDegreeData.length; index++) {
			allDegrees[index] = fieldDegreeData[index].degree;
		}
	
		const unique = (value, index, self) => {
		  return self.indexOf(value) === index
		}

		const degrees = allDegrees.filter(unique)

		console.log(degrees);
		
		    $( "#degree" ).autocomplete({  
		      source: degrees  ,
		      
		    	});  
		    
	}
})
.catch((error)=> {
	console.log("Error: "+error);
});



document.getElementById("degree").onblur = function(){
	
	var userDegree = document.getElementById("degree").value;
	
	if(userDegree.length<4)
		return;
	
	console.log(userDegree);
	console.log(fieldOfStudyGlob);
	let fieldOfStudies = [];
	let c = 0;
	for (var index = 0; index < fieldOfStudyGlob.length; index++) {
		
			if( userDegree.match( fieldOfStudyGlob[index].degree) ){
				fieldOfStudies[c] = fieldOfStudyGlob[index].fieldOfStudy;
				c = c+1;
			}
	}
	
	console.log(fieldOfStudies);
	
	 $( "#filedOfStudy" ).autocomplete({  
	      source: fieldOfStudies  ,
	     });  
	    
	
};
