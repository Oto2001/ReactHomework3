import React from 'react';
import '../Styles/Footer.css';
import FacebookLogo from '../Images/FacebookLogo.svg';
import TwitterLogo from '../Images/TwitterLogo.svg';
import LinkedinLogo from '../Images/LinkedinLogo.svg';
import Logo from '../Images/Logo.svg';

import ContactBanner from './ContactBanner';

function Footer() {
	return (
		<footer>
			<ContactBanner />
			<div className="links">
				<div className="col-1">
					<h3>Product</h3>
					<ul>
						<li>
							<a href="/">How it works</a>
						</li>
						<li>
							<a href="/">Features</a>
						</li>
						<li>
							<a href="/">Pricing</a>
						</li>
						<li>
							<a href="/">FAQ</a>
						</li>
						<li>
							<a href="/">Download</a>
						</li>
					</ul>
				</div>

				<div className="col-2">
					<h3>Company</h3>
					<ul>
						<li>
							<a href="/">About</a>
						</li>
						<li>
							<a href="/">Blog</a>
						</li>
						<li>
							<a href="/">Partnership</a>
						</li>
						<li>
							<a href="/">Terms of use</a>
						</li>
						<li>
							<a href="/">Privacy policy</a>
						</li>
					</ul>
				</div>
				<div className="col-3">
					<h3>Support</h3>
					<ul>
						<li>
							<a href="/">Help center</a>
						</li>
						<li>
							<a href="/">Contact us</a>
						</li>
					</ul>
				</div>
				<div className="col-4">
					<h3>Get in touch</h3>
					<ul>
						<li>
							<a href="/">
								<img className="facebook-img" src={FacebookLogo} alt="Facebook" />
							</a>
						</li>
						<li>
							<a href="/">
								<img className="twitter-img" src={TwitterLogo} alt="Twitter" />
							</a>
						</li>
						<li>
							<a href="/">
								<img className="linkedin-img" src={LinkedinLogo} alt="Linkedin" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<img className="bottom-logo" src={Logo} alt="LOGO" />
			<p className="bottom-rights">© Fusely 2021. All rights reserved.</p>
		</footer>
	);
}

export default Footer;
