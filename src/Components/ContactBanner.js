import React from 'react';
import Button from './Button';
import '../Styles/ContactBanner.css';

function ContactBanner() {
	return (
		<div className="contact-banner">
			<h2>Intrested in getting fusely?</h2>
			<Button text="Let's talk" filled="true" />
		</div>
	);
}

export default ContactBanner;
