// LOGIN, GOES WITH index.html
document.addEventListener("DOMContentLoaded", event => {
	
	const app = firebase.app();
	console.log(app)

});

function googleLogin(){
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider)
	
	.then(result => {
		window.location.assign("home.html");
		var user1 = firebase.auth().currentUser;
        console.log(user1.displayName)
	//	document.write('Hello ' + user.displayName);
	//	console.log(user)
	})
	.catch(console.log)

	/*var user = firebase.auth().currentUser;

    if(user) {
        console.log("A user is signed in!!")
        console.log(user)
        console.log(user.displayName)
    } else {
		console.log("No user signed in")
	}*/
}
