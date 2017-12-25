function locater(){
	document.getElementById("locate").value="822 Forest Ave";
	// console.log("cool");
}

function changeColor(){
	// document.getElementById("locater").css("color", "blue");
  	console.log("Here");
	document.getElementById("locate_button").style.color = "blue";
}

function resetColor(){
	document.getElementById("locate_button").style.color = "black";
}

function passParameters(){
	document.getElementById("intro").style.display = "";
	var location = document.getElementById("locate").value;
	var url = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyBfz3mUIXq3PxNnk5H_tM77bo0T1oWi_1o&origin="+encodeURI(location)+ "&destination=Chicago";
	console.log(url);
	document.getElementById("frame").src = url;
}