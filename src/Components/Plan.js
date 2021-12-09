import React from 'react';
import '../Styles/Plan.css';
import PricingCard from './PricingCard';

function Plan() {
	return (
		<div className="plan">
			<h2 className="plan-heading">Choose your plan</h2>
			<div className="plan-cards">
				<PricingCard
					name="Starter"
					price="Free"
					feature1="Dashboard"
					feature2="Limited support"
					feature3="Forever free"
				/>
				<PricingCard
					name="Premium"
					price="$29"
					feature1="Dashboard & Analysis"
					feature2="Premium Support"
					feature3="Tracking Service"
				/>
				<PricingCard
					name="Enterprise"
					price="$49"
					feature1="All features in Premium"
					feature2="Realtime overview"
					feature3="Mobile app"
				/>
			</div>
		</div>
	);
}

export default Plan;
