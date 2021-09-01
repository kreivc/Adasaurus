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

				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="shortcut icon" href="./DINO.png" />

				<meta name="title" content="Adasaurus" />
				<meta
					name="description"
					content="Our main goal is to provide people a safe and trustworthy place where they can invest their money. Adasaurus holders can earn Ether rewards by holding a certain amount of the token. As a community developed token, we focus on the needs of our community members."
				/>

				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://i.ibb.co/xjWY3PV/DINO.png"
				/>
				<meta property="og:title" content="Adasaurus" />
				<meta
					property="og:description"
					content="Our main goal is to provide people a safe and trustworthy place where they can invest their money. PEE holders can earn Ether rewards by holding a certain amount of the token. As a community developed token, we focus on the needs of our community members."
				/>
				<meta
					property="og:image"
					content="https://i.ibb.co/xjWY3PV/DINO.png"
				/>
			</Head>

			<section
				className="w-full px-6 pb-0 antialiased bg-white"
				data-aos="fade-down"
			>
				<div className="mx-auto max-w-7xl">
					<Navbar isOpen={isOpen} toggle={toggle} />
					<ParticleBackground />
					<Hero />
				</div>
			</section>
			<About />
			<Tokenomics />
			<Timeline />
			<Howto />
			<Footer />
		</>
	);
}
