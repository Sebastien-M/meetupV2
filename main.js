const express = require('express');
const mustache = require('mustache');
const fs = require('fs');
const basicAuth = require('express-basic-auth');
let app = express();
let bodyParser = require('body-parser');
let eventName;
let eventLocation;
let events = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.use("/private", basicAuth({
    users: {
        'toto': 'toto'
    },
    challenge: true,
    realm: 'private'
}));

app.get("/", function (req, resp) {
    resp.render('index', {
        events: events
    });
});

app.get("/private", function (req, resp) {
    resp.send("aaa");
});

app.post('/event/add', function (req, res) {
    res.sendStatus(200);
    // console.log(req.body.name);
    eventName = req.body.name;
    eventLocation = req.body.location;
    events.push({
        ev: {
            name: eventName,
            location: eventLocation
        }
    });
    console.log(events);
});

app.engine("html", function (path, options, callback) {
    fs.readFile(path, function (err, content) {
        if (err) {
            return callback(err);
        }
        let str = mustache.render(content.toString(), options);
        return callback(null, str);
    });
});

app.set('views', './public/template');
app.set('view engine', 'html');
app.listen(3000, function () {
    console.log('Listening on port 3000');
});