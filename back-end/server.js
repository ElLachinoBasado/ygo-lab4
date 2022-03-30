const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const multer = require('multer');
const upload = multer({
    dest: '../front-end/public/images/', //replace with '/var/www/cyber.hjsung.xyz/images'
    limits: {
        fileSize:10000000
    }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));