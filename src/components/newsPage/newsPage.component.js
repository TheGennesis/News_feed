//react import
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import { useAlert } from 'react-alert';

//custom import
import { read, write } from '../../localstorage/localStorage.handler';
import API from '../../services/newsServices';

//bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//custom component
import LoadingSpinner from '../spinner.component';
import ConfigsBar from '../configsBar/configs.component';
import NewsCard from './newscard.component';


const NewsPage = () => {

    const alert = useAlert();

    //get the params in the url
    const { country, category } = useParams();
    
    //the articles returned from the API call or from localstorage (if they exist)
    const [articles, setArticles] = useState([]);

    //handle the response delay
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        
        //check if there is a key associated to this specific endpoint
        const cachedNews = read(`${country}_news_${category}`);

        //if there is, then set the articles
        if (cachedNews) { setArticles(cachedNews) }

        //otherwise call the API, set the articles and update the localstorage
        else {
            setIsLoading(true);

            API.getNews(country, category)
            .then(response => {

                if (response.data.error) { alert.error('Error: There are problems with our server.') }
                else { 
                    setArticles(response.data);
                    write(`${country}_news_${category}`, response.data); 
                }

                setIsLoading(false);
            })
            .catch(err => <h1>{err}</h1>);
        }
    }, [country, category, alert]);

    return (
        <Container fluid className="mt-4">
            <Row>
                <Col>
                    <ConfigsBar/>
                </Col>
            </Row>
            <Row>
                {isLoading ? (<Col md="12" className="text-center"><LoadingSpinner sentence="Loading..."/></Col>) : articles.map((item) => {
                    
                    const headingDate = new Date(item.publishedAt).toLocaleDateString('en-EN', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
                    
                    return (
                        <Col md="6" className="my-3" key={uuid()}>
                            <NewsCard 
                                sourceName={item.source.name}
                                date={headingDate}
                                title={item.title} 
                                urlImage={item.urlToImage} 
                                description={item.description} 
                                redirectUrl={item.url}    
                            /> 
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default NewsPage;