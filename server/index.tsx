const express = require("express");
const app = express();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


const PORT = process.env.PORT || 3001;


app.get("/api", async function (req, res) {
    const url = 'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';

    // fetch 
    let response = await fetch(url);
    response= await response.text();
    console.log(response)


    res.json(response)
});




app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });