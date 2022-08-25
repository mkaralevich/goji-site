import { motion } from "framer-motion";
import Logo from "./logo";
import { Flex, Text } from "./primitives";

const parent = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			type: "spring",
			staggerChildren: 0.1,
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
			p="xlg"
			css={{
				flexes: "ccc",
				pt: 128,
				bg: "linear-gradient(180deg, #F9FAFC 23.86%, #F9E6E4 100%)",
			}}
		>
			<Flex
				as={motion.div}
				variants={parent}
				initial="initial"
				animate="animate"
				gap="lg"
				fill
				css={{ flexes: "ccc", maxw: 960 }}
			>
				<Flex fill gap="md" css={{ flexes: "css" }}>
					<Flex
						as={motion.div}
						variants={child}
						css={{ flexes: "rcc", gap: 4 }}
					>
						<Logo size={48} />
						<Text t="300" fg="orange">
							GOJI
						</Text>
					</Flex>
					<Title />
					<Text as={motion.p} t="300" w="paragraph" variants={child}>
						Goji helps parents organize education for their kids and stay on
						track.
					</Text>
				</Flex>
				<Flex
					as={motion.img}
					variants={child}
					src="/dash.png"
					alt="dash"
					css={{
						all: "unset",
						w: "100%",
						h: "auto",
						b: "1px solid $blackAlphaLight",
						radius: "$img",
						boxShadow: "$elevation",
					}}
				/>
			</Flex>
		</Flex>
	);
}
