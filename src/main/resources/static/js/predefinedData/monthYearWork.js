/**
 * 
 */
/**
 * 
 */

var months = ["January",
    "February",
    "March",
    "January",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];

setMonth(document.getElementById("jobInternshipStartMonth"));
setYear(document.getElementById("jobInternshipStartYear"));
setMonth(document.getElementById("jobInternshipEndMonth"));
setYear(document.getElementById("jobInternshipEndYear"));

document.getElementById("jobInternshipStartYear").onchange = function(){
	limitUpperYear(document.getElementById("jobInternshipEndYear"), document.getElementById("jobInternshipStartYear").value);
};

setMonth(document.getElementById("volunteerStartMonth"));
setYear(document.getElementById("volunteerStartYear"));
setMonth(document.getElementById("volunteerEndMonth"));
setYear(document.getElementById("volunteerEndYear"));

document.getElementById("volunteerStartYear").onchange = function(){
	limitUpperYear(document.getElementById("volunteerEndYear"), document.getElementById("volunteerStartYear").value);
};

setMonth(document.getElementById("projectStartMonth"));
setYear(document.getElementById("projectStartYear"));
setMonth(document.getElementById("projectEndMonth"));
setYear(document.getElementById("projectEndYear"));

document.getElementById("projectStartYear").onchange = function(){
	limitUpperYear(document.getElementById("projectEndYear"), document.getElementById("projectStartYear").value);
};


function setMonth(eduMonth){
	
	var option = document.createElement("option");
	option.text = '--select month--';
	option.value = '';
	eduMonth.add(option, eduMonth[0]);
	
	for (var index = 0; index < months.length; index++) {
		var option = document.createElement("option");
		option.text = months[index];
		option.value = months[index];
		
		eduMonth.add(option, eduMonth[index+1]);
	}
}

function setYear(eduYear){
	
	var option = document.createElement("option");
	option.text = '--select year--';
	option.value = '';
	eduYear.add(option, eduYear[0]);
	
	var today = new Date();
	var year = today.getFullYear()-30;
	
	for (var index = 1; index <= 30; index++) {
		
		var option = document.createElement("option");
		option.text = year+index;
		option.value = year+index;
		
		eduYear.add(option, eduYear[index]);
	}
}	
	
function limitUpperYear(selectYear, limit){

	//alert(limit);
	
	
	 selectYear.options.length = 0;
	 
	 console.log(selectYear.options.length);
	 
	
	var option = document.createElement("option");
	option.text = '--select year--';
	option.value = '';
	selectYear.add(option, selectYear[0]);
	
	var today = new Date();
	//var year = today.getFullYear()-30;
	
	for (var index = limit; index <= today.getFullYear(); index++) {
		
		var option = document.createElement("option");
		option.text = index;
		option.value = index;
		
		selectYear.add(option, selectYear[index-limit]);
	}
	
}
	