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
                    <a id="Transactions" href="/transactions">Transactions</a>
                    <a id="Expenses" href="/expenses">Add expenses</a>
                    <a id="Budget" href="/budget">Budget</a>
                    </div>
                </div>
                <div class="right-navbar">
                    <a className="btn btn-tertiary" href="/">Log in</a>
                    <a className="btn" href="/">Sign up</a>
                </div>
            </div>
        </div>
    </div>
</header>;

export default Header;