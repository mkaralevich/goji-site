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
			mass: 0.5,
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
	const [scrolled2, setScrolled2] = useState(false);

	useEffect(() => {
		return scrollYProgress.onChange((latest) => {
			setScrolled(latest > 0.01);
			setScrolled2(latest > 0.08);
		});
	}, [scrollYProgress]);

	return (
		<Flex
			as={motion.section}
			initial={{
				background:
					"linear-gradient(180deg, #fff 0%, #FAEDED 100%, #FDDE4B 100%, #4EAD57 100%, #F9E6E4 100%)",
			}}
			animate={
				scrolled && {
					background:
						"linear-gradient(180deg, #F9FAFC 0%, #FAEDED 55.21%, #E4FD4B 83.73%, #4EAD57 96.88%, #F9E6E4 100%)",
				}
			}
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
					<Text as={motion.p} variants={child} t="300" align="center">
						It's time to upgrade education stack.
						<br /> Organize education for students and stay on track.
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
							scrolled2
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
						animate={{ opacity: scrolled2 ? 1 : 0 }}
						css={{
							position: "absolute",
							top: "4.8%",
							left: 0,
							w: "100%",
							h: "100%",
							z: "$introImgOverlay",
							bg: "hsla(0, 0%, 17%, 8%)",
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
