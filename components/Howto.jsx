import React from "react";

export default function Howto() {
	return (
		<section
			className="flex items-center justify-center py-16 bg-gray-100 w-screen"
			id="howto"
		>
			<div className="max-w-6xl px-8 mx-auto bg-gray-100 md:px-16 xl:px-10">
				<div className="flex flex-col items-center lg:flex-row justify-center">
					<div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
						<h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
							How To Buy
						</h2>
						<p className="my-6 text-lg text-gray-600">
							Don't forget to connect your wallet to pancake swap,
							then copy Adasaurus address on landing page above
							then swap! All you need just wait and enjoy
							cumulative gain + free ADA
						</p>
						<a
							href="https://pancakeswap.finance/"
							target="_blank"
							className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-[#01bf71] border border-transparent rounded-md shadow hover:bg-[#3bc98d] focus:outline-none md:py-4 md:text-lg md:px-10"
						>
							Buy Now!
						</a>
					</div>
					<div className=" w-full lg:w-1/4">
						<img src="./howtobuy-mockup.png" alt="mockup" />
					</div>
				</div>
			</div>
		</section>
	);
}
