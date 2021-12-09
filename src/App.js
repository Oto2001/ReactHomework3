import './Styles/Reset.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Partners from './Components/Partners';
import Section from './Components/Section';
import Plan from './Components/Plan';
import Blogs from './Components/Blogs';
import Footer from './Components/Footer';
import SectionImage1 from './Images/SectionImage1.svg';
import SectionImage2 from './Images/SectionImage2.svg';
import SectionImage3 from './Images/SectionImage3.svg';

function App() {
	return (
		<>
			<header>
				<Navbar />
				<Hero />
			</header>

			<main>
				<Partners />

				<Section
					heading="Detailed Examination"
					text="WA daily dataset to keep you up to date on subscription market trends and what's happening in your vertical."
					img={SectionImage1}
				/>
				<Section
					heading="Creative Solutions"
					text="Creativity is our second name. We're full of inventive ideas and we're happy to present them to you."
					img={SectionImage2}
					reversedOrder="true"
				/>
				<Section
					heading="Professional Team"
					text="Well, obviously, we're professionals. Don't hesitate - get to know us better."
					img={SectionImage3}
				/>

				<Plan />

				<Blogs />
			</main>

			<Footer />
		</>
	);
}

export default App;
