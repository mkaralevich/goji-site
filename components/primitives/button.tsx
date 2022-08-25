import { motion } from "framer-motion";
import * as React from "react";
import { CSS, styled } from "../../styles/stitches.config";
import { t } from "./text";

const _Button = styled(motion.button, {
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

	gap: 8,
	radius: 24,
	w: "fit-content",
	py: 16,
	px: 16,
	b: "1px dotted $orange",
	bg: "$gradientWhite",
	fg: "$orange",
	backdropFilter: "blur(16px)",

	fontSize: "20px",
	lineHeight: "24px",
	fontWeight: 400,
	fontFamily: "$sans",

	"@sm": { radius: 32, px: 32, fontSize: "28px", lineHeight: "48px" },
});

type ButtonOwnProps = React.ComponentProps<typeof motion.button> & {
	css?: CSS;
	children?: React.ReactNode;
};

export const Button = React.forwardRef<
	React.ElementRef<typeof _Button>,
	ButtonOwnProps
>(({ css, children, ...props }, ref) => {
	return (
		<_Button ref={ref} whileHover={{ scale: 1.02 }} css={css} {...props}>
			{children}
		</_Button>
	);
});

Button.displayName = "Button";
