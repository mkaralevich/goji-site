import React from "react";
import { styled, VariantProps } from "../../styles/stitches.config";
import { Flex } from "./flex";
import * as Primitive from "@radix-ui/react-radio-group";
import Label from "./label";

export const Root = Primitive.Root;

export const Group = styled(Flex, {
	// all: "unset",
	// boxSizing: "border-box",

	// display: "flex",
	flexes: "css",
	w: "100%",
	gap: 8,
});

const _Radio = styled(Primitive.Item, {
	all: "unset",
	boxSizing: "border-box",

	s: 20,
	maxs: 20,
	mins: 20,
	radius: "$round",
	bg: "$white",
	b: "2px solid $border",
	cursor: "pointer",

	"&:hover": { bg: "$gray" },
	"&:focus, &[data-state='checked']": { bc: "$blue" },
});

const _Indicator = styled(Primitive.Indicator, {
	display: "flex",
	flexes: "ccc",
	w: "100%",
	h: "100%",
	position: "relative",

	"&::after": {
		content: '""',
		display: "block",
		width: 10,
		height: 10,
		radius: "$round",
		bg: "$blue",
	},
});

type RadioItemProps = {
	value: string;
	id: string;
	children: React.ReactNode;
};

export const Item = React.forwardRef<HTMLButtonElement, RadioItemProps>(
	({ value, id, children, ...props }, ref) => {
		return (
			<Flex fill css={{ flexes: "rsc", gap: 12 }}>
				<_Radio ref={ref} value={value} id={id} {...props}>
					<_Indicator />
				</_Radio>
				<Label htmlFor={id}>{children}</Label>
			</Flex>
		);
	}
);

Item.displayName = "Item";
