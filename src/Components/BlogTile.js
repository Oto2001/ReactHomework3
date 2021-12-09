import React from 'react';
import '../Styles/BlogTile.css';

function BlogTile({ img, title, text }) {
	return (
		<section className="blog-tile">
			<img src={img} alt="blog-img" />
			<h3>{title}</h3>
			<p>{text}</p>
			<a href="/">Read More</a>
		</section>
	);
}

export default BlogTile;
