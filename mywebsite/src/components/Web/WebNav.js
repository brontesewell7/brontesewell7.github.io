import { Nav, Navbar,} from 'react-bootstrap'
import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

const WebNav = () =>  {
        return (
            <nav id="wecome-navbar">

                    
                    <Navbar bg="none" expand="lg" className="navbar-welcome-page fixed-top navbar-expand-sm">
                    <Navbar.Brand className="navbar-brand" href="/">Bronte Sewell</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link  className="nav-links" href="/">HOME</Nav.Link>
                        <Nav.Link className="nav-links" href='#section1'>ABOUT</Nav.Link>
                        <Nav.Link  className="nav-links" href='#section2'>SERVICES</Nav.Link>
                        <Nav.Link  className="nav-links" href="/signup-user">PORTFOLIO</Nav.Link>
                        <Nav.Link  className="nav-links" href="/contact-us">CONTACT ME</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
       
             </nav>

             
        );
    }

export default WebNav;