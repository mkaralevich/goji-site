import React from "react";
import Export from "./pic-export";
import { Heading } from "./heading";
import Capture from "./pic-capture";
import Check from "./pic-check";
import Stats from "./pic-stats";
import { Flex, Text } from "./primitives";

function Card({ svg, title, desc }) {
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
			<Flex align="center" css={{ w: "100%", maxw: 256, "@sm": { maxw: 332 } }}>
				{svg}
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
		svg: <Capture />,
		title: "Quickly capture lessons",
		desc: "Build your student curiculum or just add lessons on the go. You can assign students, select skills, or add files.",
	},
	{
		svg: <Check />,
		title: "Check-in when done",
		desc: "Make sure you track progress by checking in. Leave a note on how lesson went or add a simple impression.",
	},
	{
		svg: <Stats />,
		title: "See how you are doing",
		desc: "See how your students’s skills progress over time and inform your curriculum.",
	},
	{
		svg: <Export />,
		title: "Export your progress",
		desc: "Export your student lessons in suitable format when working on a report. Just select dates.",
	},
];

export default function Progress() {
	return (
		<Flex fill gap="lg" pb="xlg" css={{ flexes: "ccc", bg: "$gradientOrange" }}>
			<Heading fg="orange">Let’s make progress</Heading>

			<Flex fill gap="md" css={{ flexes: "ccc", maxw: "$pageMaxWidth" }}>
				<Flex
					fill
					gap="md"
					px="md"
					css={{ flexes: "css", "@md": { flexes: "rss" } }}
				>
					<Card
						svg={bullets[0].svg}
						title={bullets[0].title}
						desc={bullets[0].desc}
					/>
					<Card
						svg={bullets[1].svg}
						title={bullets[1].title}
						desc={bullets[1].desc}
					/>
				</Flex>

				<Flex
					fill
					gap="md"
					px="md"
					css={{ flexes: "css", "@md": { flexes: "rss" } }}
				>
					<Card
						svg={bullets[2].svg}
						title={bullets[2].title}
						desc={bullets[2].desc}
					/>
					<Card
						svg={bullets[3].svg}
						title={bullets[3].title}
						desc={bullets[3].desc}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
}
