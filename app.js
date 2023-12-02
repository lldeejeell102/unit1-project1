// URL: https://v6.exchangerate-api.com/v6/
// API KEY: 8328e8b00bedc4560803e473
// EXAMPLE URL WITH API CALL: https://v6.exchangerate-api.com/v6/8328e8b00bedc4560803e473/pair/EUR/GBP/100
// Current Exchange

// Example API Call
// const apiURL = "https://v6.exchangerate-api.com/v6/8328e8b00bedc4560803e473/pair/EUR/GBP/100"
// fetch(apiURL)
// .then((res) => res.json())
// .then((data) => console.log(data))


// Creates varible with URL with API Code
const apiURL = "https://v6.exchangerate-api.com/v6/8328e8b00bedc4560803e473/"


// ----------------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------------
// function to fetch data for form list
function getCountries(){
    const url = `${apiURL}codes`
    fetch(url)
    .then((res) => {return res.json()})
    .then((data) => {
    console.log(data)
    const fullList = data.supported_codes
    const countryListSelector = document.querySelector(".countrylist")
    // console.log(fullList)
    
    fullList.forEach((element) => countryListSelector.innerHTML =
    console.log(element))
    // `<option>${element}</option>`)
    })
}








// function to populate form list with data
function populateList(fullList){
    const countryListSelector = document.querySelector(".countrylist")
    countryListSelector.innerHTML = `<option>${fullList[0]}</option>`
}


getCountries()
// create new variable to house 
// call all arrays with country codes
// const countryAllCodes = fetch(apiURL + "/codes").then((res) => res.json()).then((data) => console.log(data))
// console.log(countryAllCodes)