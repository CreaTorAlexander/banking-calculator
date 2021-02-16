
var express = require("express");
var app = express();
import {promises as fs } from 'fs';

app.use(express.static('public'));
app.listen('8080', function () {
    console.log('listen on port 8080');
});
app.get('/getData', function (req, res) {
    loadFileContent()
        .then(function (data) {
        res.send(data);
    });
});

async function loadFileContent() {
    const data = await fs.readFile('ressources/20210216-5252890-umsatz.CSV');
    return Buffer.from(data);
}
