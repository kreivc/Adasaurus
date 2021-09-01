import React from "react";
import { FaTelegram, FaTwitter, FaPoo } from "react-icons/fa";
import { RiQrScan2Line } from "react-icons/ri";
import { Link } from "react-scroll";

export default function Footer() {
	return (
		<section className="bg-white">
			<div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
				<nav className="flex flex-wrap justify-center -mx-5 -my-2">
					<div className="px-5 py-2">
						<Link
							to="home"
							smooth="true"
							duration={500}
							spy={true}
							exact="true"
							className="text-base leading-6 text-gray-500 hover:text-gray-900 cursor-pointer"
						>
							Home
						</Link>
					</div>
					<div className="px-5 py-2">
						<Link
							to="about"
							smooth="true"
							duration={500}
							spy={true}
							exact="true"
							className="text-base leading-6 text-gray-500 hover:text-gray-900 cursor-pointer"
						>
							About
						</Link>
					</div>
					<div className="px-5 py-2">
						<Link
							to="tokenomics"
							smooth="true"
							duration={500}
							spy={true}
							exact="true"
							className="text-base leading-6 text-gray-500 hover:text-gray-900 cursor-pointer"
						>
							Tokenomics
						</Link>
					</div>
					<div className="px-5 py-2">
						<Link
							to="timeline"
							smooth="true"
							duration={500}
							spy={true}
							exact="true"
							className="text-base leading-6 text-gray-500 hover:text-gray-900 cursor-pointer"
						>
							Timeline
						</Link>
					</div>
					<div className="px-5 py-2">
						<Link
							to="howto"
							smooth="true"
							duration={500}
							spy={true}
							exact="true"
							className="text-base leading-6 text-gray-500 hover:text-gray-900 cursor-pointer"
						>
							How To Buy
						</Link>
					</div>
				</nav>
				<div className="flex justify-center mt-8 space-x-6">
					<a
						href="https://t.me"
						target="_blank"
						className="text-gray-400 hover:text-gray-500"
					>
						<span className="sr-only">Telegram</span>
						<FaTelegram className="w-6 h-6" />
					</a>
					<a
						href="https://poocoin.app"
						target="_blank"
						className="text-gray-400 hover:text-gray-500"
					>
						<span className="sr-only">PooCoin</span>
						<FaPoo className="w-6 h-6" />
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						className="text-gray-400 hover:text-gray-500"
					>
						<span className="sr-only">Twitter</span>
						<FaTwitter className="w-6 h-6" />
					</a>
					<a
						href="https://bscscan.com/"
						target="_blank"
						className="text-gray-400 hover:text-gray-500"
					>
						<span className="sr-only">BSCScan</span>
						<RiQrScan2Line className="w-6 h-6" />
					</a>
				</div>
				<p className="mt-8 text-base leading-6 text-center text-gray-400">
					© {new Date().getFullYear()} Adasaurus. All rights reserved.
				</p>
			</div>
		</section>
	);
}
