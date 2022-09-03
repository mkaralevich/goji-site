import { motion } from "framer-motion";
import { styled } from "../../styles/stitches.config";

export const Button = styled(motion.button, {
	all: "unset",
	boxSizing: "border-box",

	display: "inline-flex",
	flexes: "rcc",
	px: 16,
	py: 16,
	gap: 16,
	radius: "$button",
	cursor: "pointer",
	bg: "$orange",
	fg: "$white",

	fontSize: "20px",
	lineHeight: "28px",
	fontWeight: 400,
	fontFamily: "$sans",

	transition: "background .2s, transform .2s, width .4s",
	transitionTimingFunction: "cubic-bezier(0.210, 0.005, 0.020, 1.000)",

	"@sm": {
		fontSize: "28px",
		lineHeight: "48px",
		px: 32,
		py: 16,
	},

	variants: {
		variant: {
			subscribe: {
				"&:hover": {
					bg: "$orangeHover",
					transform: "translateY(-4px)",
				},
				"&:focus": {
					bg: "$orangeHover",
					transform: "scale(.98)",
				},
			},
			send: {
				w: "100%",
				flexes: "rbc",

				"& svg": { transition: "transform .2s" },

				"&:hover": {
					bg: "$orangeHover",
					"& svg": { transform: "translateX(4px)" },
				},

				"&:focus": {
					bg: "$orangeHover",
					transform: "scale(.98)",
				},
			},

			close: {
				bg: "$white",
				p: 16,
				"&:hover, &:focus": { bg: "$gray" },
			},
		},
	},

	defaultVariants: { variant: "subscribe" },
});
