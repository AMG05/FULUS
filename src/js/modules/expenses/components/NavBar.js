import { h } from 'preact';
import { Router, Link } from 'preact-router';
import Match from 'preact-router/match';

const NavBar = () => (
        <div className="outer-container">
            <div className="navbar-container">
                <div className="left-navbar">
                    <img className="logo" src="/src\img\logo-png.png" width="127" />
                    <div className="link-items">
                        <Link classname="hello" activeClassName="active" href="/">Home</Link>
                        <Link activeClassName="active" href="/expenses">Add expenses</Link>
                        <Link activeClassName="active" href="/budget">Budget</Link>
                    </div>
                </div>
            </div>
        </div>
);

export default NavBar;