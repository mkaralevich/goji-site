import { motion } from "framer-motion";
import Logo from "./logo";
import { Button, Flex, t } from "./primitives";

export function JoinWaitlist() {
	return (
		<Flex
			as={motion.div}
			initial={{ opacity: 0, scale: 0.9, rotate: -0.9 }}
			animate={{
				opacity: 1,
				scale: 1,
				rotate: 0,
			}}
			transition={{ type: "spring", stiffness: 200, damping: 40, mass: 0.5 }}
			css={{ position: "fixed", zIndex: "$logo", top: 32, left: 32 }}
		>
			<Button
				css={{
					...t["400b"],
					py: 12,
				}}
			>
				<Logo /> GOJI
			</Button>
		</Flex>
	);
}
