/**
 * 
 */

var countryMap = new Map();
var stateMap = new Map();



fetch(path+"/getAllCountry",{
	
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
	},
	
})
.then((response)=> response.json())
.then((countryData)=> {
	
	console.log("API is called: "+countryData);
	if(countryData!=null){
		
		console.log(countryData);
		
		countries = [];
		for (var index = 0; index < countryData.length; index++) {
			countries[index] = countryData[index].name;
			countryMap.set(countryData[index].name, countryData[index].id);
		}
	

		console.log(countries);
		console.log(countryMap);
		
		    $( "#country" ).autocomplete({  
		      source: countries  ,
		      
		    	});  
		    
	}
})
.catch((error)=> {
	console.log("Error: "+error);
});



document.getElementById("country").onblur = function(){
	
	var countryName = document.getElementById("country").value;
	
	if(countryName.length<4)
		return ;
	
	var countryId = countryMap.get(countryName);
	
	if(countryId==null)
		return;
	
	console.log(countryName);
	console.log(countryId);
	
	fetch(path+"/getStatesByCountryId/"+countryId,{
		
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		
	})
	.then((response)=> response.json())
	.then((stateData)=> {
		
		console.log("API is called: "+stateData);
		if(stateData!=null){
			
			console.log(stateData);
			
			states = [];
			for (var index = 0; index < stateData.length; index++) {
				states[index] = stateData[index].name;
				stateMap.set(stateData[index].name, stateData[index].id);
			}
		

			console.log(states);
			console.log(stateMap);
			
			    $( "#state" ).autocomplete({  
			      source: states  ,
			      
			    	});  
			    
		}
	})
	.catch((error)=> {
		console.log("Error: "+error);
	});

};



document.getElementById("state").onblur = function(){
	
	var stateName = document.getElementById("state").value;
	
	if(stateName.length<4)
		return ;
	
	var stateId = stateMap.get(stateName);
	
	if(stateId==null)
		return;
	
	console.log(stateName);
	console.log(stateId);
	
	fetch(path+"/getCitiesByStateId/"+stateId,{
		
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		
	})
	.then((response)=> response.json())
	.then((cityData)=> {
		
		console.log("API is called: "+cityData);
		if(cityData!=null){
			
			console.log(cityData);
			
			cities = [];
			for (var index = 0; index < cityData.length; index++) {
				cities[index] = cityData[index].name;
				//stateMap.set(stateData[index].name, stateData[index].id);
			}
		

			console.log(cities);
			//console.log(stateMap);
			
			    $( "#city" ).autocomplete({  
			      source: cities  ,
			      
			    	});  
			    
		}
	})
	.catch((error)=> {
		console.log("Error: "+error);
	});

};