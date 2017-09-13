const express = require('express');
const mustache = require('mustache');
const fs = require('fs');
const basicAuth = require('express-basic-auth');
const Client = require('mariasql');
const bcrypt = require('bcrypt');

let app = express();
let bodyParser = require('body-parser');
let eventName;
let eventLocation;
let events;
let email;
let password;


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


app.post("/event/del", function (req, resp) {
    var prep = c.prepare('DELETE FROM events WHERE id=:id;');
    c.query(prep({
        id: req.body.id
    }), function (err, rows) {
        if (err)
            throw err;
    });
    c.end();
});


app.get("/addEvent", function (req, resp) {
    resp.render('formulaire', {});
});
app.get("/addUser", function (req, resp) {
    resp.render('register', {});

});

app.get("/connection", function (req, resp) {
    resp.render('connection', {});

});


app.post("/add", function (req, resp) {
    resp.send("ok");
    console.log(req.body.name);
});

// fonrmulaire event
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

// fonrmulaire user
app.post('/register/add', function (req, res) {
    res.sendStatus(200);
    eventName = req.body.nom;
    eventPrenom = req.body.prenom;
    var prep = c.prepare('INSERT INTO users(nom, prenom, date_naissance, adresse, password , mail) VALUES (:nom, :prenom, :date, :adresse, :password, :mail);');
    c.query(prep({
        nom: req.body.nom,
        prenom: req.body.prenom,
        password: bcrypt.hashSync(req.body.password, 10),
        adresse: req.body.adresse,
        date: req.body.date,
        mail: req.body.mail
    }), function (err, rows) {
        if (err)
            throw err;
    });
    c.end();
});

app.post('/checkuser', function (req, res) {
    //SQL
    var prep = c.prepare('SELECT * FROM users where mail = :email');
    c.query(prep({
        email: req.body.email
    }), function (err, rows) {
        if (err) {
            throw err;
        }
        console.log(rows[0].password);
    });
    c.end();
    //compare with hashed pass
    // bcrypt.compare(myPlaintextPassword, hash).then(function(res) {});
    email = req.body.email;
    password = req.body.password;
    res.send("aaaaaa");
})


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

function hashpass(pass) {
    bcrypt.hash(pass, 10, function (err, hash) {
        console.error(err);
    });
}