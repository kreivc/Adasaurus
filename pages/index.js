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
			</Head>

			<Navbar isOpen={isOpen} toggle={toggle} />
			<ParticleBackground />
			<Hero />
			<About />
			<Tokenomics />
			<Timeline />
			<Howto />
			<Footer />
		</>
	);
}
