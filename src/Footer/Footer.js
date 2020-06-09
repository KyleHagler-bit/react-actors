import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <p style={{backgroundColor: 'black',color:'white',position: 'fixed', left: 0,bottom: 0,width: '100%',textAlign: 'center', height:'10%'}}>&copy; React Actors</p>
            </div>
        );
    }
}


export default Footer;