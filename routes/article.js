const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');

router.get('/', articleController.getALLArtticles);
router.get('/article/:slug', articleController.getArticBySlug);
router.get('/author/:author_id', articleController.getArticleBYAuthor);
module.exports = router;