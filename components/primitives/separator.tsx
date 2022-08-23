import { styled } from "../../styles/stitches.config";

export const Separator = styled("div", {
	w: "100%",
	h: 1,
	bg: "$border",

	variants: {
		variant: {
			secondary: { bg: "$borderSecondary" },
		},
	},
});
