import React from 'react';
import heroImg from '../Images/Hero image.svg';
import '../Styles/Hero.css';
import Button from './Button';

function Hero() {
	return (
		<div className="hero">
			<div className="hero-content">
				<h1>Let’s get fusely together</h1>
				<p>
					Outcome-centered product that reduce churn, optimize pricing, and grow your
					subscription business end-to-end.
				</p>
				<Button text="Get Started" filled="true" />
			</div>
			<img src={heroImg} alt="Hero" className="hero-img" />
		</div>
	);
}

export default Hero;
