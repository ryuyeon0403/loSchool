import { Typography } from "@mui/material";
import FireBaseComponent from "component/firebase/FireBaseComponent";
import Body from "component/Layout/Body";
import Footer from "component/Layout/Footer";
import Header from "component/Layout/Header";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<Body>
				<FireBaseComponent />
			</Body>
			<Footer />
		</>
	);
};

export default Home;
