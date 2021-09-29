import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import React from "react";

export default function Metamask() {
	return (
		<>
			<Tippy content="Add to Metamask">
				<button
					disabled={true}
					onClick={async () => {
						const provider = window.web3.currentProvider;
						provider.sendAsync(
							{
								method: "metamask_watchAsset",
								params: {
									type: "ERC20",
									options: {
										address: "0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
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
					<Tippy content="Not Release Yet">
						<div className="flex space-x-2 px-3 py-2 bg-[#01bf71] hover:bg-[#38be86] transition-all ease-out duration-300 rounded-md text-white">
							<img src="./Metamask.png" alt="" width="20px" />
							<span>Add To Metamask</span>
						</div>
					</Tippy>
				</button>
			</Tippy>
		</>
	);
}
