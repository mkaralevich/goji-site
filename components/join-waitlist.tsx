import { motion, useScroll } from "framer-motion";
import Logo from "./logo";
import MailIcon from "./mail-icon";
import { Button, Flex, t } from "./primitives";

export function JoinWaitlist() {
	const { scrollYProgress } = useScroll();

	// scrollYProgress > .2

	return (
		<Flex
			as={motion.div}
			fill
			initial={{ opacity: 0, scale: 0.9, rotate: -0.9 }}
			animate={{
				opacity: 1,
				scale: 1,
				rotate: 0,
			}}
			transition={{
				type: "spring",
				stiffness: 200,
				damping: 40,
				mass: 0.5,
				delay: 1,
			}}
			px="md"
			css={{
				position: "fixed",
				zIndex: "$logo",
				bottom: 16,
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
