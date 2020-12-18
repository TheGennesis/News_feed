import axios from 'axios';

const NewsApi = axios.create({ baseURL: 'http://localhost:5000/news/' });

export {
    NewsApi
}