const express = require('express')
const app = express()

const path = require('path')


const hbs = require('express-handlebars');

<<<<<<< HEAD
app.set('views', path.join(__dirname, 'views/layouts'));
=======
app.set('views', path.join(__dirname, 'views'));
>>>>>>> 2eeed50 (Displayed all articles)
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
	extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
}))

app.use(express.static('public'));


<<<<<<< HEAD
app.get('/', (req, res) => {
  res.render('main.hbs', { title: 'My Web App' });
});




const mysql = require('mysql')
=======

const mysql = require('mysql2')
>>>>>>> 2eeed50 (Displayed all articles)

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))


<<<<<<< HEAD
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "MyStrongP@ssw0rd",
=======


var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "qwerty",
>>>>>>> 2eeed50 (Displayed all articles)
	database: "joga_mysql"
})

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected to joga_mysql db");
})

<<<<<<< HEAD
=======
app.get('/', (req, res) => {
	let query = "SELECT * FROM article";
	let articles = [];
	con.query(query, (err, result) => {
		if (err) throw err;
		articles = result
		res.render('index', {
			articles: articles
		})
	})
});



>>>>>>> 2eeed50 (Displayed all articles)
app.listen(3000, () => {
	console.log('App is started at http://localhost:3000');
});