const express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.listen(3600, () => console.log('Express server : port no : 3600'));

app.get('/index/:part', (req, res) => {
    let part = req.params.part;
    let Funds_NAV = [{
        fund_name: "B-INCOMESSF",
        nav: "10.0548"
    }, {
        fund_name: "BM70SSF",
        nav: "9.9774"
    },
    {
        fund_name: "BEQSSF",
        nav: "11.247"
    },
    {
        fund_name: "B-FUTURESSF",
        nav: "11.443"
    }
    ];
    let data = [];
    let result = Funds_NAV.find(x => x.fund_name === part).nav;
    console.log(result);
    data.push({fund_name: part,"nav": result });
    res.json(data);
});

module.exports = app;