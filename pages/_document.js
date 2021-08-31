import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta
						name="description"
						content="Kreivc Ecommerce using Next.js"
					/>
					{/* html {
								overflow-y: auto;
								overflow-x: hidden;
							}

							body {
								overflow: hidden;
								position: relative;
							} */}
					<style>
						{`	

							html::-webkit-scrollbar {
								width: 0.62em;
							}

							html::-webkit-scrollbar-track {
								box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
								background-color: white;
							}

							html::-webkit-scrollbar-thumb {
								background-color: #01bf71;
								border-radius: 15px;
							}

							canvas {
								top: 0;
								position: fixed;
								z-index: -1;
							}`}
					</style>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
