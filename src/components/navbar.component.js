//react import
import React from 'react';

//custom import
import { read } from '../localstorage/localStorage.handler';

//bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';

const NavbarComponent = () => {

    //read language from localstorage
    const country = read('country');

    return (

        <Navbar id="navbar" expand="md" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbar-content" />
            <Navbar.Collapse id="navbar-content">
                <Nav className="mr-auto text-center">
                    <Nav.Link href={`/news/${country}/general`}><i className="fas fa-globe"></i> General</Nav.Link>

                    <Dropdown.Divider />

                    <Nav.Link href={`/news/${country}/science`}><i className="fas fa-flask"></i> Science</Nav.Link>

                    <Dropdown.Divider />

                    <Nav.Link href={`/news/${country}/health`}><i className="fas fa-heartbeat"></i> Health</Nav.Link>

                    <Dropdown.Divider />

                    <Nav.Link href={`/news/${country}/technology`}><i className="fas fa-robot"></i> Technology</Nav.Link>

                    <Dropdown.Divider />

                    <Nav.Link href={`/news/${country}/sports`}><i className="far fa-futbol"></i> Sports</Nav.Link>

                    <Dropdown.Divider />
                    
                    <Nav.Link href={`/news/${country}/business`}><i className="fas fa-chart-line"></i> Business</Nav.Link>

                    <Dropdown.Divider />
                    
                    <Nav.Link href={`/news/${country}/entertainment`}><i className="fas fa-gamepad"></i> Entertainment</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;