const fs = require('fs');
const express = require('express');
const {JSDOM} = require('jsdom');
const app = require('./shared/app');

const expressApp = express();
const html = fs.readFileSync('./shared/index.html');

global.requestAnimationFrame = cb => cb(Date.now());

expressApp.get('/', (req, res) => {

    // set up a DOM with some basic HTML
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Render the App using the JSDOM document body
    app(document.body);

    // send the serialized HTML
    res.send(dom.serialize());

});

expressApp.use('/dist', express.static('dist'));

expressApp.listen(3000);