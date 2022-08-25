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
			<Heading fg="orange">Join GOJI</Heading>
			<Flex
				fill
				px="xlg"
				pt="xlg"
				gap="md"
				css={{ flexes: "csc", flexGrow: 1, maxw: "$pageMaxWidth", w: 900 }}
			>
				<Logo size={128} />
				<Text t="500" align="center" fg="orange">
					Organize your education and stay on track
				</Text>
			</Flex>
		</Flex>
	);
}
