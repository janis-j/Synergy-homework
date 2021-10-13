import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Add from './Add';
import List from './List';

function Index() {
    return (
        <div>
            <Router>
                <div>
                    <Link to = "/forms" class="nav-link px-2 link-dark">List</Link>
                    <Link to = "/forms/add" class="nav-link px-2 link-dark">Add</Link>
                </div>
                <Route exact path = "/forms" component = {List} />
                <Route exact path = "/forms/add" component = {Add} />
            </Router>
        </div>
    );
}

export default Index;

