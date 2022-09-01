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
			as={motion.div}
			initial={{
				background:
					"linear-gradient(180deg, #F9FAFC 0%, #FAF8EF 100%, #FDDE4B 100%, #FF8B38 100%, #CB996F 100%, #4EAD57 100%, #F9E6E4 100%)",
			}}
			animate={{
				background:
					"linear-gradient(180deg, #F9FAFC 0%, #FAF8EF 60.62%, #FDDE4B 73.28%, #FF8B38 81.13%, #CB996F 88.11%, #4EAD57 94.87%, #F9E6E4 100%)",
			}}
			transition={{ type: "spring", stiffness: 20, damping: 10, mass: 1 }}
			fill
			py="xlg"
			px="md"
			css={{
				flexes: "ccc",
				pt: "20vh",
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
						<Text t="300b" fg="orange">
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
						b: "1px solid $border",
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
							b: "1px solid $border",
							boxShadow: "$elevation",
						}}
					/>
					<Flex
						as={motion.div}
						initial={{ opacity: 0 }}
						animate={{ opacity: scrolled ? 1 : 0 }}
						css={{
							position: "absolute",
							top: "4.8%",
							left: 0,
							w: "100%",
							h: "100%",
							z: "$overlay",
							bg: "$border",
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
