import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import React from "react";

export default function Metamask() {
	return (
		<>
			<Tippy content="Add to Metamask">
				<button
					// disabled={true}
					onClick={async () => {
						const provider = window.web3.currentProvider;
						provider.sendAsync(
							{
								method: "metamask_watchAsset",
								params: {
									type: "ERC20",
									options: {
										address: "0x506fcd8b9f86c8c253a88f0656bc5d2927af8a59",
										symbol: "Adasaurus",
										decimals: 4,
										image: "https://i.ibb.co/jWyzKFM/DINO.png",
									},
								},
								id: Math.round(Math.random() * 100000),
							},
							(err, added) => {
								console.log("provider returned", err, added);
								if (err || "error" in added) {
									this.setState({
										errorMessage: "There was a problem adding the token.",
										message: "",
									});
									return;
								}
								console.log("token added");
							}
						);
					}}
					style={{
						background: "none",
						border: "none",
						cursor: "pointer",
					}}
				>
					<Tippy content="Add to Metamask">
						<div className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-[#01bf71] border border-transparent rounded-md shadow hover:bg-[#3bc98d] focus:outline-none md:py-2 md:text-lg md:px-5">
							<img src="./Metamask.png" alt="" width="20px" />
							<span>Add To Metamask</span>
						</div>
					</Tippy>
				</button>
			</Tippy>
		</>
	);
}
