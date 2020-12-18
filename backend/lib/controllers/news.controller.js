const axios = require('axios');
require('dotenv').config();

exports.getNews = async (req, res) => {
    
    const params = {
        newsApiKey: process.env.NEWS_API_KEY,
        country: req.params.country,
        category: req.params.category,
        pageSize: 100
    };

    const articlesResponse = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${params.newsApiKey}&country=${params.country}&category=${params.category}&pageSize=${params.pageSize}`);
    const articles = articlesResponse.data.status === 'ok' ? articlesResponse.data.articles : articlesResponse.data.error.message;

    res.json(articles);
};