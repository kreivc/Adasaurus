import React from "react";
import { Link } from "react-scroll";

export default function Navbar({ isOpen, toggle }) {
	return (
		<section
			className="w-full px-6 pb-0 antialiased bg-white"
			data-aos="fade-down"
		>
			<div className="mx-auto max-w-7xl">
				<nav className="relative z-50 h-24 select-none">
					<div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2">
						<div className="flex items-center justify-start w-1/4 h-full pr-4">
							<a href="/" className="inline-block py-4 md:py-0">
								<span className="p-1 text-xl font-black leading-none text-gray-900">
									<span>Adasaurus</span>
									<span className="text-[#293cc7]">.</span>
								</span>
							</a>
						</div>

						{/*  */}
						<div
							className={`top-0 left-0 items-start w-full h-full p-4 text-sm bg-opacity-50 md:items-center md:w-3/4 lg:relative md:absolute lg:text-base md:bg-transparent md:p-0 md:flex flex fixed ${
								isOpen ? "flex fixed" : "hidden"
							}`}
						>
							<div className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row border-2 shadow-md md:border-0 md:shadow-none">
								<a
									href="#"
									className="inline-flex items-center w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden"
								>
									Adasaurus
									<span className="text-[#01bf71]">.</span>
								</a>
								<hr className="mx-2 md:hidden" />
								<div className="mt-1 flex items-start justify-center w-full space-x-0 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
									<Link
										to="home"
										smooth="true"
										duration={500}
										spy={true}
										exact="true"
										className="text-center inline-block w-full py-2 mx-0 font-medium text-gray-700 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center cursor-pointer focus:outline-none focus:border-b-2 focus:border-[#01bf71] hover:text-[#01bf71]"
										onClick={toggle}
									>
										Home
									</Link>
									<Link
										to="about"
										smooth="true"
										duration={500}
										spy={true}
										exact="true"
										className="text-center inline-block w-full py-2 mx-0 font-medium text-gray-700 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center cursor-pointer focus:outline-none focus:border-b-2 focus:border-[#01bf71] hover:text-[#01bf71]"
										onClick={toggle}
									>
										About
									</Link>
									<Link
										to="tokenomics"
										smooth="true"
										duration={500}
										spy={true}
										exact="true"
										className="text-center inline-block w-full py-2 mx-0 font-medium text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-[#01bf71] lg:mx-3 md:text-center cursor-pointer focus:outline-none focus:border-b-2 focus:border-[#01bf71]"
										onClick={toggle}
									>
										Tokenomics
									</Link>
									<Link
										to="timeline"
										smooth="true"
										duration={500}
										spy={true}
										exact="true"
										className="text-center inline-block w-full py-2 mx-0 font-medium text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-[#01bf71] lg:mx-3 md:text-center cursor-pointer focus:outline-none focus:border-b-2 focus:border-[#01bf71]"
										onClick={toggle}
									>
										Timeline
									</Link>
									<a
										href="https://poocoin.app/"
										target="_blank"
										className="text-center inline-block w-full py-2 mx-0 font-medium text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-[#01bf71] lg:mx-3 md:text-center cursor-pointer focus:outline-none"
										onClick={toggle}
									>
										Chart
									</a>
								</div>
								<div className="flex flex-col items-start justify-end w-full pt-1 md:items-center md:w-1/3 md:flex-row md:py-0">
									<a
										href="https://pancakeswap.finance/"
										target="_blank"
										className="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-[#01bf71] md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-[#01bf71] focus:outline-none"
										onClick={toggle}
									>
										Buy On Pancake
									</a>
								</div>
							</div>
						</div>

						{/*  */}
						<div
							className="absolute right-0 flex flex-col items-center justify-center w-10 h-10 rounded-full cursor-pointer md:hidde md:hidden"
							onClick={toggle}
						>
							<svg
								className={`w-6 h-6 text-gray-700 ${
									!isOpen ? "block" : "hidden"
								}`}
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
							<svg
								className={`w-6 h-6 text-gray-700 fixed ${
									isOpen ? "block" : "hidden"
								}`}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								></path>
							</svg>
						</div>
					</div>
				</nav>
			</div>
		</section>
	);
}
