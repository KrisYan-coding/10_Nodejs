
require('dotenv').config();

const express = require('express');

const app = express();

// 路由設定, routes--
app.get('/', (req, res) => {
    res.send(`<h1>你好yoyo</h1>`)
});

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

