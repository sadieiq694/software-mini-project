document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    const db = firebase.firestore()

    const userRef = db.collection('users');

    const query = userRef.where('num_symptoms', '>', 2)

    query.get()
        .then(users => {
            users.forEach(doc => {
                data = doc.data()
                document.write(`${data.date} at ${data.num_symptoms} <br>`)
            })
        })
})