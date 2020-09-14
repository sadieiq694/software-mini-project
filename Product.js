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
var list = null;

 axios(config)
.then(function (response) {
        list = response.data[119];
	console.log(list.Country);
	//i managed to get Mass. data onto the console log
	//but I dont know how to print it out onto the webpage
			
})
.catch(function (error) {
  console.log(error);
});
return(
	<div>
		This data : 
	</div> 
)

}	




export default Product

