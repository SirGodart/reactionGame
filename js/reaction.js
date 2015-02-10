var clickedTime; var createdTime;
var counter = 0;
var d = document.getElementById("box");

var lastTime = 0; 
var timeArray = [];
var sum = 0;
var avg;




function getAvg() {

		for (var i = 0; i < timeArray.length; i++) {

			sum += parseFloat(timeArray[i], 10);

		}
		avg = sum / timeArray.length;
        console.log("total:" + sum + "average:" + avg);


}

function getRandomColors() {

	//split characters into array
	var characters = '0123456789ABCDEF'.split('');
	var prefix = '#';

	//hex code contains 6 characters + prefix
	for (var i=0; i<6; i++) {
		prefix += characters[Math.round(Math.random() * 15)];
	}	
	return prefix;
}

function placeDiv(x, y) {

  
  d.style.position = 'absolute';
  d.style.left = x+'px';
  d.style.top = y+'px';

}

//create shape
function makeBox() {

 //console.log(counter);
  

	//random x
	var posX = Math.random(); posX *= 800;

	//random y
	var posY = Math.random(); posY *= 350;

	//random time from 0 to 2 seconds
 	var x = Math.random(); x *= 2000; x = Math.floor(x);
 	//console.log(x);

 setTimeout(function () {

if (Math.random() > 0.5) {

	document.getElementById("box").style.borderRadius = "120px";
} else { document.getElementById("box").style.borderRadius = "0px"; }


 	document.getElementById("box").style.backgroundColor = getRandomColors();
	document.getElementById("box").style.display = "block";
	placeDiv(posX + 200, posY + 50);
	createdTime = Date.now();

 }, x);

}

 //click function
 document.getElementById("box").onclick = function() {
 
	counter += 1;
	console.log(counter);


	if (counter == 5) {

		document.getElementById("insideBox").style.pointerEvents = "all";
		document.getElementById("insideBox").style.display = "block";
		document.getElementById("score").innerHTML = sum;
		document.getElementById("average").innerHTML = avg;
		counter = 0;

	}
	 	this.style.display = "none";
	 	clickedTime = (Date.now() - createdTime) / 1000;

	 	//no need for for loop
		timeArray.push(clickedTime);

		console.log("array:" + timeArray);



	    console.log("clicked time is: " + clickedTime + " seconds");
	    document.getElementById("time").innerHTML = clickedTime;

	 	//repeat process
	 	makeBox();
	 	getAvg();

 }



 	
//create first box
makeBox();