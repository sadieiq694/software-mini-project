const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

console.log("js file test")

function tabulateAnswers() {
    var yesScore = 0;
    var noScore = 0; 

    var choices = document.getElementsByTagName('input');
    console.log(choices.length)

    for(i=0; i < choices.length; i++) { // i think choices.length is 8
        // if the radio button is checked
        if(choices[i].checked) {
            if(choices[i].value === 'yes') {
                console.log('YES')
            }
        }
    }
}

function resetAnswer() {
    var answerbox = document.getElementById('answer');
    //answerbox.innerHTML = 'SOMETHING'
}