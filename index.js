const express = require('express');
const ejs = require('ejs');
const path = require('path');
const router = require('./routes/index');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const flash = require('connect-flash');
const server = require('http')
const { http, https } = require('follow-redirects');
const app = express();const shouldCompress = (req, res) => {
    if (req.headers['x-no-compression']) {
        // Will not compress responses, if this header is present
        return false;
    }
    // Resort to standard compression
    return compression.filter(req, res);
};

http.createServer((req, res, next) => {
    res.writeHead(301, {'Location' : 'https://metal-weld-specialties.herokuapp.com/'});
    res.end();
});

http.get('http://metal-weld-specialties.herokuapp.com/', response => {
    response.on('data', chunk => {
        console.log(chunk);
    });
}).on('error', err => {
    console.error(err);
});

https.get('https://metal-weld-specialties.herokuapp.com/'|| 'https://www.metal-weld-specialties.herokuapp.com/', response => {
    response.on('data', chunk => {
        console.log(chunk);
    });
}).on('error', err => {
    console.error(err);
});

const compression = require('compression');

// Compress all HTTP responses
app.use(compression({
    // filter: Decide if the answer should be compressed or not,
    // depending on the 'shouldCompress' function above
    filter: shouldCompress,
    // threshold: It is the byte threshold for the response
    // body size before considering compression, the default is 1 kB
    threshold: 0
}));

let setCache = function (req, res, next) {
    // here you can define period in second, this one is 5 minutes
    const period = 60 * 5

    // you only want to cache for GET requests
    if (req.method === 'GET') {
        res.set('Cache-control', `public, max-age=${period}`)
    } else {
        // for the other requests set strict no caching parameters
        res.set('Cache-control', `no-store`)
    }

    // remember to call next() to pass on the request
    next()
}

// now call the new middleware function in your app

app.use(setCache)

require('dotenv').config();
app.use(express.static(__dirname + '/public', {
    maxAge: 86400000,
    setHeaders: function(res, path) {
        res.setHeader("Expires", new Date(Date.now() + 2592000000*30).toUTCString());
    }
}))
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

app.listen(port || 3300, () => {
    console.log(`App listening on ${port}`)
});

app.use('/', router);

app.use((req, res) => res.render('notFound'))
