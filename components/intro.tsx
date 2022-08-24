import { motion } from "framer-motion";
import { Box, Button, Flex, Text } from "./primitives";

const parent = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			type: "spring",
			staggerChildren: 0.1,
			delayChildren: 0.3,
		},
	},
};

const child = {
	initial: { opacity: 0, y: 50 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 50,
			damping: 10,
			mass: 0.5,
		},
	},
};

const Title = () => {
	return (
		<Flex as={motion.div} dir="col" fill variants={child}>
			<Text t="600">Education tracker</Text>
			<Text t="600">
				for{" "}
				<Text as="span" t="600" fg="green">
					parents
				</Text>{" "}
				and{" "}
				<Text as="span" t="600" fg="blue">
					kids
				</Text>
			</Text>
		</Flex>
	);
};

export default function Intro() {
	return (
		<Flex
			fill
			dir="col"
			align="center"
			css={{ pt: 168, pb: 128, bg: "$gray", px: 128 }}
		>
			<Flex
				as={motion.div}
				variants={parent}
				initial="initial"
				animate="animate"
				dir="col"
				gap="lg"
				fill
				css={{ maxw: 960 }}
			>
				<Flex fill dir="col" gap="md">
					<Title />
					<Text as={motion.p} t="300" width="paragraph" variants={child}>
						Goji helps parents organize education for their kids and stay on
						track.
					</Text>
					<Button variants={child}>Join waitlist</Button>
				</Flex>
				<Box
					as={motion.img}
					variants={child}
					src="/dash.png"
					alt="dash"
					css={{
						all: "unset",
						b: "1px solid",
						bc: "$blackAlphaLight",
						radius: "$img",
						w: "100%",
						h: "auto",
						boxShadow: "$elevation",
					}}
				/>
			</Flex>
		</Flex>
	);
}
