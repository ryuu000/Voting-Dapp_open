const express = require('express');
const client = require('./auth');
const app = express();

app.get('/login', (req, res) => {
    const loginURL = client.getLoginURL();
    res.redirect(loginURL);
});

app.get('/callback', (req, res) => {
    const accessToken = req.query.access_token;
    client.setAccessToken(accessToken);
    client.me().then(user => {
        console.log(user); // User data from Hive profile
        res.send('Authentication successful');
    }).catch(err => {
        console.error(err);
        res.status(500).send('Authentication failed');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
