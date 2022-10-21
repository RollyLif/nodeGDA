const express = require('express');
const app = express();
const port = 1706;

//configuration ejs
app.set('views','./views');
app.set('view engine','ejs');

//paramètres à transmettre à ma vue
let message="je suis un Lifungula"

app.get('/', (req, res) => {
res.render('home', {message : message});
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