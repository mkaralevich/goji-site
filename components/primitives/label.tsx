import { styled } from "../../styles/stitches.config";
import { t } from "./text";

const Label = styled("label", {
	all: "unset",
	boxSizing: "border-box",

	w: "100%",
	fg: "black",
	...t[100],

	variants: {
		variant: {
			default: { cursor: "pointer" },
			legend: { fg: "$secondary" },
		},
	},
	defaultVariants: { variant: "default" },
});

export default Label;
