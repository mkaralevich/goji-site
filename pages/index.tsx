import Intro from "../components/intro";
import Progress from "../components/progress";
import Outro from "../components/outro";
import Subscribe from "../components/subscribe";
import { Flex } from "../components/primitives";
import { motion } from "framer-motion";

export default function Index() {
	return (
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
	);
}
