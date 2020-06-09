import React, { Component } from 'react';

import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>Contact</h2>
                <input type='text' id ='first' placeholder='First Name' style={{width:'12%', marginRight:'1%'}}></input>
                <input type='text' id='last' placeholder='Last Name' style={{width:'12%', marginRight:'1%'}}></input>
                <input type='text' id='impression' placeholder='Your Best Impression' style={{width:'16%', marginRight:'1%'}}></input>
                <button type='button' >Join Us!</button>
                <p>Phone: 1-800-WE-REACT</p>
                <p>Email: info@ReactActors.com</p>
            </div>
        );
    }
}
//thought I need button click but I guess example just has text appearing as typed, not on button submit


export default Contact;