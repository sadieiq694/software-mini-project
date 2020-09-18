import React, {useState, useEffect} from 'react'
//import App from './App'
function Product(){

var axios = require('axios');

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
	//i managed to get Mass. data onto the console log
	//but I dont know how to print it out onto the webpage
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




export default Product
