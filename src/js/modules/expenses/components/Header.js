import { h } from 'preact';

const Header = ({ }) => 
<header class="header">
    <div class="wrap">
        <div class="header__inner">
            <a class="header__link" aria-label="Home" href="/">
                <svg class="header__logo" src="src\img\logo.svg"></svg>
            </a>
            <nav aria-label="Main navigation" id="navigation" class="nav-primary js-toggle" data-toggle="js-toggle__nav">
                <ul class="nav-primary__list">
                    <li class="nav-primary_item">
                        <a class="nav-primary__link" href="/Transactions/">Transactions</a>
                    </li>
                    <li class="nav-primary_item">
                        <a class="nav-primary__link" href="/Expenses/">Add Expenses</a>
                    </li>
                    <li class="nav-primary_item">
                        <a class="nav-primary__link" href="/Budget/">Budget</a>
                    </li>
                </ul>
            </nav>
            <a class="btn btn--header" href="/login/">Login</a>
        </div>
    </div>

</header>;

export default Header;