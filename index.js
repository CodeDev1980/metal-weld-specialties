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
const { https } = require('follow-redirects');
https.get('https://metal-weld-specialties.herokuapp.com/', 'https://metal-weld.com/', response => {
    response.on('data', chunk => {
        console.log(chunk);
    });
}).on('error', err => {
    console.error(err);
});

require('dotenv').config();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
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

const cacheService = require("express-api-cache");
const cache = cacheService.cache;
const port = process.env.PORT;
app.listen(port || 3300, cache("10 minutes"), () => {
    console.log(`App listening on ${port}`)
});

app.use('/', router);

app.use((req, res, next) => {
  res.status(404).render('notFound'))
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
