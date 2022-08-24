import { Box, Flex, Text } from "./primitives";

export function Heading({
	fg = "orange",
	children,
}: {
	fg: "orange" | "black" | "blue" | "green";
	children: React.ReactNode;
}) {
	return (
		<Flex
			fill
			justify="center"
			align="center"
			py="sm"
			css={{ position: "relative" }}
		>
			<Box
				css={{
					position: "absolute",
					top: "50%",
					transform: "translateY(-50%)",
					left: 32,
					s: 24,
					radius: "$round",
					bg: "transparent",
					b: "1px solid",
					bc: `$${fg}`,
				}}
			/>

			<Text t="500" fg={fg}>
				{children}
			</Text>
		</Flex>
	);
}
