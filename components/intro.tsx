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
			staggerChildren: 0.2,
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
			mass: 1,
		},
	},
};

const Title = () => {
	return (
		<Flex as={motion.header} variants={child} fill css={{ flexes: "ccc" }}>
			<Text as="h1" t="600" align="center">
				Education tracker <br />
				<Text as="span" t="600">
					for{" "}
					<Text as="span" t="600" fg="green">
						parents
					</Text>{" "}
					and{" "}
					<Text as="span" t="600" fg="blue">
						kids
					</Text>
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
			as={motion.section}
			initial={{
				background:
					"linear-gradient(180deg, #F9FAFC 0%, #FAF8EF 100%, #FDDE4B 100%, #FF8B38 100%, #CB996F 100%, #4EAD57 100%, #F9E6E4 100%)",
			}}
			animate={{
				background:
					"linear-gradient(180deg, #F9FAFC 0%, #FAF8EF 40%, #FDDE4B 60%, #FF8B38 75%, #CB996F 85%, #4EAD57 95%, #F9E6E4 100%)",
			}}
			transition={{ type: "spring", stiffness: 20, damping: 10, mass: 1 }}
			fill
			center
			py="xlg"
			px="md"
		>
			<Flex
				as={motion.div}
				variants={parent}
				initial="initial"
				animate="animate"
				fill
				dir="col"
				gap="lg"
				css={{ maxw: 960 }}
			>
				<Flex fill dir="col" center gap="md">
					<Flex
						as={motion.div}
						variants={child}
						fill
						dir="row"
						center
						css={{ gap: 12, "@sm": { gap: 16 } }}
					>
						<Logo size="small" />
						<Text t="300b" fg="orange">
							GOJI
						</Text>
					</Flex>

					<Title />
					<Text
						as={motion.p}
						variants={child}
						t="300"
						w="paragraph"
						align="center"
					>
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
						boxShadow: "$elevationLarge",
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
							z: "$introModalImg",
							h: "auto",
							transform: "translate(-50%, -50%)",
							radius: "$img",
							b: "1px solid $border",
							boxShadow: "$elevationLarge",
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
							z: "$introImgOverlay",
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
