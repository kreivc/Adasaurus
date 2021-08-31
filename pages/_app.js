import "tailwindcss/tailwind.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			offset: 100,
			duration: 1000,
			easing: "ease",
		});
	}, []);
	return <Component {...pageProps} />;
}

export default MyApp;
