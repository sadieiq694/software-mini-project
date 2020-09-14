import React, {useState, useEffect} from 'react'
//import axios from 'axios'
function Product(){
//	const url = 'https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/'
//	const [product, setProduct] = useState(null)
//	useEffect(() => {
//		axios.get(url)
//              .then(response => {
//                      setProduct(response.data)
//                })
	
//	}, [url])
	
//	if(product){
//		return(
//		<div>
//			<h1>{product.name}</h1>
//			</div>
		
//		)

//	}

		
//	return(
//	<div>
//		nothing
//		</div>
//	)
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.covid19api.com/live/country/usa/status/confirmed',
  headers: { }
};

var mass =  axios(config)
.then(function (response) {
        console.log(response.data);
//	var list = JSON.parse(response.data);
		
})
.catch(function (error) {
  console.log(error);
});

//var list = JSON.parse();
return (
//	var obj = JSON.parse({"Country":"United States of America","CountryCode":"US","Province":"Michigan","City":"","CityCode":"","Lat":"43.33","Lon":"-84.54","Confirmed":24244,"Deaths":1479,"Recovered":0,"Active":22765,"Date":"2020-04-13T00:00:00Z"});
	<div>
	This is the data 
	</div>
)
}	

export default Product

