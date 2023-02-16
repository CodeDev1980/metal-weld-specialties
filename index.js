const express = require('express');
const ejs = require('ejs');
const path = require('path');
const router = require('./routes/index');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const flash = require('connect-flash');
const app = express();
const server = require('http')
const { http, https } = require('follow-redirects');

http.get('http://localhost:3000', response => {
    response.on('data', chunk => {
        console.log(chunk);
    });
}).on('error', err => {
    console.error(err);
});

https.get('https://express-developer.herokuapp.com/', response => {
    response.on('data', chunk => {
        console.log(chunk);
    });
}).on('error', err => {
    console.error(err);
});

require('dotenv').config();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())
app.use(flash());
app.use(expressSession({
    secret: process.env.SECRET
}))

global.loggedIn = null;

app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
})

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    autoIndex: true
})
if(mongoose){
    console.log('DB connected')
} else {
    console.log('No DB connected')
}


const port = process.env.PORT;
app.get('http://localhost:3000',  (req, res, next) => {
    res.redirect(301, 'http://localhost:8080)');
});
app.listen(port || 3300, () => {
    console.log(`App listening on ${port}`)
});

app.use('/', router);

app.use((req, res) => res.render('notFound'))