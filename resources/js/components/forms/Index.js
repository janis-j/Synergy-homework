import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Add from './Add';
import List from './List';

function Index() {
    return (
        <div>
            <Router>
                <div>
                    <Link to = "/forms">List</Link> &nbsp;
                    <Link to = "/forms/add">Add</Link>
                    <Route exact path = "/forms" component = {List} />
                    <Route exact path = "/forms/add" component = {Add} />
                </div>
            </Router>
        </div>
    );
}

export default Index;

