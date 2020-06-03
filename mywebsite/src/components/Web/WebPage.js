
import {connect} from 'react-redux'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import WebNav from './WebNav'
import ScrollableAnchor from 'react-scrollable-anchor'
import {Col, Button} from 'react-bootstrap'
class WebPage extends Component {
 



    render() {

        return (
            <div >
                <WebNav/>
                <img id="web-top-image" src="https://images.unsplash.com/photo-1527691894785-52e19fab8bbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1836&q=80"/>
                <div id="quote-over-images"><h3 className="quote-home-image">Full Stack Web Developer and Designer</h3>
                <a href='#section1' id="button-image-home">Learn More</a></div>

<br></br>
<br></br>
<br></br>
                
                <ScrollableAnchor id={'section1'}>
                <div class="container">
                    <div class="row">
                    <Col lg={5} className="fancy">
                        

                   
                        <h3>Languages</h3>
                        <ul>
                            <li>Javascript</li>
                            <li>Ruby</li>
                            <li>Pyhton</li>
                            <li>PHP</li>
                            <li>HTML/CSS</li>
                        </ul>
                        <h3>Frameworks + Other</h3>
                        <ul>
                            <li>Wordpress</li>
                            <li>React</li>
                            <li>Ruby on Rails</li>
                            <li>React Native</li>
                            <li>Redux</li>
                            <li>NodeJS/Express</li>
                            <li>GraphQL/Apollo</li>
                            <li>Typescript</li>
                            <li>SQL</li>
                            <li>MongoDB</li>
                            <li>Active Record</li>
                            <li>Bootstrap/Semantic UI</li>
                            <li>Adobe Photoshop</li>
                            <li>Algorithms and Data Structures</li>
                            <li>API's</li>
                            <li>And More...</li>
                        </ul>
                       
                    </Col>

                    <Col lg={7}>
                        <h2 id="about-title">About Me</h2>
                        <br/>
                        <p>Firstly some background so that you understand where I am coming from.  I am an American 
                            citizen and have been privileged to have also lived abroad for many years.  I graduated 
                            from the top all-girls school in New Zealand and spent 2 years as a professional Equestrian
                            rider, competing internationally throughout Europe.  I was on track for the Olympics 
                            until I broke my Tibia in early 2019. <br/> <br/> As a result, I decided to follow another passion of 
                            mine, programming and completed Flatiron’s Full-Stack Engineering Bootcamp in San Francisco. </p>

                            <p>Since then I have had many clients building Full-Stack Web Apps, Mobile Apps, Wordpress Websites
                                and more. Examples are below.</p>

                                <Button variant="secondary">Contact Me</Button> <Button variant="secondary">My Portfolio</Button>
                        </Col>
                    </div>
                </div>
                </ScrollableAnchor>
<br></br>
<br></br>
<br></br>
<br></br>

                <div class="container">
                    <div class="row">
                    <Col lg={6}>
                       <img />
                    </Col>

                    <Col lg={6}>
                        <h2 id="about-title">Currently Working on</h2>
                        <br/>
                        <p>Firstly some background so that you understand where I am coming from.  I am an American 
                            citizen and have been privileged to have also lived abroad for many years.  I graduated 
                            from the top all-girls school in New Zealand and spent 2 years as a professional Equestrian
                            rider, competing internationally throughout Europe.  I was on track for the Olympics 
                            until I broke my Tibia in early 2019. <br/> <br/> As a result, I decided to follow another passion of 
                            mine, programming and completed Flatiron’s Full-Stack Engineering Bootcamp in San Francisco. </p>

                            <p>Since then I have had many clients building Full-Stack Web Apps, Mobile Apps, Wordpress Websites
                                and more. Examples are below.</p>

                                <Button variant="secondary">Contact Me</Button> <Button variant="secondary">My Portfolio</Button>
                        </Col>
                    </div>
                </div>




                <button style={{marginLeft: '42%'}} type="button" class="btn btn-outline-dark" onClick={()=> this.props.history.push('/')}>Back to Welcome Page</button>
            </div>
        );
    }
}

export default WebPage;


 
  

