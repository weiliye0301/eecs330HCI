function locater(){
	document.getElementById("zip").value = "60202";
}

function changeColor(){
	// document.getElementById("locater").css("color", "blue");
  	console.log("Here");
	document.getElementById("locate_button").style.color = "blue";
}

function resetColor(){
	document.getElementById("locate_button").style.color = "black";
}

function passParam(){
	document.getElementById("intro").style.display = "";
	var zip = document.getElementById("zip").value;
	var url = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBfz3mUIXq3PxNnk5H_tM77bo0T1oWi_1o&q=shelter+near+"+zip;
	console.log(url);
	document.getElementById("frame").src = url;
}