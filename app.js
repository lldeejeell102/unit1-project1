// URL: https://v6.exchangerate-api.com/v6/
// API KEY: 8328e8b00bedc4560803e473
// EXAMPLE URL WITH API CALL: https://v6.exchangerate-api.com/v6/8328e8b00bedc4560803e473
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
$input = $(`#amount`)

function getCountries()
{
    const url = `${apiURL}codes`
    fetch(url)
    .then((res) => {return res.json()})
    .then((data) => 
    {
        console.log(data)
        const fullList = data.supported_codes
        let countryListSelector = document.querySelector("select")
        // console.log(fullList)
    
        // loop to add list into the dropdown
        fullList.forEach((element) => 
        {
            // console.log(element))
            countryListSelector.options[countryListSelector.options.length] = new Option(element, element)
        })
    })
}
const $button = $(`#convert-button`)
$button.on(`click`, (event) => 
    {
        // created variable to store country code
        const $selectedName = $(`#countrylist`).val().slice(0,3);
        // console.log($selectedName)
        // created variable to store amount value
        const $amt = $input.val()
        console.log($amt)

    })
// getCountries()