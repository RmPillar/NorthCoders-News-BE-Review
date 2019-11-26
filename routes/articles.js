const articlesRouter = require('express').Router();
const { getArticleById } = require('../controllers/articles');

articlesRouter.get('/:article_id', getArticleById);

module.exports = articlesRouter;
