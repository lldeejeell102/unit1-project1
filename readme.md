# Currency Exchange
### By Daniel Ji

DEPLOYED SITE: [Click Here](https://lldeejeell102.github.io/unit1-project1/)

## Description on Project

I would like to create a simple and easy to use website that allows the user to select the origin country's current and amount they are willing to exchange. Then they would select the next country's currency and the website will give you the exchanged amount with current exchange rate.

## Details about the API

- https://www.amdoren.com/currency-api/: Once you identify amount, current currency, and target currency. It will generate an amount in new currency using current exchange rates.

Sample Fetch/Ajax called:
```js
const url = "https://www.perfumeapi.com/ingredients"
fetch(url)
.then((res) => res.json())
.then((data) => console.log(data))
```

The Data I get back:
```json
[
  {
    "ingredient": "Bergamot",
    "description": "A citrus fruit with a bright, uplifting scent."
  },
  {
    "ingredient": "Lavender",
    "description": "A flowering plant with a calming, relaxing scent."
  },
  {
    "ingredient": "Rose",
    "description": "A flowering plant with a romantic, feminine scent."
  },
  {
    "ingredient": "Jasmine",
    "description": "A flowering plant with an exotic, sensual scent."
  },
  {
    "ingredient": "Sandalwood",
    "description": "A woody plant with a warm, earthy scent."
  },
  {
    "ingredient": "Patchouli",
    "description": "A herb with a deep, musky scent."
  },
  {
    "ingredient": "Vanilla",
    "description": "A spice with a sweet, gourmand scent."
  },
  {
    "ingredient": "Amber",
    "description": "A fossilized resin with a warm, balsamic scent."
  },
  {
    "ingredient": "Musk",
    "description": "An animal secretion with a sensual, musky scent."
  },
  {
    "ingredient": "Oud",
    "description": "A type of agarwood with a dark, mysterious scent."
  }
]
```

## Mockup
Here put a mix of text explanation plus a picture giving us an idea of the layout of your website.

www.mockflow.com

#### Desktop View
![My desktop view](link)
#### Mobile View
![My mobile view](link)

## Schedule of Work
| Day | Goal | What I Accomplished |
|-----|------|---------------------|
| Sat(1) | Create Readme & Deploy & Get Approval | | 
| Sun(2) | Build fetch of data in JS file | | 
| Mon(3) | Render data from API on screen | | 
| Tues(4)| Build form for user to interact with | | 
| Wed(5) | Wrap up functionality | | 
| Thur(6)| Mobile Layout Styling | | 
| Fri(7) | Desktop Layout Styling & Finalize | | 