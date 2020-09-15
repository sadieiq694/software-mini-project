const homeButton = document.querySelector("#homeButton");

document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    const db = firebase.firestore();


    const userRef = db.collection('users');

    //const query = userRef.where('num_symptoms', '>', 2)
    const userDetails = document.querySelector("#userDetails")

    console.log(userDetails)
    userDetails.innerHTML = `<h2>Symptom Survey Results<h2>`

    userRef.get()
        .then(users => {
            users.forEach(doc => {
                data = doc.data()
                console.log(data.name)
                userDetails.innerHTML += `<h3>Name: ${data.name}</h3>`

                resultsRef = userRef.doc(data.id).collection('testResults') 
                resultsRef.get()
                    .then(res => {
                        res.forEach(r => {
                            survey_results = r.data()
                            console.log(survey_results)
                            const milli_date = survey_results.date;
                            var date = new Date(milli_date);
                            userDetails.innerHTML += `<p>Date: ${date.toString()}, Number of symptoms: ${survey_results.num_symptoms}</p>`
                        })
                    })


            })
        })
})


homeButton.addEventListener("click", function() {
    console.log("returning home");
    location.href = 'home.html';
})






/*
const db = firebase.firestore();


getRealTimeUpdates = function() {

    var usersRef = db.collection('users');

    usersRef.get()
        .then((snapshot) => {
            console.log('REAL TIME')
            console.log(snapshot.docs);
        })

    /*userRef.onSnapshot(function (doc) {
        if(doc && doc.exists) {
            const myData = doc.data(); 
            outputHeader.innerText(myData.num_symptoms)
        }
    })
}

getRealTimeUpdates();*/