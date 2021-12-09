import React from 'react';
import '../Styles/PricingCard.css';
import Button from './Button';

function PricingCard({ name, price, feature1, feature2, feature3 }) {
	return (
		<div className={name === 'Premium' ? 'pricing-card premium-card' : 'pricing-card'}>
			<h4>{name}</h4>
			<h3>
				{price}
				<span className={name === 'Starter' ? 'display-none' : ''}>/month</span>
			</h3>
			<p>{feature1}</p>
			<p>{feature2}</p>
			<p>{feature3}</p>
			<Button text="Get Started" />
		</div>
	);
}

export default PricingCard;
