const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');

//route-ok fájljai

require('./routes/booksRoute')(app);
require('./routes/mybooksRoute')(app);
require('./routes/readersRoute')(app);
require('./routes/rentalsRoute')(app);
require('./routes/authRoute')(app);

app.set('view engine', 'ejs');

app.use(session({
	secret: 'titok',
	cookie: {
		maxAge: 6000000
	},
	resave: true,
	saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static('public'));

const server = app.listen(3000, function () {
	console.log("listening on 3000");
});
