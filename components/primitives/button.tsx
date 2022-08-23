import { styled } from "../../styles/stitches.config";
import { t } from "./text";

export const Button = styled("button", {
	all: "unset",
	boxSizing: "border-box",
	userSelect: "none",
	"&::before": { boxSizing: "border-box" },
	"&::after": { boxSizing: "border-box" },

	transition: "background .2s",
	cursor: "pointer",
	display: "inline-flex",
	flexShrink: 0,
	alignItems: "center",
	justifyContent: "center",
	WebkitTapHighlightColor: "transparent",

	gap: 16,
	radius: "$button",
	...t[300],
	py: 16,
	px: 24,
	b: "1px dotted",
	bc: "$blackAlpha",
	bg: "$white",
	fg: "$orange",
	w: "fit-content",
});
