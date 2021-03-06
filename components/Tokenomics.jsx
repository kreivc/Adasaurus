import React from "react";
import Metamask from "./Metamask";

export default function Tokenomics() {
	return (
		<section
			className="flex items-center justify-center py-16 bg-gray-100 w-screen"
			id="tokenomics"
		>
			<div className="max-w-6xl px-8 mx-auto bg-gray-100 md:px-16 xl:px-10">
				<div className="flex flex-col items-center lg:flex-row">
					<div
						className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2"
						data-aos="zoom-in-right"
					>
						<h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
							Tokenomics
						</h2>
						<p className="my-6 text-lg text-gray-600">
							The token is constructed with a max transaction and a max wallet.
							This way everybody can get an honest share of all the riches the
							Adasaurus has to give.
						</p>
						<Metamask />
					</div>
					<div className="w-full lg:w-1/2" data-aos="zoom-in-left">
						<blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-white rounded-lg shadow">
							<div className="flex flex-col pr-8">
								<div className="relative pl-12">
									<svg
										className="absolute left-0 w-10 h-10 text-[#01bf71] fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 100 125"
									>
										<path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
									</svg>
									<p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
										2% Max transaction
									</p>
									{/* <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
										10.000.000.000 Total Supply
									</p> */}
									<p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
										3% Max wallet
									</p>
									<p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
										5% ADA Reward
									</p>
									<p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
										3% Liquidity Provider
									</p>
									<p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
										5% Marketing
									</p>
								</div>
							</div>
						</blockquote>
					</div>
				</div>
			</div>
		</section>
	);
}
