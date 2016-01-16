function calculateTip(){
	// store the data of the input

	var billAmount = document.getElementById("billAmount").value;
	var serviceQuality = document.getElementById("serviceQuality").value;
	var numPeople = document.getElementById("totalPeople").value;

	//make sure the input is valid

	if (billAmount === "" || serviceQuality == 0) {
		window.alert("Please enter a value to use the calculator")
		return; // stops the function from continuing
	};

	// check to see if input is empty
	if (numPeople === "" || numPeople <=1 ) {
		numPeople = 1;

		document.getElementById("each").style.display ="none";
	} else {
		document.getElementById("each").style.display ="block";
	}



	//calculations

	var total = (billAmount * serviceQuality) / numPeople;
	total = Math.round(total * 100) / 100;
	total = total.toFixed(2);


	//display the reuslt 
	document.getElementById("totalTip").style.display="block";
	document.getElementById("tip").innerHTML =total;

}


//hide the tip amount onLoad
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

//onClick listener

document.getElementById("calculate").onclick = function() { calculateTip(); };