document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();

    console.log(app)

    const db = firebase.firestore(); 

    const myPost = db.collection('users').doc('sadie')

    console.log(myPost);

    //const provider = new firebase.auth.GoogleAuthProvider();

    /*var user = firebase.auth().currentUser;*/

    firebase.auth().onAuthStateChanged(function(user) {
        if(user) {
            console.log("A user is signed in!!")
            console.log(user.displayName)
            console.log(user.uid)
        } else {
            console.log("No user signed in")
        }
    })  

});

//const submitButton = document.querySelector("#saveButton")
//const resetButton = document.querySelector("#resetButton")

function resetAnswers() {
    var choices = document.getElementsByTagName('input');
    for(i=0; i < choices.length; i++) {
        choices[i].checked = false; 
    }
    alert("Answers reset!")
    console.log("answers reset")
}

function calcAnswers() {
    // GET RESULTS ///////////
    console.log("CALCULATING ANSWERS")
    var yesScore = 0;
    var num_answers = 0;

    // this is a list of all radio inputs on the page
    var choices = document.getElementsByTagName('input');
    console.log(choices.length);

    for(i=0; i < choices.length; i++) { // i think choices.length is 16??
        // if the radio button is checked
        if(choices[i].checked) {
            num_anwers = num_answers + 1; // we need 8 of these
            if(choices[i].value === 'yes') {
                yesScore = yesScore + 1;
            }
        }
    }

    // now save data and yes score to data file
    console.log("Yes score: ", yesScore);
    var d = new Date();
    console.log("DATE: ", d.getTime());

    var cur_results = {date: d.getTime(), num_symptoms: yesScore}

    if(num_answers < 8) {
        console.log("NOT ALL QUESTIONS WERE ANSWERED!")
        var cur_results = {date: d.getTime(), num_symptoms: -1}; 
    }

    console.log(cur_results)
    return cur_results
}


function submitSurvey() {
    console.log("TABULATING ANSWERS")

    var cur_results = calcAnswers();

    if (cur_results.num_symptoms == -1) {
        alert("Please answer all questions!")
    } 
    else {

    console.log("RESULTS: ", cur_results)

    ////////////////

    // PUT DATA INTO DATABASE ///////

    // get database reference
    const db = firebase.firestore();

    firebase.auth().onAuthStateChanged(function(user) {
        if(user) {
            console.log("A user is signed in!!")
            console.log(user.uid)
            var uid = user.uid

            // get reference to current user's document
            var userRef = db.collection('users').doc(uid);

            // check for existence of document, if it doesnt exist then set it
            userRef.get()
                .then((docSnapshot) => {
                    if(docSnapshot.exists) { // CHANGE TEST RESULTS TO SUBCOLLECTION!!!
                        console.log("DOC EXISTS!")
                        userRef.collection('testResults').add(cur_results)
                        userRef.update({test_results: cur_results})
                    } else {
                        console.log("DOC DOES NOT EXIST!!")
                        userRef.set({name: user.displayName, email: user.email, id: user.uid}) //, test_results: [cur_results]})
                        userRef.collection('testResults').add(cur_results)
                    }
                });

        } else {
            console.log("No user signed in") // cant add data!
            alert("No user signed in!")
            location.href("index.html")
        }
    })

    }

    //alert("Returning home :)")
    //location.href = 'home.html';
    //location.href = 'home.html'
}


