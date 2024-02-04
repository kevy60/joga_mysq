const con = require('../utils/db');


const getALLArtticles = (req, res) => {
	let query = "SELECT * FROM article";
	let articles = [];
	con.query(query, (err, result) => {
		if (err) throw err;
		articles = result
		res.render('index', {
			articles: articles
		})
	})
};


const getArticBySlug = (req, res) => {
    let query = `
        SELECT article.*, author.name as author
        FROM article
        LEFT JOIN author ON article.author_id = author.id
        WHERE article.slug="${req.params.slug}"`;
    let article;
    con.query(query, (err, result) => {
        if (err) throw err;
        article = result[0];
        res.render('article', {
            article: article
        });
    });
};

const getArticleBYAuthor = ('/author/:author_id', (req, res) => {
    let authorQuery = `select name from author where id = ${req.params.author_id}`;
    let articlesQuery = `select * from article where author_id = ${req.params.author_id}`;
    let authorName;
    let authorArticles;
   // author's name
    con.query(authorQuery, (err, result) => {
        if (err) throw err;
        authorName = result[0].name;
        // author's articles
        con.query(articlesQuery, (err, result) => {
            if (err) throw err;
            authorArticles = result;
            res.render('author', {
                authorName: authorName,
                authorArticles: authorArticles
            });
        });
    });
});


module.exports = {
    getALLArtticles,
    getArticBySlug,
    getArticleBYAuthor
};