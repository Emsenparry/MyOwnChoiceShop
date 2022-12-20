const url = 'http://localhost:3000/product'
let apiData;
const products = document.querySelector('#products')


function fetchAPI(){
fetch(url)
.then(response => {
    return response.json();
})
.then(data => {
    apiData = data
    console.log(data);
})
.catch(error => {
console.error('There is a problem connecting to API');
})

.finally(() => {
for (let index = 0; index < apiData.length; index++) {
	const element = apiData[index];
	document.getElementById('products').innerHTML +=
	`<figure class="card">
			<img src="${element.img}" alt="${element.name} image" height=250px;>
			<article class="container">
  				<h3>${element.name}</h3>
  				<p>${element.price} DKK</p>
  			</article>
	</figure>`
		}

})
}

fetchAPI()