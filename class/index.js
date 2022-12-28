
require('dotenv').config();

const multer = require('multer');
const upload = require('./modules/upload-img');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

// middleware 處理送來的資料--
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// 路由設定, routes--
app.get('/', (req, res) => {
    res.render('main', { name: '陳小名' });
});

app.get('/json-sales', (req, res) => {
    const data = require(__dirname + '/data/sales.json');
    console.log(data); // 取得已經是原生類型

    // res.json(data);

    res.render('json-sales', { data });
});

app.get('/try-qs', (req, res) => {
    res.json(req.query);
});

// --------------
app.get('/json-sales2', (req, res) => {
    const data = require(__dirname + '/data/sales.json');
    const { orderby } = req.query;

    const handleObj = {
        name_asc: {
            label: '姓名由小到大',
            sort: (a, b) => { a.name < b.name ? -1 : 1 }
        },
        name_desc: {
            label: '姓名由大到小',
            sort: (a, b) => { a.name > b.name ? -1 : 1 }
        },
        age_asc: {
            label: '年齡由小到大',
            sort: (a, b) => { a.age < b.age ? -1 : 1 }
        },
        age_desc: {
            label: '年齡由大到小',
            sort: (a, b) => { a.age > b.age ? -1 : 1 }
        }
    };

    console.log('orderby', orderby);
    
    if (handleObj[orderby]) {
        console.log('sort--');
        console.log(handleObj[orderby].sort);
        data.sort(handleObj[orderby].sort);
    }
    console.log(data);

    res.render("json-sales2", { data, handleObj, orderby });
});

app.get("/json-sales3", (req, res) => {
    const data = require(__dirname + "/data/sales.json");

    const handleAr = [
        {
            key: "name_asc",
            label: "姓名由小到大",
            sort: (a, b) => { },
        },
        {
            key: "name_desc",
            label: "姓名由大到小",
            sort: (a, b) => { },
        },
        {
            key: "age_asc",
            label: "年齡由小到大",
            sort: (a, b) => { },
        },
        {
            key: "age_desc",
            label: "年齡由大到小",
            sort: (a, b) => { },
        },
    ];

    res.render("json-sales", { data, handleObj });
});

// --------------
app.post(['/try-post', '/try-post2'],  (req, res) => {
    res.json(req.body);
});

// --------------
app.get('/try-post-form',  (req, res) => {
    res.render('try-post-form');
});
app.post('/try-post-form',  (req, res) => {
    res.render("try-post-form", req.body);
});

// --------------
app.post('/try-upload', upload.single('avatar'), (req, res) => {
    res.json(req.file);
});

app.post('/try-uploads', upload.array('photos'), (req, res) => {
    res.json(req.files);
});

// --------------
app.get('/my-params1/:action/:id?', (req, res) => {
    res.json(req.params)
})
// app.get('/my-params1/*/*', (req, res) => {
//     res.json(req.params)
// })

// app.get('/a.html', (req, res) => {
//     res.send(`<h1>假的 a.html</h1>`)
// });

// --------------
app.get(/^\/m\/09\d{2}-?\d{3}-?\d{3}$/i, (req, res) => {
    let u = req.url.slice(3);
    u = u.split('?')[0] // query string 不要
    u = u.split('-').join(''); //以'-'分開，再以''合併
    res.json(u)
})

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

