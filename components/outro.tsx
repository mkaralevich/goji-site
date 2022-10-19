import React from "react";
import { useInView, useScroll } from "framer-motion";
import { Heading } from "./heading";
import Logo from "./logo";
import { Flex, Text } from "./primitives";
import Subscribe from "./subscribe";

export default function Outro() {
	const outroRef = React.useRef(null);
	const isInView = useInView(outroRef, { amount: 1 });

	return (
		<>
			<Subscribe isInView={isInView} />
			<Flex
				as="section"
				fill
				gap="md"
				pb="lg"
				css={{
					flexes: "ccc",
					bg: "$gradientYellow",

					"@sm": { minh: "100vh" },
				}}
			>
				<Heading fg="orange">Join GOJI</Heading>
				<Flex
					fill
					px="md"
					pt="xlg"
					gap="md"
					css={{ flexes: "csc", flexGrow: 1, maxw: "$pageMaxWidth" }}
				>
					<Logo size="large" />
					<Text t="500" align="center" fg="orange">
						Organize your education and stay on track
					</Text>
					<Text t="300" align="center" fg="orange">
						2022 · Made in LA, California
					</Text>
					<Flex fill ref={outroRef} css={{ h: `calc(80px + 20vh)` }} />
				</Flex>
			</Flex>
		</>
	);
}
