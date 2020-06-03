
import {connect} from 'react-redux'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import WebNav from './WebNav'
import ScrollableAnchor from 'react-scrollable-anchor'

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
                        <div class="col-lg fancy">
                        <h3>Languages</h3>
                        <ul>
                            <li>Javascript</li>
                            <li>Ruby</li>
                            <li>Pyhton</li>
                            <li>PHP</li>
                            <li>HTML/CSS</li>
                        </ul>
                        <h3>Frameworks</h3>
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
                        </div>
                        <div class="col-lg">
                        <h2 id="about-title">About</h2>
                        </div>
                    </div>
                </div>
                </ScrollableAnchor>




                <button style={{marginLeft: '42%'}} type="button" class="btn btn-outline-dark" onClick={()=> this.props.history.push('/')}>Back to Welcome Page</button>
            </div>
        );
    }
}

export default WebPage;


 
  

