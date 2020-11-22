import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Details from './details';
import Home from './home';
import Navbar from './navbar';
import Popular from './popular';
import Search from './search';
import Upcoming from './upcoming';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Navbar/>
        <switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/details/:id' component={Details}></Route>
          <Route path='/search/:term' component={Search}></Route>
          <Route path='/upcoming' component={Upcoming}></Route>
          <Route path='/popular' component={Popular}></Route>
        </switch>
      </React.Fragment>
     );
  }
}
 
export default App;