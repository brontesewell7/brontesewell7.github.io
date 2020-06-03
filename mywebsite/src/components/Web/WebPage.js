
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

                <ScrollableAnchor id={'section1'}>
                <button type="button" class="btn btn-outline-dark" onClick={()=> this.props.history.push('/')}>Back to Welcome Page</button>
                </ScrollableAnchor>
            </div>
        );
    }
}

export default WebPage;


 
  

