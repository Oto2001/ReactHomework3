import React from 'react';
import '../Styles/Section.css';
// import SectionImage1 from '../Images/SectionImage1.svg';

function Section({ heading, text, img, reversedOrder = 0 }) {
	return (
		<section className={reversedOrder ? 'section reversed' : 'section'}>
			<img src={img} alt="SectionImg" className="section-img" />
			<div className="section-content">
				<h2>{heading}</h2>
				<p>{text}</p>
				<a href="/" className="section-expand">
					Learn More
				</a>
			</div>
		</section>
	);
}

export default Section;
