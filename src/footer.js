import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div class="bg-dark text-white footer-copyright text-center     mt-4">
                    2021 © Copyright :
                    all rights reserved<br></br>
                    Design & Developed By <a href="https://balaramgayen.blogspot.com/" target="blank">Balaram Gayen</a><br></br>
                    Made with <span>&hearts;</span>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Footer;