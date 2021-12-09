import React from 'react';
import '../Styles/Navbar.css';
import logo from '../Images/Logo.svg';
import Button from './Button';

function Navbar() {
	return (
		<div className="navbar">
			<img src={logo} alt="LOGO"></img>
			<ul className="navbar-list">
				<li>
					<a href="/" style={{ color: 'black', borderBottom: 'solid 4px #9E99FF' }}>
						Home
					</a>
				</li>
				<li>
					<a href="/">Freatures</a>
				</li>
				<li>
					<a href="/">Pricing</a>
				</li>
				<li>
					<a href="/">Blog</a>
				</li>
				<li>
					<a href="/">Contact</a>
				</li>
			</ul>
			<div className="user">
				<Button text="Log In" />
				<Button text="Get Started" filled="true" />
			</div>
		</div>
	);
}

export default Navbar;
