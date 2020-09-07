const functions = require('firebase-functions');

function saveData(userInput) {
    //var userInput = document.getElementById("myText").value;
	console.log("SAVING DATA")	
    var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "dynamic.txt");
}