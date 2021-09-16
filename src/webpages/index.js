import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

  import Home from './home';
  import User from './user';
  import Table from './table';

const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/user/:id" component={User} />
            <Route path="/table" component={Table} />
        </Router>
    );
};

export default Webpages;
