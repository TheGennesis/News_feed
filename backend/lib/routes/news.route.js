const router = require('express').Router();
const NewsController = require('../controllers/news.controller');

router.get('/:country/:category', NewsController.getNews)

module.exports = router;