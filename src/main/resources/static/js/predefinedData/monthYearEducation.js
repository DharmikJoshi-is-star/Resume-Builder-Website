
var months = ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];

setMonth(document.getElementById("certificationMonth"));
setYear(document.getElementById("certificationYear"));

setMonth(document.getElementById("educationInformationForm")['completionMonth']);
setYear(document.getElementById("educationInformationForm")['completionYear']);
//educationInformationForm

setMonth(document.getElementById("courseInformationForm")['completionMonth']);
setYear(document.getElementById("courseInformationForm")['completionYear']);



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
	

	