import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Forms from './forms/Index';

function Header() {
    return (
        <Router>
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li className="nav-link px-2 link-secondary"><Link to = "/">Home</Link></li>
                    <li className="nav-link px-2 link-dark"><Link to = "/forms">Forms</Link></li>
                    <li className="nav-link px-2 link-dark"><Link to = "/about">About</Link></li>
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

