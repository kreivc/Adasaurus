import React from "react";

export default function Timeline() {
	return (
		<section
			className="relative py-16 bg-white min-w-screen animation-fade animation-delay"
			id="timeline"
		>
			<div className="container px-8 mx-auto sm:px-12 xl:px-5">
				<p
					className="text-xs font-bold text-left text-[#293cc7] uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold"
					data-aos="zoom-in"
				>
					Our Plan For Future?
				</p>
				<h3
					className="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-10 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center"
					data-aos="zoom-out"
				>
					Timeline For Adasaurus Project
				</h3>
				<div
					className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
					data-aos="flip-up"
				>
					<h3 className="text-lg font-bold text-[#01bf71] sm:text-xl md:text-2xl">
						Day 1
					</h3>
					<ul class="list-none md:list-disc mt-2 text-base text-gray-600 sm:text-lg md:text-base">
						<li>
							Raids and pinned messages in several TG groups will be organised
							as we dubble down on our marketing efforts.{" "}
						</li>
						<li>
							CMS post and upvotes will be launched to increase our visibility.
						</li>
						<li>Several major listings will be applied</li>
					</ul>
					{/* <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
						* Raids and pinned messages in several TG groups will be organised
						as we dubble down on our marketing efforts. 
					</p>
					<p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
						* CMS post and upvotes will be launched to increase our visibility.
					</p>
					<p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
						* Several major listings will be applied
					</p> */}
				</div>
				<div
					className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
					data-aos="flip-up"
				>
					<h3 className="text-lg font-bold text-[#01bf71] sm:text-xl md:text-2xl">
						Day 2
					</h3>
					<ul class="list-none md:list-disc mt-2 text-base text-gray-600 sm:text-lg md:text-base">
						<li>Confirmation and execution of all major listings.</li>
						<li>
							To continue our marketing effects, we will deploy our Twitter and
							FB campaign.
						</li>
					</ul>
				</div>
				<div
					className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
					data-aos="flip-up"
				>
					<h3 className="text-lg font-bold text-[#01bf71] sm:text-xl md:text-2xl">
						Day 3
					</h3>
					<ul class="list-none md:list-disc mt-2 text-base text-gray-600 sm:text-lg md:text-base">
						<li>Social Media campaign expansion.</li>
						<li>Developping several promo groups on Discord</li>
					</ul>
				</div>
				<div
					className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
					data-aos="flip-up"
				>
					<h3 className="text-lg font-bold text-[#01bf71] sm:text-xl md:text-2xl">
						What We Do Next??
					</h3>
					<p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
						To be Announced! Just reminder, something big like a dino will
						coming!
					</p>
				</div>
			</div>
		</section>
	);
}
