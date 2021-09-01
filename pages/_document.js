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

					<style>
						{`	
							html {
								overflow-y: auto;
								overflow-x: hidden;
							}

							body {
								overflow: hidden;
								position: relative;
							}

							html::-webkit-scrollbar {
								width: 0.62em;
							}

							html::-webkit-scrollbar-track {
								background-color: white;
							}

							html::-webkit-scrollbar-thumb {
								background-color: #01bf71;
								border-radius: 15px;
							}

							canvas {
								top: 0;
								left: 0;
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
