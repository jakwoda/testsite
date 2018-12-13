let first = document.getElementById("first");
let second = document.getElementById("second");
let i = 0;

function changPic(){
	i++;
	console.log(i);
	
}

first.addEventListener = ("click", changPic);


var clickCounter = 0;


first.onclick = function () {


     clickCounter++;
     console.log(clickCounter); 
}