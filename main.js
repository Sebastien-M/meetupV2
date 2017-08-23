const express = require('express');
const mustache = require('mustache');
const fs = require('fs');
let app = express();
var bodyParser = require('body-parser');


let events = [];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get("/", function (req, resp) {
    resp.render('index', {
        name: 'seb'
    });
});

app.post('/event/add', function (req, res) {
    res.send("AAAAAAA");
    console.log(req.body.name);
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