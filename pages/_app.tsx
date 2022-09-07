import React from "react";
import type { AppProps } from "next/app";
import TagManager from "react-gtm-module";
import { globalStyles } from "../styles/global";

function App({ Component, pageProps }: AppProps) {
	globalStyles();

	// Google Tag Manager
	React.useEffect(() => {
		TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM as string });
	}, []);

	return (
		<>
			<Component {...pageProps} />
		</>
	);
}

export default App;
