import { motion } from "framer-motion";
import JoinWaitlist from "../components/join-waitlist";
import { Flex, Button, Text, Box } from "../components/primitives";

const Title = () => {
	return (
		<Flex
			as={motion.div}
			dir="col"
			fill
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ type: "spring", duration: 2, bounce: 0.4, delay: 0.2 }}
		>
			<Text t="500">Education tracker</Text>
			<Text t="500">
				for{" "}
				<Text as="span" t="500" fg="green">
					parents
				</Text>{" "}
				and{" "}
				<Text as="span" t="500" fg="blue">
					kids
				</Text>
			</Text>
		</Flex>
	);
};

export default function Index() {
	return (
		<>
			<JoinWaitlist />
			<Flex
				fill
				dir="col"
				align="center"
				css={{ pt: 168, pb: 128, bg: "$gray", px: 128 }}
			>
				<Flex dir="col" gap="lg" fill css={{ maxw: 960 }}>
					<Flex fill dir="col" gap="md">
						<Title />
						<Text t="300" width="paragraph">
							Goji helps parents organize education for their kids and stay on
							track.
						</Text>
						<Button>Join waitlist</Button>
					</Flex>
					<Box
						as="img"
						src="/dash.png"
						alt="dash"
						css={{
							b: "1px solid",
							bc: "$blackAlphaLight",
							radius: "$img",
							filter:
								"drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.12)) drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.08))",
						}}
					/>
				</Flex>
			</Flex>
		</>
	);
}
