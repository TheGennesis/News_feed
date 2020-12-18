//react import
import React, { useState } from 'react';
import uuid from 'react-uuid';
import { useParams } from 'react-router-dom';
import { useParamsAsState } from 'use-route-as-state';
import { useAlert } from 'react-alert';

//custom import
import { write } from '../../localstorage/localStorage.handler';
import countries from '../../localstorage/countries';

//bootstrap components
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//custom components
import ConfigsHeader from './configsHeader.component';
import CountryFlag from './countryFlag.component';


const ConfigsBar = () => {
    
    const alert = useAlert();

    //get the category param from the url
    const { category } = useParams();
    
    //param in the url that will change with user selection
    const [{ country }, updateRouteParams] = useParamsAsState();
    
    //state that hide or show all the country choices
    const [hiddenChoices, setHiddenChoices] = useState(true);
    const toggleHiddenChoices = () => {
        setHiddenChoices(!hiddenChoices);
    };

    //initial number of country choices that user can see
    const [itemsToShow, setItemsToShow] = useState(12);

    //state that hides or shows the remaining country choices
    const [hiddenRemainingChoices, setHiddenRemainingChoices] = useState(false);
    const toggleShowItems = () => {
        setHiddenRemainingChoices(!hiddenRemainingChoices);
        setItemsToShow(hiddenRemainingChoices ? 12 : Object.keys(countries).length);
    };
    
    //state related to every radio button
    const [selected, setSelected] = useState('');
    const handleSelected = (lang) => {
        setSelected(lang);
    };
    
    //function that is called after the user makes a choice by clicking a specific button
    const handleSubmit = () => {
        if (!selected.length) { alert.error('Error: No selected Country') }
        else {
            write('country', selected);
            updateRouteParams(selected);
            window.location.replace(`http://localhost:3000/news/${selected}/${category}`);
        }
    };

    return (
        <Container className="config-container" fluid>
            <br />
            <ConfigsHeader 
                country={country}
                state={hiddenChoices}
                setState={toggleHiddenChoices}
            />
            {hiddenChoices ? "" : 
                <>
                <hr className="mb-4 divider"/>
                <h5 className="text-center mb-3">Here you can choose the Country of which you want to read the articles: </h5>
                <Form>
                    <Row>
                        {Object.values(countries).slice(0, itemsToShow).map(item => {
                            if (item !== country) {
                                return (
                                    <Col md="3" key={uuid()} className="my-1">
                                        <Form.Check key={uuid()}>
                                            <Form.Check.Input type="radio" name="lang" checked={selected === item} value={selected} onChange={() => handleSelected(item)}/>
                                            <Form.Check.Label>
                                                <CountryFlag countryCode={item}/>
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </Col> 
                                );
                            }
                            else return ""
                        })}
                    </Row>
                </Form>
                <Row className="text-center">
                    <Col>
                        <Button className="config-btn my-3 mx-2" onClick={toggleShowItems}>{!hiddenRemainingChoices ? "Show more" : "Hide"}</Button>
                        <Button className="config-btn my-3 mx-2" onClick={handleSubmit}>Confirm your choice</Button>
                    </Col>
                </Row>
            </>
            }
        </Container>
    );
};

export default ConfigsBar;