import fetch from 'node-fetch'; /* 83.3k (gzipped: 23.5k) */
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi)
};

// fetchData(`${API}/products`)
// .then(response => response.json())
// .then(products => {
//     console.log(products);
// })
// .then(() => {
//     console.log('hola')
// })
// .catch(error => console.log(error))

fetchData(`${API}/products`)
.then(response => response.json())
.then(products => {
    return fetchData(`${API}/products/${products[0].id}`)
})
.then(response => response.json())
.then(product => {
    return fetchData(`${API}/categories/${product.category.id}`)
})
.then(response => response.json())
.then(category => {
    console.log(category.name)
})
.catch(err => console.log(err))
.finally(() => console.log('Finally'))