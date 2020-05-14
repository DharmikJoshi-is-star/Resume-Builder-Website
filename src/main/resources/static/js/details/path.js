/**
 * 
 */


let mySiteUrl = window.location.hostname;

if(mySiteUrl=="localhost"){
	mySiteUrl= "http://localhost:8086";
}else{
	mySiteUrl= window.location.protocol+"//"+window.location.hostname;
}

const path = mySiteUrl;
