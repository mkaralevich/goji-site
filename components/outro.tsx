import { motion } from "framer-motion";
import React from "react";
import { Heading } from "./heading";
import Logo from "./logo";
import { Box, Button, Flex, t, Text } from "./primitives";

export default function Outro() {
	return (
		<Flex
			fill
			dir="col"
			gap="lg"
			bg="gradientYellow"
			pb="xlg"
			css={{ minh: "100vh" }}
		>
			<Heading fg="orange">Get started with GOJI</Heading>
			<Flex fill dir="col" justify="between" css={{ px: 128, flexGrow: 1 }}>
				<Text t="400" align="center" fg="orange">
					Organize your education and
					<br />
					stay on track
				</Text>

				<Button
					css={{
						w: "100%",
						py: 64,
						bg: "$gradientWhite",
						b: "1px dotted",
						bc: "$orange",
						radius: "$round",
						...t[400],
						color: "$orange",
					}}
				>
					<Logo />
					Join waitlist
				</Button>
			</Flex>
		</Flex>
	);
}
