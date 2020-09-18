// JS functions for home page
document.addEventListener("DOMContentLoaded", event => {
	const app = firebase.app();
	console.log(app)

	const userDetails = document.querySelector("#userDetails")


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
			location.href = 'index.html';
		}
	})

	displayCovidData()
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

function displayCovidData(){
	//var axios = require('axios');

	var config = {
	method: 'get',
	url: 'https://api.covid19api.com/live/country/usa/status/confirmed',
	headers: { }
	};
	var list = null;

	axios(config)
	.then(function (response) {
			list = response.data[119];
			console.log(list.Country);
		console.log(list.Confirmed);
		console.log(list.Deaths);
		console.log(list.Province);
		console.log(list.Recovered);
		console.log(list.Active);

		var country = document.getElementById("country");
		var confirmed = document.getElementById("confirmed");
		var deaths = document.getElementById("deaths");
		var province = document.getElementById("recovered");
		var recovered = document.getElementById("recovered");
		var active = document.getElementById("active");
		country.innerHTML = 'Country: ' + list.Country;
		confirmed.innerHTML = 'Confirmed Cases: ' + list.Confirmed;
		deaths.innerHTML = 'Deaths: ' + list.Deaths;
		province.innerHTML = 'State: ' + list.Province;
		recovered.innerHTML = 'Recovered: ' + list.Recovered;
		active.innerHTML = 'Active Cases: ' + list.Active;


	})
	.catch(function (error) {
	console.log(error);
	});

}
