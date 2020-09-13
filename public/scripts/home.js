// JS functions for home page
document.addEventListener("DOMContentLoaded", event => {
	const app = firebase.app();
	console.log(app)

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