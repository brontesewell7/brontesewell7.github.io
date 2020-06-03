
import {connect} from 'react-redux'
import { Nav, Navbar,} from 'react-bootstrap'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import EquestrianNav from './EquestrianNav'
class EquestrianPage extends Component {
 



    render() {

        return (
            <div >

                <EquestrianNav />
            <h2>Hello</h2>
            <button type="button" class="btn btn-outline-dark" onClick={()=> this.props.history.push('/')}>Back to Welcome Page</button>

            </div>
        );
    }

}

export default EquestrianPage;


 
  

