const express = require('express')
const app = express()

const path = require('path')


const hbs = require('express-handlebars');

app.set('views', path.join(__dirname, 'views/layouts'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
	extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
}))




app.get('/', (req, res) => {
  res.render('main.hbs', { title: 'My Web App' });
});




const mysql = require('mysql')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))


var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "MyStrongP@ssw0rd",
	database: "joga_mysql"
})

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected to joga_mysql db");
})

app.listen(3000, () => {
	console.log('App is started at http://localhost:3000');
});