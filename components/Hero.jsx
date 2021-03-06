import React, { useState } from "react";
import { ArrowDownIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";
import { CopyToClipboard } from "react-copy-to-clipboard";
import useMobileDetect from "use-mobile-detect-hook";

export default function Hero() {
	const [copied, setCopied] = useState(false);
	const detectMobile = useMobileDetect();

	return (
		<div
			className="container max-w-lg px-4 pt-20 pb-32 mx-auto text-left md:max-w-none md:text-center"
			id="home"
			data-aos="fade-up"
		>
			<div className="flex flex-wrap relative w-full items-center flex-row mx-auto justify-center space-x-0 md:space-x-10">
				<img
					src="./DINO.png"
					alt="dino"
					width="300px"
					className="transform scale-x-[-1]"
				/>
				<h1
					className="text-4xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-left sm:leading-none md:text-6xl lg:text-6xl"
					data-aos="fade-up"
				>
					<span className="inline md:block">Adasaurus</span>
					<span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-[#01bf71] to-[#46e4a2] md:inline-block md:pb-3 pr-1">
						All my friends are dead <br />
						<span className="text-[#293cc7]">can I share my ADA</span> with you?
					</span>
				</h1>
			</div>
			<div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
				The only dinosaur that survived the apocalyptic event. Since then,
				Adasaurus roams the planet in search for a playmate to share his ADA
				with.
			</div>
			<div className="flex flex-col items-center mt-12 text-center">
				<span className="relative inline-flex w-full md:w-auto">
					<CopyToClipboard text="0x506fcd8b9f86c8c253a88f0656bc5d2927af8a59">
						<button
							type="button"
							className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-[#01bf71] border border-transparent rounded-full md:w-auto hover:bg-[#3bc98d] focus:outline-none transition duration-150 ease-in-out"
							onClick={() => setCopied(!copied)}
						>
							{detectMobile.isMobile()
								? "0x506fcd8b9f86c8c253a88f0656..."
								: "0x506fcd8b9f86c8c253a88f0656bc5d2927af8a59"}
						</button>
					</CopyToClipboard>
					<span className="absolute top-0 right-2 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-[#293cc7] rounded-full">
						{copied ? "Copied" : "Click to copy"}
					</span>
				</span>
				<Link to="about" smooth={true} duration={500} spy={true} exact="true">
					<ArrowDownIcon className="animate-bounce h-7 w-7 my-7 text-[#3bc98d] cursor-pointer" />
				</Link>
			</div>
		</div>
	);
}
