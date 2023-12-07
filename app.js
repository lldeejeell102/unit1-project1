// URL: https://v6.exchangerate-api.com/v6/
// API KEY: 8328e8b00bedc4560803e473
// EXAMPLE URL WITH API CALL: https://v6.exchangerate-api.com/v6/8328e8b00bedc4560803e473
// Current Exchange

// Example API Call
// const apiURL = "https://v6.exchangerate-api.com/v6/8328e8b00bedc4560803e473/pair/EUR/GBP/100"
// fetch(apiURL)
// .then((res) => res.json())
// .then((data) => console.log(data))

// ----------------------------------------------------------------------------------
// VARIABLES
// ----------------------------------------------------------------------------------
// Creates varible with URL with API Code
const apiURL = "https://v6.exchangerate-api.com/v6/8328e8b00bedc4560803e473/"
let $countryCode = ""
let $selectedCode = ""
let $amt = 0


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
        let countrySelector1 = document.querySelector("#countrylist")
        let countrySelector2 = document.querySelector("#selectedcode")
        // console.log(fullList)
    
        // loop to add list into the dropdown
        fullList.forEach((element) => 
        {
            // console.log(element))
            countrySelector1.options[countrySelector1.options.length] = new Option(element, element)
            countrySelector2.options[countrySelector2.options.length] = new Option(element, element)
        })
    })
}
getCountries()

// on button click, save all users values to use in getConversion function
const $button = $(`#convert-button`)
$button.on(`click`, (event) => 
{
    // created variable to store first country code
    // trimmed off to just the first country code
    $countryCode = $(`#countrylist`).val().slice(0,3);
    console.log($countryCode)
    
    // created variable to store second country code
    // trimmed off to just the second country code
    $selectedCode = $(`#selectedcode`).val().slice(0,3);
    console.log($selectedCode)
    // created variable to store amount value
    $amt = $input.val()
    console.log($amt)
    getConversion()
    })


// created function to get the conversion rate
function getConversion()
{
    const url = `${apiURL}/pair/${$countryCode}/${$selectedCode}/${$amt}`
    fetch(url)
    .then((res) => {return res.json()})
    .then((data) => 
    {
        console.log(data)
        const conversionResult = data.conversion_result.toLocaleString('en-US')
        console.log(conversionResult)

        const conversionRate = data.conversion_rate.toFixed(2).toLocaleString('en-US')
        console.log(conversionRate)
    
        $(".result").html(`<h2 class="displayresult">${conversionResult} ${$selectedCode}</h2>`)
        $(".rate").html(`<h3 class="displayrate">1 ${$countryCode} : ${conversionRate} ${$selectedCode}</h3>`)
    }
)}