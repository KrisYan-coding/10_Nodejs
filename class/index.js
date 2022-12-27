
require('dotenv').config();

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

// 路由設定, routes--
app.get('/', (req, res) => {
    res.render('main', { name: '陳小名' });
});

app.get('/json-sales', (req, res) => {
    const data = require(__dirname + '/data/sales.json');
    res.json(data);
    // res.render('json-sales');
});

// app.get('/a.html', (req, res) => {
//     res.send(`<h1>假的 a.html</h1>`)
// });

app.use(express.static('public'));

// ***** 所有的路由要放在這行之前 ***
app.use('/', (req, res) => {
    res.type('text/plain');
    res.status(404).send(`找不到你要的頁面yo`);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server start: ${port}`);
});

