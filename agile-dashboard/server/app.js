const { default: axios } = require('axios');
const express = require('express')
const app = express()
require('dotenv').config();

const username = process.env.ATLASSIAN_USERNAME
const password = process.env.ATLASSIAN_API_KEY
const domain = process.env.DOMAIN

const auth = {
    username: username,
    password: password
  };


const baseUrl = 'https://' + domain + '.atlassian.net';

const config = {
    method: 'get',
    url: baseUrl + '/rest/api/2/search',
    headers: { 'Content-Type': 'application/json' },
    auth: auth
};

const getProj = async () => {
    const response = await axios.request(config);
    console.log(response.data);
}
  

app.get("/api", (req, res) => {
    getProj();
});

// app.get("https://jd2002.atlassian.net/jira/api/", (req, res) => {
//     res.json(
//         { text: 'Do all exercises!', id: 'g3' });
// });



app.listen("5000", () => {console.log("Server listening on port 5000")});