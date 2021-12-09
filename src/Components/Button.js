import React from 'react';
import '../Styles/Button.css';

function Button({ text, filled }) {
	return <button className={filled ? 'btn-filled' : 'btn-empty'}>{text}</button>;
}

export default Button;
