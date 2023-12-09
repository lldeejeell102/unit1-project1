# Currency Exchange
### By Daniel Ji

DEPLOYED SITE: [Click Here](https://lldeejeell102.github.io/unit1-project1/)

## Description on Project

I would like to create a simple and easy to use website that allows the user to select the origin country's current and amount they are willing to exchange. Then they would select the next country's currency and the website will give you the exchanged amount with current exchange rate.

## Details about the API

- https://www.amdoren.com/currency-api/: Once you identify amount, current currency, and target currency. It will generate an amount in new currency using current exchange rates.

Sample Fetch/Ajax called:
```js
const apiURL = "https://v6.exchangerate-api.com/v6/8328e8b00bedc4560803e473/pair/EUR/GBP/100"
fetch(apiURL)
.then((res) => res.json())
.then((data) => console.log(data))
```

The Data I get back:
```json
[(
    result: 'success', documentation: 'https://www.exchangerate-api.com/docs', terms_of_use: 'https://www.exchangerate-api.com/terms', time_last_update_unix: 1701475201, time_last_update_utc: 'Sat, 02 Dec 2023 00:00:01 +0000', …}
    base_code:"EUR"
    conversion_rate:0.8583
    conversion_result:85.83
    documentation:"https://www.exchangerate-api.com/docs"
    result:"success"
    target_code:"GBP"
    terms_of_use:"https://www.exchangerate-api.com/terms"
    time_last_update_unix:1701475201
    time_last_update_utc:"Sat, 02 Dec 2023 00:00:01 +0000"
    time_next_update_unix:1701561601
    time_next_update_utc:"Sun, 03 Dec 2023 00:00:01 +0000"
)]
```

## Mockup
Initially I would like to have a very simple presentation of the currency calculator. In the mobile view, I'd like to chanllege myself to have a hamburger menu to house list of all the countries the API can support.

#### Desktop View
![My desktop view](https://i.imgur.com/cgYlKYm.png)
#### Mobile View
![My mobile view](https://i.imgur.com/FEYCs4a.png)

## Schedule of Work
| Day | Goal | What I Accomplished |
|-----|------|---------------------|
| Sat(1) | Create Readme & Deploy & Get Approval | Created Readme, got approval, fetched country codes and integrated into first dropdown | 
| Sun(2) | Build fetch of data in JS file | created action button, listener, integegrated country codes into second dropdown, created hamburger menu | 
| Mon(3) | Render data from API on screen | removed hamburger menu | 
| Tues(4)| Build form for user to interact with | finished coding all functionality, started stylzing page, started mobile and desktop layout styling | 
| Wed(5) | Wrap up functionality | finished with mvp | 
| Thur(6)| Mobile Layout Styling | | 
| Fri(7) | Desktop Layout Styling & Finalize | cleaned up formatting and prepped for presentation | 