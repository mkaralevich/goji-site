import { Flex, Text } from "./primitives";

export default function Footer() {
	return (
		<Flex bg="gray" py="md" justify="center" align="center">
			<Flex
				py="md"
				justify="center"
				align="center"
				css={{ w: 600, b: "1px dotted", bc: "$blackAlpha" }}
			>
				<Text t="100" align="center">
					Four Flowers School · 2022
					<br />
					Los Angeles, CA
				</Text>
			</Flex>
		</Flex>
	);
}
