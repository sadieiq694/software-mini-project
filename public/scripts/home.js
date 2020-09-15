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

async function getUserID() {

	return firebase.auth().onAuthStateChanged(function(user) {
		if(user) {
			console.log("A user is signed in!!")
			// display other data for this user
			return user.id;
		} else {
			console.log("No user signed in")
			return "";
		}
	})
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

	getUserID().then(id => {
		console.log("Async test:", id);
	});

	if(window.cur_id != "") {
		// get data for this person
		var resultsRef = db.collection('users').doc(window.cur_id).collection("testResults");
		resultsRef.get()
			.then((snapshot) => {(snapshot.forEach(doc => {
				console.log(doc.data())
			}))})
	} else {
		console.log("No user signed in")
		alert("You are not signed in!")
	}


			// check for existence of document, if it doesnt exist then send to symptom page
            /*userRef.get()
                .then((docSnapshot) => {
                    if(docSnapshot.exists) { // CHANGE TEST RESULTS TO SUBCOLLECTION!!!
                        console.log("USER HAS TEST RESULTS!")
						//userRef.collection('testResults')
						console.log(docSnapshot.data)

						const resultsRef = userRef.collection("testResults")
						return resultsRef.get()
							.then((snapshot) => {(snapshot.forEach(doc => {
								//console.log(doc.id, '=>', doc.data());
								var obj = doc.data()
								console.log(obj)
								if(obj.date > cur_time - one_day ) {
									console.log("already took test today")
									alert("already took test today!")
								}
								return obj;
							}))});

                        // HERE get all results, compare times to current time

                        //userRef.update({test_results: cur_results})
                    } else {
                        console.log("USER HAS NEVER FILLED OUT A SURVEY!!!")
                        //userRef.set({name: user.displayName, email: user.email, id: user.uid}) //, test_results: [cur_results]})
                        //userRef.collection('testResults').add(cur_results)
                    }
				}*/


	return false;
}