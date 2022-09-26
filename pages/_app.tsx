import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeCustomization } from "../themes";
import { RecoilRoot } from "recoil";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<ThemeCustomization>
				<React.StrictMode>
					<Component {...pageProps} />
				</React.StrictMode>
			</ThemeCustomization>
		</RecoilRoot>
	);
}

export default MyApp;
