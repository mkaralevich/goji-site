import { styled } from "../../styles/stitches.config";

export const t = {
	500: {
		fontSize: "28px",
		lineHeight: "32px",
		letterSpacing: "2%",
		fontWeight: 400,
		"@sm": { fontSize: "48px", lineHeight: "58px" },
	},
	"400b": {
		fontSize: "24px",
		lineHeight: "32px",
		fontWeight: 400,
		fontFamily: "$sans",
		"@sm": { fontSize: "40px", lineHeight: "56px" },
	},
	400: {
		fontSize: "24px",
		lineHeight: "32px",
		fontWeight: 400,
		fontFamily: "$mono",
		"@sm": { fontSize: "40px", lineHeight: "56px" },
	},
	300: {
		fontSize: "18px",
		lineHeight: "24px",
		fontWeight: 400,
		fontFamily: "$mono",
		"@sm": { fontSize: "28px", lineHeight: "48px" },
	},
	200: {
		fontSize: "18px",
		lineHeight: "24px",
		fontWeight: 400,
		fontFamily: "$mono",
		"@sm": { fontSize: "24px", lineHeight: "40px" },
	},
	150: {
		fontSize: "18px",
		lineHeight: "24px",
		fontWeight: 500,
		fontFamily: "$mono",
	},
	100: {
		fontSize: "18px",
		lineHeight: "24px",
		fontWeight: 400,
		fontFamily: "$mono",
	},
};

export const Text = styled("p", {
	fontFamily: "-apple-system",
	fontStyle: "normal",
	fg: "$fg",

	variants: {
		t,
		fg: {
			black: { color: "$black" },
			green: { color: "$green" },
			blue: { color: "$blue" },
			orange: { color: "$orange" },
		},
		align: {
			center: { textAlign: "center" },
		},
		width: {
			paragraph: { maxWidth: 620 },
		},
	},

	defaultVariants: { t: "100", fg: "black" },
});
