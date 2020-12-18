import { NewsApi } from './api';

const getNews = (country, category) => {
    return NewsApi.get(`${country}/${category}`)
};

// eslint-disable-next-line
export default {
    getNews
};