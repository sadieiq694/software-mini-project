// JS functions for home page
document.addEventListener("DOMContentLoaded", event => {
	const app = firebase.app();
	console.log(app)

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