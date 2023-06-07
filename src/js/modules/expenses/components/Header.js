import { h } from 'preact';
import { Router, Link } from 'preact-router';

const Header = ({ }) =>

<header class="header">
    <div class="wrap">
        <div class="outer-container">
            <div class="navbar-container">
                <div class="left-navbar">
                    <img src="src\img\logo-png.png" width="127" />
                    <div className="link-items">
                    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">Expenses</Link>
      </li>
      <li>
        <Link to="/pricing">Pricing</Link>
      </li>
    </ul>
                    </div>
                </div>
                <div class="right-navbar">
                    <a className="btn btn-tertiary" href="/">Log in</a>
                    <a className="btn" href="/">Sign up</a>
                </div>
            </div>
        </div>
    </div>
    
</header>
;

export default Header;