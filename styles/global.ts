import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
	html: {
		boxSizing: "border-box",
		WebkitFontSmoothing: "antialiased",
		MozOsxFontSmoothing: "grayscale",
		WebkitTextSizeAdjust: "100%",
		"::selection": { bg: "$yellow", fg: "$black" },
		bg: "$gray",
	},

	body: { bg: "$gray" },

	"*, *:before, *:after": {
		boxSizing: "inherit",
		m: 0,
		p: 0,
		fontFamily: "$sans",
	},

	a: {
		alignItems: "center",
		gap: "$xsm",
		flexShrink: 0,
		outline: "none",
		textDecorationLine: "none",
		lineHeight: "inherit",
		color: "inherit",

		"&:focus": {
			outlineWidth: "0",
			outlineStyle: "solid",
			textDecorationLine: "none",
		},
	},
});
