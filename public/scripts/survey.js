document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();

    console.log(app)

    const db = firebase.firestore(); 

    const myPost = db.collection('users').doc('sadie')

    console.log(myPost)

    /*myPost.get()
        .then(doc => {
            const data = doc.data()
            document.write(data.title + `<br>`)
            console.log(data)
        })*/

    /*myPost.onSnapshot(doc => {
        const data = doc.data();
        console.log(data) 
        document.querySelector('#title').innerHTML = data.title
    })*/
        

});


function tabulateAnswers() {
    const db = firebase.firestore();
    const mySymptomScreen = db.collection('users').doc('sadie')

    var curTime = new Date().getTime();
    var yesScore = 0;

    // this is a list pf all radio inputs on the page
    var choices = document.getElementsByTagName('input');
    console.log(choices.length);

    for(i=0; i < choices.length; i++) { // i think choices.length is 16??
        // if the radio button is checked
        if(choices[i].checked) {
           if(choices[i].value === 'yes') {
                console.log('YES')
                yesScore = yesScore + 1;
            }
        }
    }

    // now save data and yes score to data file
    console.log("Yes score: ", yesScore);
    var d = new Date();
    console.log("DATE: ", d.getTime());

    console.log(mySymptomScreen)

    mySymptomScreen.update({date: curTime})
    mySymptomScreen.update({num_symptoms: yesScore})

    document.getElementById('changeWhenDone').innerHTML = "SURVEY COMPLETE"

}

/*function resetAnswer() {
    var answerbox = document.getElementById('answer');
    //answerbox.innerHTML = 'SOMETHING'
}*/