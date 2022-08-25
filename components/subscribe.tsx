import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./logo";
import MailIcon from "./mail-icon";
import { Button, Flex, t } from "./primitives";

export default function Subscribe() {
	const [y, setY] = useState(0);
	const { scrollYProgress } = useScroll();

	useEffect(() => {
		return scrollYProgress.onChange((latest) => {
			setY(latest);
		});
	}, [scrollYProgress]);

	console.log("scrollYProgress:", y);

	return (
		<Flex
			as={motion.div}
			fill
			initial={{ y: 120, scale: 0.8 }}
			animate={{
				y: 0,
				scale: 1,
			}}
			transition={{
				type: "spring",
				stiffness: 200,
				damping: 40,
				mass: 0.5,
				delay: 0.5,
			}}
			px="md"
			py="md"
			css={{
				position: "fixed",
				z: "$subscribe",
				bottom: 0,
				flexes: "ccc",
			}}
		>
			<Button css={{ w: 320, bg: "$orange", fg: "$white" }}>
				{/* <Logo size={48} /> Join waitlist */}
				<MailIcon /> Join waitlist
			</Button>
		</Flex>
	);
}
