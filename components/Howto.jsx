import React from "react";
import Mockup from "../assets/howtobuy-mockup.png";

export default function Howto() {
	return (
		<section
			className="flex items-center justify-center py-16 bg-gray-100 w-screen"
			id="tokenomics"
		>
			<div className="max-w-6xl px-8 mx-auto bg-gray-100 md:px-16 xl:px-10">
				<div className="flex flex-col items-center lg:flex-row">
					<div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
						<h1 className="text-[#844421]">How To Buy</h1>
					</div>
					<div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
						<img className="object-contain" src={Mockup} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
}
