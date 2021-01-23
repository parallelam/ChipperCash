# Chipper Challenge

A Bank Identification Number, or BIN, works to protect both merchants and consumers in the online marketplace.

Every credit or debit card contains a BIN, typically the first four to six numbers on a bank-issued card.

These numbers easily identify the type of card being used, the geographic location of the card issuer and which bank or company issued the card.

BINs are also referred to as IIN (Issuer Identification Number), since not all cards are issued by banks. Institutions such as American Express issue cards that incorporate BIN data as well as many prepaid and virtual gift cards like PayPal, Walmart and netSpend.

---

- Problem of the day\*

---

We have a collection of bin numbers stored in "bins.csv". There have been fraudulent activity on our cash app platform especially with people in South Africa using cards from different countries and different continents on our cash app.

1. Lets have a function that uses the bin collection data to figure out which card bins are from banks in these African countries we support(Ghana, South Africa, Nigeria, Uganda, Rwanda, Kenya, Tanzania), group them and store them in an object or map datatype and return that as an output.

2. Lets have a function to group the card bins from the bins collection data, based on whether the card type is CREDIT or DEBIT. Your output should be in this format eg. { CREDIT: [], DEBIT: [] }

3. We should enforce that only cards from a particular country can be used. Lets create a function that takes in country code and the bin, returns a boolean output to confirm if the card was issued in that country. eg. isCardIssuedInCountry('Ghana', 5111456) => false

Tips: We can use npm library called "binlookup" to help us get all the information we need to know about a card using their bin number. Also feel free to use any JS csv parser library you know

## Solution

To run this solution locally:

- Have NodeJS installed beforehand.
- Clone repository directory to local.
- Run `npm install` from cloned directory.
- Run `node index.js` from cloned directory.
- Read console prints to confirm effective solution.
