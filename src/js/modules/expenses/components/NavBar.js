import { h } from 'preact';
import { Router, Link } from 'preact-router';
import Match from 'preact-router/match';

const NavBar = () => (
        <nav className="outer-container">
            <div className="wrap">
            <ul className="navbar-container">
                    <li className="left-navbar">
                  <h1><a href=""><img src ="" aria-hidden="true"></img><span>FULUS</span></a></h1>
                    </li>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/expenses">Add expenses</Link></li>
                        <li><Link href="/budget">Budget</Link></li>
                        <li><a className="btn-login" href="/login">Login</a></li>
            </ul>
            </div>
        </nav>
);

export default NavBar;

{/* <nav>
<ul>
  <li>
  <h1><a href="index.html"><span class="fa-solid fa-bolt" aria-hidden="true"></span><span>Anne McGinness</span></a></h1>
  </li>
  <li><a href="projects">Projects</a></li>
   <li><a href="about.html">About</a></li>
   <li><a href="#contact">Contact</a></li>
   <li><a href=""><span class="fa-brands fa-linkedin" aria-hidden="true"></span>  <span class="sr-only">LinkedIn</span></a></li>
   <li><a href=""><span class="fa-brands fa-github" aria-hidden="true"></span><span class="sr-only">Github</span></a></li>
    <li><a href="" class="button">CV</a></li>
  </ul>
  <nav></nav> */}