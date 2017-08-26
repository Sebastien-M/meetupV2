const express = require('express');
const mustache = require('mustache');
const fs = require('fs');
const basicAuth = require('express-basic-auth');
const Client = require('mariasql');
let app = express();
let bodyParser = require('body-parser');
let eventName;
let eventLocation;
let events;


var c = new Client({
    host: '127.0.0.1',
    user: 'php',
    password: 'toor',
    db: 'eventfinder'
});

c.query('SELECT * FROM events', function (err, rows) {
    if (err)
        throw err;
});

c.end();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/", express.static('public'));

app.get("/", function (req, resp) {
    c.query('SELECT * FROM events', function (err, rows) {
        if (err)
            throw err;
        events = rows;
        resp.render('index', {
            events: events
        });
    });
    c.end();
});

app.get("/addEvent", function (req, resp) {
    resp.render('formulaire', {});
});

app.post("/add", function (req, resp) {
    resp.send("ok");
    console.log(req.body.name);
});

app.post('/event/add', function (req, res) {
    res.sendStatus(200);
    eventName = req.body.name;
    eventLocation = req.body.location;
    var prep = c.prepare('INSERT INTO events(name, location, hour, category, description, organisator) VALUES (:name, :location, :hour, :category, :description, :organisator);');
    c.query(prep({
        name: req.body.name,
        location: req.body.location,
        hour: req.body.date,
        category: req.body.cat,
        description: req.body.desc,
        organisator: req.body.orga
    }), function (err, rows) {
        if (err)
            throw err;
    });
    c.end();
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

app.set('views', './template');
app.set('view engine', 'html');
app.listen(3000, function () {
    console.log('Listening on port 3000');
});