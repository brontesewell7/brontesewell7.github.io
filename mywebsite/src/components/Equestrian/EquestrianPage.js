
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
                <br/>
                <br/>
            <h2 style={{textAlign: 'center'}}>Coming Soon...</h2>
            <button style={{marginLeft: '42%'}} type="button" class="btn btn-outline-dark" onClick={()=> this.props.history.push('/')}>Back to Welcome Page</button>

            </div>
        );
    }

}

export default EquestrianPage;


 
  

