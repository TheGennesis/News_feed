//react import 
import React from 'react';

//bootstrap components
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NewsCard = ({ sourceName, date, title, urlImage, description, redirectUrl }) => {
    
    return (
        <Card className="news-card">
            <Card.Header className="header-card">
                <h4 className="title">{sourceName}</h4>
                <small>{date}</small>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Row>
                    <Col md="3" className="my-auto">
                        <img src={urlImage} className="my-2 image-card" alt="Not available."/>
                    </Col>
                    
                    <Col md="8" className="my-auto">
                        {!description || !description.length ? 'Not available.' : description}
                    </Col>  
                </Row>    
            </Card.Body> 
            <Card.Footer className="footer-card">
                <a href={redirectUrl} className="news-link">{redirectUrl}</a>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;