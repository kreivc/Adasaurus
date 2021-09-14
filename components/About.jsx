import React from "react";
import { FaTelegram, FaTwitter } from "react-icons/fa";

export default function About() {
	return (
		<section
			className="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32"
			id="about"
		>
			<div className="relative max-w-3xl px-8 text-center text-white auto lg:px-0">
				<div className="flex flex-col w-full md:flex-row">
					<div className="flex justify-between" data-aos="fade-right">
						<h1 className="mx-8 relative flex flex-col text-6xl font-extrabold text-left text-black">
							<span className="text-[#293cc7]">Adasaurus</span>
							<span>Why is</span>
							<span>That?</span>
						</h1>
					</div>
					<div className="relative top-0 right-0 h-96 w-96 mt-12 md:-mt-16 md:absolute md:h-96">
						<img
							src="./DINO.png"
							alt="dino2"
							width="300px"
							className="object-cover mt-3 ml-7 h-80 lg:h-96"
							data-aos="fade-left"
						/>
					</div>
				</div>

				<div className="my-16 border-b border-gray-300 lg:my-24"></div>

				<h2
					className="text-left text-gray-500 xl:text-xl mx-12"
					data-aos="slide-up"
				>
					We have a full marketing and visibility campgain mapped out of which
					we will make investements pre launch and boost our efforts with the
					money that will be received in the marketing wallet for post launch
					investments.
				</h2>
				<div
					className="flex mx-12 mt-6 text-[#3bc98d] items-center space-x-0 md:space-x-5 md:justify-center flex-wrap"
					data-aos="fade-right"
				>
					<h2 className="text-2xl font-bold mb-3 md:mb-0">
						Join Our Community
					</h2>
					<div className="flex items-start space-x-5">
						<button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center space-x-2 transition duration-500 ease-in-out">
							<FaTelegram />
							<span>Telegram</span>
						</button>
						<button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center space-x-2 transition duration-500 ease-in-out">
							<FaTwitter />
							<span>Twitter</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
