// https://www.amdoren.com/currency-api/
// URL: https://v6.exchangerate-api.com/v6/
// API KEY: 8328e8b00bedc4560803e473
// EXAMPLE URL WITH API CALL: https://v6.exchangerate-api.com/v6/8328e8b00bedc4560803e473/pair/EUR/GBP/100
// Current Exchange





const apiURL = "https://v6.exchangerate-api.com/v6/8328e8b00bedc4560803e473/pair/EUR/GBP/100"
fetch(apiURL)
.then((res) => res.json())
.then((data) => console.log(data))


// const url = "https://www.perfumeapi.com/ingredients"
// fetch(url)
// .then((res) => res.json())
// .then((data) => console.log(data))