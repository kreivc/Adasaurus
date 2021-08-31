import React from "react";

export default function About() {
	return (
		<section
			className="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32"
			id="about"
		>
			<div className="relative max-w-3xl px-8 text-center text-white auto lg:px-0">
				<div className="flex flex-col w-full md:flex-row">
					<div className="flex justify-between ">
						<h1 className="mx-8 relative flex flex-col text-6xl font-extrabold text-left text-black">
							<span className="text-[#293cc7]">Adasaurus</span>
							<span>What is</span>
							<span>That?</span>
						</h1>
					</div>
					<div className="relative top-0 right-0 h-96 w-96 mt-12 md:-mt-16 md:absolute md:h-96">
						<img
							src="./DINO.png"
							alt="dino2"
							width="300px"
							className="object-cover mt-3 ml-7 h-80 lg:h-96"
						/>
					</div>
				</div>

				<div className="my-16 border-b border-gray-300 lg:my-24"></div>

				<h2 className="text-left text-gray-500 xl:text-xl mx-12">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Unde eum voluptatibus incidunt temporibus eveniet optio
					expedita harum perspiciatis sit recusandae quas fugit a,
					vitae voluptas?
				</h2>
			</div>
		</section>
	);
}
