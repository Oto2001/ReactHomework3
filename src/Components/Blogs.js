import React from 'react';
import '../Styles/Blogs.css';
import Button from './Button';
import BlogTile from './BlogTile';
import BlogImage1 from '../Images/BlogImage1.png';
import BlogImage2 from '../Images/BlogImage2.png';
import BlogImage3 from '../Images/BlogImage3.png';

function Blogs() {
	return (
		<div className="blog">
			<div className="blog-heading">
				<h2>From our blog</h2>
				<Button text="View all" />
			</div>
			<div className="blog-content">
				<BlogTile
					img={BlogImage1}
					title="What’s Fusely?"
					text='A brand new company, created for everyone. This article will help you understand what "fusely" stands for.'
				/>
				<BlogTile
					img={BlogImage2}
					title="What’s Fusely?"
					text='A brand new company, created for everyone. This article will help you understand what "fusely" stands for.'
				/>
				<BlogTile
					img={BlogImage3}
					title="What’s Fusely?"
					text='A brand new company, created for everyone. This article will help you understand what "fusely" stands for.'
				/>
			</div>
		</div>
	);
}

export default Blogs;
