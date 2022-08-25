import React from "react";
import { Heading } from "./heading";
import Logo from "./logo";
import { Button, Flex, t, Text } from "./primitives";

export default function Outro() {
	return (
		<Flex
			fill
			gap="md"
			pb="lg"
			css={{
				flexes: "ccc",
				h: "80vh",
				minh: 800,
				bg: "$gradientYellow",
			}}
		>
			<Heading fg="orange">Get started with GOJI</Heading>
			<Flex
				fill
				px="xlg"
				css={{ flexes: "cbc", flexGrow: 1, maxw: "$pageMaxWidth" }}
			>
				<Text t="500" align="center" fg="orange">
					Organize your education and stay on track
				</Text>
			</Flex>
		</Flex>
	);
}
