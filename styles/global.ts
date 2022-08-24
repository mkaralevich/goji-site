import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
	"@font-face": [
		{
			// fontFamily: "Sans",
			// src: 'url("/fonts/basier-circle-regular.woff2")',
			// fontWeight: 400,
		},
	],

	html: {
		boxSizing: "border-box",
		WebkitFontSmoothing: "antialiased",
		MozOsxFontSmoothing: "grayscale",
		WebkitTextSizeAdjust: "100%",
	},
	"*, *:before, *:after": {
		boxSizing: "inherit",
		m: 0,
		p: 0,
		fontFamily: "$sans",
	},
	body: {
		bg: "$gray",
	},
	a: {
		alignItems: "center",
		gap: "$xsm",
		flexShrink: 0,
		outline: "none",
		textDecorationLine: "none",
		WebkitTapHighlightColor: "transparent",
		lineHeight: "inherit",
		color: "inherit",

		"&:focus": {
			outlineWidth: "0",
			outlineStyle: "solid",
			textDecorationLine: "none",
		},
	},
});
