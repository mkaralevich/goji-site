import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
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
	const { scrollYProgress } = useScroll();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		return scrollYProgress.onChange((latest) => {
			setScrolled(latest > 0.05);
		});
	}, [scrollYProgress]);

	return (
		<Flex
			fill
			py="xlg"
			px="md"
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
						<Logo size="small" />
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
					as={motion.div}
					variants={child}
					css={{
						position: "relative",
						overflow: "hidden",
						maxw: 960,
						radius: "$img",
						b: "1px solid $blackAlphaLight",
						boxShadow: "$elevation",
					}}
				>
					<Flex
						as={motion.img}
						initial={{ opacity: 0, y: "-40%", x: "-50%" }}
						animate={
							scrolled
								? { opacity: 1, y: "-50%", x: "-50%" }
								: { opacity: 0, y: "-40%", x: "-50%" }
						}
						transition={{
							type: "spring",
							mass: 0.5,
							stiffness: 100,
							bounce: 1,
						}}
						src="/modal.webp"
						alt="modal"
						css={{
							all: "unset",
							position: "absolute",
							top: "50%",
							left: "50%",
							w: "45%",
							z: "$modal",
							h: "auto",
							transform: "translate(-50%, -50%)",
							radius: "$img",
							b: "1px solid $blackAlphaLight",
							boxShadow: "$elevation",
						}}
					/>
					<Flex
						as={motion.div}
						initial={{ opacity: 0 }}
						animate={{ opacity: scrolled ? 1 : 0 }}
						css={{
							position: "absolute",
							top: 0,
							left: 0,
							w: "100%",
							h: "100%",
							z: "$overlay",
							bg: "$blackAlphaLight",
						}}
					/>
					<Flex
						as="img"
						src="/dash.webp"
						alt="dashboard"
						css={{
							all: "unset",
							w: "100%",
							h: "auto",
						}}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
}
