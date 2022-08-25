import { Box, Flex, Text } from "./primitives";

export function Heading({
	fg = "orange",
	children,
}: {
	fg: "orange" | "black" | "blue" | "green";
	children: React.ReactNode;
}) {
	return (
		<Flex fill py="sm" px="md" css={{ position: "relative", flexes: "ccc" }}>
			<Flex
				ml="md"
				css={{
					position: "absolute",
					top: "50%",
					transform: "translateY(-50%)",
					left: 0,
					s: 16,
					radius: "$round",
					bg: "transparent",
					b: `1px solid $${fg}`,

					"@sm": { s: 24 },
				}}
			/>

			<Text t="500" fg={fg} align="center">
				{children}
			</Text>
		</Flex>
	);
}
