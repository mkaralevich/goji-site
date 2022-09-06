import { motion } from "framer-motion";
import React from "react";
import { Heading } from "./heading";
import Logo from "./logo";
import { Button, Flex, t, Text } from "./primitives";

export default function Outro() {
	return (
		<Flex
			as="section"
			fill
			gap="md"
			pb="lg"
			css={{
				flexes: "ccc",
				h: "90vh",
				bg: "$gradientYellow",

				"@sm": { minh: 900, h: "100vh" },
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
				<Flex
					css={{
						p: 12,
						radius: "20px",
						bg: "$white",
						boxShadow: "$elevation",

						"@sm": { p: 16, radius: "32px" },
					}}
				>
					<Logo size="large" />
				</Flex>
				<Text t="500" align="center" fg="orange">
					Organize your education and stay on track
				</Text>
				<Text t="300" align="center" fg="orange">
					2022 · Made in LA, California
				</Text>
			</Flex>
		</Flex>
	);
}
