import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <Link class="navbar-brand text-white" to="/"><h2><b>Movie App</b></h2></Link>
                    <div>
                        <div class="navbar-nav">
                        <Link to="/" className="nav-link text-white">Home</Link>
                        <Link className="nav-link text-white" to="/upcoming">Latest Movies</Link>
                        <Link className="nav-link text-white" to="/popular">Popular Movies</Link>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
         );
    }
}
 
export default Navbar;