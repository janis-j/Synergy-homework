import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Forms from './forms/Index';

function Header() {
    return (
        <Router>
            <div class="container">
                <header class="d-flex justify-content-center py-3">
                <ul class="nav nav-pills">
                    <li class="nav-item"><Link to = "/">Home</Link></li>
                    <li class="nav-item"><Link to = "/forms">Forms</Link></li>
                    <li class="nav-item"><Link to = "/about">About</Link></li>
                </ul>
                </header>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/forms" component = {Forms} />
                <Route exact path = "/about" component = {About} />
            </div>
        </Router>

    );
}

export default Header;

