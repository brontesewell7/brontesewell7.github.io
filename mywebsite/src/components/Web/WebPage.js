
import {connect} from 'react-redux'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import WebNav from './WebNav'

class WebPage extends Component {
 



    render() {

        return (
            <div >
                <WebNav/>
                <h2>Hello</h2>
                <button type="button" class="btn btn-outline-dark" onClick={()=> this.props.history.push('/')}>Back to Welcome Page</button>

            </div>
        );
    }
}

export default WebPage;


 
  

