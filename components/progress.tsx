import { motion } from "framer-motion";
import React from "react";
import { Heading } from "./heading";
import { Box, Flex, Text } from "./primitives";

function Card({ alt, img, title, desc }) {
	return (
		<Flex
			fill
			dir="col"
			gap="sm"
			css={{
				b: "1px dotted",
				bc: "$blackAlpha",
				p: 32,
				bg: "$gradientWhite",

				transition: "background .5s",

				"&:hover": { bg: "white" },
			}}
		>
			<Flex fill align="center" css={{}}>
				<Box
					as="img"
					alt={alt}
					src={img}
					css={{
						w: "100%",
						maxw: "100%",
						h: "auto",
					}}
				/>
			</Flex>
			<Text t="150" fg="orange">
				{title}
			</Text>
			<Text t="100">{desc}</Text>
		</Flex>
	);
}

const bullets = [
	{
		alt: "",
		img: "/1.png",
		title: "Quickly capture",
		desc: "Productivity app that helps parents organize their kids’ education and stay on track.",
	},
	{
		alt: "",
		img: "/2.png",
		title: "Quickly capture",
		desc: "Productivity app that helps parents organize their kids’ education and stay on track.",
	},
	{
		alt: "",
		img: "/3.png",
		title: "Stats",
		desc: "Productivity app that helps parents organize their kids’ education and stay on track.",
	},
	{
		alt: "",
		img: "/1.png",
		title: "Export",
		desc: "Productivity app that helps parents organize their kids’ education and stay on track.",
	},
];

export default function Progress() {
	return (
		<Flex fill dir="col" gap="lg" bg="gradientOrange" pb="xlg">
			<Heading fg="orange">All you need to make progress</Heading>
			<Flex fill dir="col" gap="md" css={{ px: 128 }}>
				<Flex fill gap="md">
					<Card
						alt=""
						img={bullets[0].img}
						title={bullets[0].title}
						desc={bullets[0].desc}
					/>
					<Card
						alt=""
						img={bullets[1].img}
						title={bullets[1].title}
						desc={bullets[1].desc}
					/>
				</Flex>

				<Flex fill gap="md">
					<Card
						alt=""
						img={bullets[2].img}
						title={bullets[2].title}
						desc={bullets[2].desc}
					/>
					<Card
						alt=""
						img={bullets[3].img}
						title={bullets[3].title}
						desc={bullets[3].desc}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
}
