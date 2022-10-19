const express = require('express');
const app = express();


app.get('/', (req, res) => {
res.sendFile(__dirname + "/views/index.html");
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
});

app.get('/setting', (req, res) => {
    res.sendFile(__dirname + "/views/setting.html");
});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
});