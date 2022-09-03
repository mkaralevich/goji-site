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

	transition: "background .2s, transform .2s",
	"&:hover": { transform: "translateY(-4px)" },

	"@sm": {
		fontSize: "28px",
		lineHeight: "48px",
		px: 32,
		py: 16,
	},

	variants: {
		variant: {
			subscribe: { w: 320, "&:hover": { bg: "$orangeHover" } },
			send: { w: "100%", flexes: "rbc", "&:hover": { bg: "$orangeHover" } },
			close: { bg: "$white", p: 16, "&:hover": { bg: "$gray" } },
		},
	},

	defaultVariants: { variant: "subscribe" },
});
