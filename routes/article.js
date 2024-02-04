const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');

router.get('/', articleController.getALLArtticles);
router.get('/article/:slug', articleController.getArticBySlug);

module.exports = router;