import Intro from "../components/intro";
import Progress from "../components/progress";
import Outro from "../components/outro";
import Subscribe from "../components/subscribe";
import { Flex } from "../components/primitives";
import Head from "next/head";
import { motion } from "framer-motion";

const title = "GOJI · Education tracker";
const description =
	"Goji helps parents organize education for their kids and stay on track";

export default function Index() {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:title" content={title} key="title" />
				<meta property="og:description" content={description} />
				<meta property="og:image" content="https://gogoji.app/thumb.jpg" />
				<meta property="image:width" content="1920" />
				<meta property="image:height" content="1080" />
				<meta property="og:url" content="https://karalevich.com" />
				<meta property="og:type" content="website" />
				<title>{title}</title>
			</Head>
			<Flex
				as={motion.div}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				fill
				dir="col"
			>
				<Subscribe />
				<Intro />
				<Progress />
				<Outro />
			</Flex>
		</>
	);
}
