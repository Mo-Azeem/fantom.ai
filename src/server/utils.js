const fetch = require("node-fetch");
const dotenv = require("dotenv");
const FormData = require("form-data");
dotenv.config();

async function results(txt) {
  const formdata = new FormData();
  formdata.append("key", process.env.API_KEY);
  formdata.append("lang", "en");
  formdata.append("txt", txt);

  const requestBody = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = await fetch(process.env.API_URL, requestBody);
  const json = await response.json();
  return json;
}

module.exports = {
  results
};
