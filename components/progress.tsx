import React from "react";
import { Heading } from "./heading";
import { Flex, Text } from "./primitives";

function Card({ alt, img, title, desc }) {
	return (
		<Flex
			fill
			gap="md"
			p="md"
			css={{
				flexes: "css",
				b: "1px dotted $blackAlpha",
				bg: "$gradientWhite",
				transition: "$bg",

				"&:hover": { bg: "white" },
			}}
		>
			<Flex fill align="center">
				<Flex fill as="img" alt={alt} src={img} css={{ h: "auto" }} />
			</Flex>

			<Flex fill dir="col" gap="sm">
				<Text t="150" fg="orange">
					{title}
				</Text>
				<Text t="100">{desc}</Text>
			</Flex>
		</Flex>
	);
}

const bullets = [
	{
		alt: "",
		img: "/1.png",
		title: "Quickly capture lessons",
		desc: "Build your student curiculum or just add lessons on the go. You can assign students, select skills, or add files.",
	},
	{
		alt: "",
		img: "/2.png",
		title: "Check-in when done",
		desc: "Make sure you track progress by checking in. Leave a note on how lesson went or add a simple impression.",
	},
	{
		alt: "",
		img: "/3.png",
		title: "See how you are doing",
		desc: "See how your students’s skills progress over time and inform your curriculum.",
	},
	{
		alt: "",
		img: "/1.png",
		title: "Export your progress",
		desc: "Export your student lessons in suitable format when working on a report. Just select dates.",
	},
];

export default function Progress() {
	return (
		<Flex fill gap="lg" pb="xlg" css={{ flexes: "ccc", bg: "$gradientOrange" }}>
			<Heading fg="orange">All you need to make progress</Heading>

			<Flex fill gap="md" css={{ flexes: "ccc", maxw: "$pageMaxWidth" }}>
				<Flex
					fill
					gap="md"
					px="md"
					css={{ flexes: "css", "@sm": { flexes: "rss" } }}
				>
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

				<Flex
					fill
					gap="md"
					px="md"
					css={{ flexes: "css", "@sm": { flexes: "rss" } }}
				>
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
