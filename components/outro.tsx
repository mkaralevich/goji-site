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
				minh: "100vh",
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

				{/* <Button
					css={{
						w: "100%",
						py: 64,
						radius: "80px",
						b: "1px dotted $orange",
						...t[500],
						fg: "white",
						bg: "$orange",
					}}
				>
					Join waitlist
				</Button> */}
			</Flex>
		</Flex>
	);
}
