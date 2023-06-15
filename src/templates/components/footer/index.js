import { h } from 'preact';

const Footer = () => <footer class="footer">
    <div className="wrap">
    <div className="footer-container">
<div className="footer-left-container">
    <div>
        <p className="fulus">FULUS</p>
        <p className="slogan">Keeping track of your money</p>
    </div>

<div>
    <p className="small-print">2023 FULUS Budget App. All rights reserved</p>
</div>
</div>
<div className="footer-right-container">
    <img src="src\img\twitter-icon.svg" width="20" />
    <img src="src\img\linkedin-icon.svg" width="20" />
    <img src="src\img\git-icon.svg" width="20" />
    <img src="src\img\fb-icon.svg" width="20" />
</div>
</div>
</div>
</footer>;

export default Footer;