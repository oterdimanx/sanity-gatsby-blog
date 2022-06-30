import fetch from "cross-fetch";

// Using CommonJS modules
const fetch = require("cross-fetch");

const OPEN_EXCHANGE_RATES_APP_ID="7299048adc0a416093150a5580a093ae";
const API_ENDPOINT="https://openexchangerates.org/api/latest.json?app_id="+OPEN_EXCHANGE_RATES_APP_ID;

exports.handler = async (event, context) => {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
