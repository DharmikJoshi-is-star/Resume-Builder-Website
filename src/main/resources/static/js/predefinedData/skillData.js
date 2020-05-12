/**
 * 
 */

fetch("http://localhost:8086/getAllSkill",{
	
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
	},
	
})
.then((response)=> response.json())
.then((skillData)=> {
	console.log("API is called: "+skillData);
	if(skillData!=null){
		
		console.log(skillData);
		
		skills = [];
		for (var index = 0; index < skillData.length; index++) {
			skills[index] = skillData[index].name;
		}
		
		console.log(skills);
		
		
	
		    $( "#technicalSkillName" ).autocomplete({  
		      source: skills  ,
		      
		    	});  
		
		    $( "#otherSkillName" ).autocomplete({  
		      source: skills  
		    	});  
		
	}
})
.catch((error)=> {
	console.log("Error: "+error);
});

