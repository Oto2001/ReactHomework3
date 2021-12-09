import React from 'react';
import '../Styles/Partners.css';
import binator from '../Images/binator logo.svg';
import buyme from '../Images/buyme logo.svg';
import loogipsum from '../Images/loogipsum logo.svg';
import umbrela from '../Images/umbrella logo.svg';
import square from '../Images/square logo.svg';

function Partners() {
	return (
		<div className="partners">
			<img src={binator} alt="binator" />
			<img src={buyme} alt="buyme" />
			<img src={loogipsum} alt="binator" />
			<img src={umbrela} alt="binator" />
			<img src={square} alt="binator" />
		</div>
	);
}

export default Partners;
