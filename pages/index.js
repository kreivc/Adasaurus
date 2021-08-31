import Head from "next/head";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBg";
import Hero from "../components/Hero";
import About from "../components/About";
import Tokenomics from "../components/Tokenomics";
import Timeline from "../components/Timeline";
import Howto from "../components/Howto";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Head>
				<title>Adasaurus</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>

				<meta name="title" content="Punk Ether Earn" />
				<meta
					name="description"
					content="Our main goal is to provide people a safe and trustworthy place where they can invest their money. PEE holders can earn Ether rewards by holding a certain amount of the token. As a community developed token, we focus on the needs of our community members."
				/>

				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://tokenkreivc.netlify.app/"
				/>
				<meta property="og:title" content="Punk Ether Earn" />
				<meta
					property="og:description"
					content="Our main goal is to provide people a safe and trustworthy place where they can invest their money. PEE holders can earn Ether rewards by holding a certain amount of the token. As a community developed token, we focus on the needs of our community members."
				/>
				<meta
					property="og:image"
					content="https://i.ibb.co/JkY1K6v/PeeOG.jpg"
				/>
			</Head>

			<Navbar isOpen={isOpen} toggle={toggle} />
			<ParticleBackground />
			<Hero />
			<About />
			{/* <Tokenomics />
			<Timeline />
			<Howto />
			<Footer /> */}
		</>
	);
}
