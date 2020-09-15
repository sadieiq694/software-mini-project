// JS functions for home page
const userDetails = document.querySelector("#userDetails")

document.addEventListener("DOMContentLoaded", event => {
	const app = firebase.app();
	console.log(app)

	firebase.auth().onAuthStateChanged(function(user) {
		if(user) {
			console.log("A user is signed in!!")
			console.log(user.displayName)
			console.log(user.uid)
			userDetails.innerHTML = `<h3>Hello ${user.displayName}</h3>`
			window.cur_id = user.uid;
			// display other data for this user
		} else {
			console.log("No user signed in")
			window.cur_id = ""
		}
	})
	

});



function adminValidate() {
	console.log("Validating:")
	var passwd = document.getElementById("inData").value;
	if(passwd == 'iamanadmin')
	{
		location.href = 'admin.html';
	}
	else
	{
		alert('You do not have admin privileges!');
	}
	
	return false;
}


function onSymptomClick() {
	// check if user already has results in the past 24 hrs
	// if not, move to symptom page
	// if so, alert
	console.log("CLICKED SYMPTOM BUTTON")
	console.log(window.cur_id)
	// get database reference
	const db = firebase.firestore();
	var d = new Date();
	var cur_time = d.getTime();
	const one_day = 86400000; // number of seconds in the day


	if(window.cur_id != "") {
		// get data for this person
		console.log("GETTING TEST DATES FOR", window.cur_id)
		const resultsRef = db.collection('users').doc(window.cur_id).collection("testResults");
		const recentTests = resultsRef.where('date', '>', (cur_time-one_day)); // all tests within the past 24 hours
		recentTests.get()
			.then((snapshot) => {
				if(snapshot.empty) {
				console.log("NO RECENT TESTS");
				location.href = "survey.html"
				} else {
					alert("You have already taken your survey today!!")
				}
			});

	} else {
		console.log("No user signed in")
		alert("You are not signed in!")
		location.href = "index.html"
	}

	return false;
}