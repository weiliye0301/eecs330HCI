function introBeforeOver(){
	var obj = document.getElementById("intro");
	console.log(obj.innerHTML);
	obj.innerHTML += " Introduction of hurricane, hurricane forecast and preparation information";
}

function introOut(){
	var obj=document.getElementById("intro");
	obj.innerHTML = "";
}

function introDuringOver(){
	var obj = document.getElementById("intro");
	obj.innerHTML += "Self-rescue methods and evacuation routes";
}


function introAfterOver(){
var obj = document.getElementById("intro");
	obj.innerHTML += " Recovery information";
}
