/**
 * 
 */
/**
 * 
 */

var jobTitlesGlob;

fetch("http://localhost:8086/getAllJobTitle",{
	
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
	},
	
})
.then((response)=> response.json())
.then((jobTitleData)=> {
	console.log("API is called: "+jobTitleData);
	if(jobTitleData!=null){
		
		console.log(jobTitleData);
		
		jobTitles = [];
		for (var index = 0; index < jobTitleData.length; index++) {
			jobTitles[index] = jobTitleData[index].title;
		}
		
		console.log(jobTitles);
	
		    $( "#jobInternshipTitle" ).autocomplete({  
		      source: jobTitles  ,
		      
		    	});  
		    
		    $( "#volunteerRole" ).autocomplete({  
			      source: jobTitles  ,
			      
			    	});  
		
		    
		
	}
})
.catch((error)=> {
	console.log("Error: "+error);
});

