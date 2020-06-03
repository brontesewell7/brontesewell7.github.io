
import {connect} from 'react-redux'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import WebNav from './WebNav'
import ScrollableAnchor from 'react-scrollable-anchor'
import {Col, Button} from 'react-bootstrap'
import photoparenting from '../../photoparenting.jpeg'
import {SocialMediaIconsReact} from 'social-media-icons-react';
import ReactContactForm from 'react-mail-form';

class WebPage extends Component {
 



    render() {

        return (
            <div >
                <WebNav/>
                <img id="web-top-image" src="https://images.unsplash.com/photo-1527691894785-52e19fab8bbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1836&q=80"/>
                <div id="quote-over-images"><h3 className="quote-home-image">Full Stack Web Developer and Designer</h3>
                <a href='#section1' id="button-image-home">Learn More</a>
                <br></br>
                <br></br>
                <span className="social-icon-web-1"/>
                <SocialMediaIconsReact borderColor="rgba(245,241,241,0.25)" borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(118,114,114,1)" backgroundColor="#dbdbdb" iconSize="8" roundness="20%" url="https://some-website.com/my-social-media-url" size="40" />
                <span className="social-icon-web"/>
                <SocialMediaIconsReact borderColor="rgba(245,241,241,0.25)" borderWidth="5" borderStyle="solid" icon="mail" iconColor="rgba(118,114,114,1)" backgroundColor="#dbdbdb" iconSize="8" roundness="20%" url="https://some-website.com/my-social-media-url" size="40" />
                <span className="social-icon-web"/>
                <SocialMediaIconsReact borderColor="rgba(245,241,241,0.25)" borderWidth="5" borderStyle="solid" icon="youtube" iconColor="rgba(118,114,114,1)" backgroundColor="#dbdbdb" iconSize="8" roundness="20%" url="https://some-website.com/my-social-media-url" size="40" />
                <span className="social-icon-web"/>
                <SocialMediaIconsReact borderColor="rgba(245,241,241,0.25)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(118,114,114,1)" backgroundColor="#dbdbdb" iconSize="8" roundness="20%" url="https://some-website.com/my-social-media-url" size="40" />
                <span className="social-icon-web"/>
                <SocialMediaIconsReact borderColor="rgba(245,241,241,0.25)" borderWidth="5" borderStyle="solid" icon="instagram" iconColor="rgba(118,114,114,1)" backgroundColor="#dbdbdb" iconSize="8" roundness="20%" url="https://some-website.com/my-social-media-url" size="40" />
                </div>     
<div className="about-div">
<div className="about-blur">
    
    <br></br>
<br></br>
<br></br>
                
                <ScrollableAnchor id={'section1'}>
                <div class="container">
                    <div class="row">
                    <Col lg={5} className="fancy">
                        

                   
                        <h4 className="skills-title">Languages</h4>
                        <ul>
                            <li>Javascript</li>
                            <li>Ruby</li>
                            <li>Pyhton</li>
                            <li>PHP</li>
                            <li>HTML/CSS</li>
                        </ul>
                        <h4 className="skills-title">Frameworks + Other</h4>
                        <ul>
                            <li>Wordpress</li>
                            <li>React</li>
                            <li>Ruby on Rails</li>
                            <li>React Native</li>
                            <li>Redux</li>
                            <li>NodeJS/Express</li>
                            <li>GraphQL/Apollo</li>
                            <li>Typescript</li>
                            <li>SQL + MongoDB</li>
                            <li>Active Record</li>
                            <li>Bootstrap/Semantic UI</li>
                            <li>Adobe Photoshop</li>
                            <li>Algorithms + Data Structures</li>
                            <li>API's</li>
                            <li>And More...</li>
                        </ul>
                       
                    </Col>

                    <Col lg={6} className="about">
                        <h2 id="about-title">About Me</h2>
                        <br/>
                        <p id="about-text">Firstly some background so that you understand where I am coming from.  I am an American 
                            citizen and have been privileged to have also lived abroad for many years.  I graduated 
                            from the top all-girls school in New Zealand and spent 2 years as a professional Equestrian
                            rider, competing internationally throughout Europe.  I was on track for the Olympics 
                            until I broke my Tibia in early 2019. <br/> <br/> As a result, I decided to follow another passion of 
                            mine, programming and completed Flatiron’s Full-Stack Engineering Bootcamp in San Francisco.
                            <br/> <br/> Since then I have had many clients building Full-Stack Web Apps, Mobile Apps, Wordpress Websites
                                and more. Examples are below.</p>
                            
                                <Button variant="secondary">Contact Me</Button> <Button variant="secondary">My Portfolio</Button>
                        </Col>
                    </div>
                </div>
                </ScrollableAnchor>
<br></br>
<br></br>
                </div>
                </div>
                <div className="current-work-div">
<br></br>
<br></br>

                <div class="container current-work">
                    <div class="row">

                    <Col lg={6}>
                        <h2 id="about-title">Currently Working on</h2>
                        <h4><i>PG Parenting</i></h4>
                        <br/>
                        <p id="text-current-p">PG Parenting is a full-stack 
                            design for a company launching a parenting advisory website. To meet the 
                            design specifications I created an algorithm for parents to track and report
                             their children's growth and progress. The business logic is complex because 
                             there are several different Age groups and each have many content categories,
                              courses and tips.  The site will be launched once I have finished creating 
                            chat rooms with Action Cables to build a parenting community.  
                            
                            <br/> <br/>
                            The curriculum was created by Stephanie and Mark Sewell who have been in professional
                            parenting advisors for the past 30 years and have led parenting courses World
                            Wide with great success.
                            </p>
                        </Col>
                        <Col lg={6}>
                            <img id="parenting-image" src={photoparenting}/>
                        </Col>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                </div>
                <div className="about-div">
                <div className="about-blur">
                <br></br>
                <br></br>
                {/* <ScrollableAnchor id={'section2'}> </ScrollableAnchor> */}
                <h2 id="services-title">Services</h2>

<br></br>
<div class="container">
                    <div class="row">
                        <div class="col-lg">
                        <h4 id="services-subtitle"> <i class="fab fa-wordpress"></i> Wordpress Development</h4>
                        </div>
                        <div class="col-lg">
                        <h4 id="services-subtitle"> <i class="fas fa-code"></i> Full Stack Web Application</h4>
                        </div>
                        <div class="col-lg">
                                 <h4 id="services-subtitle"><i class="fas fa-wrench"></i> Web Maintenance</h4>
                                 </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg">
                        <h4 id="services-subtitle"><i class="fas fa-mobile-alt"></i> Mobile Application</h4>
                        </div>
                        <div class="col-lg">
                                 <h4 id="services-subtitle"><i class="fab fa-adobe"></i>Web Design/Wireframes</h4>
                                
                        </div>
                        <div class="col-lg">
                        <h4 id="services-subtitle"><i class="fas fa-camera"></i>Photography</h4>
                       
                        </div>
                    </div>
                </div>
                </div>
                <br></br>
                <br></br>
                </div>
                <br></br>
                <br></br>
                <div class="container">
                    <div class="row">
                        <div class="col-lg">
                            <div id="send-gmail-contact"> 
                                <h5 className="contact-options">Email me on your Gmail:</h5>
                            < ReactContactForm to="jumpinggirlnz@icloud.com" />
                            </div>                    
                        </div>
                        <div class="col-lg">
                        <h3 id="contact-title">Contact Me</h3>
                        <br/>
                        <h4 className="contact-info">Email: brontsewell7@gmail.com</h4>
                        <h4 className="contact-info">Location: San Francisco, California</h4>
                        <h4 className="contact-info">Phone Number: +1 (818)877-8154</h4>
                        </div>
                    </div>
                </div>

                <br></br>
                <br></br>
                <br></br>
                <button style={{marginLeft: '42%'}} type="button" class="btn btn-outline-dark" onClick={()=> this.props.history.push('/')}>Back to Welcome Page</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        );
    }
}

export default WebPage;


 
  

