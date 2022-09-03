import { styled } from "../../styles/stitches.config";

export const t = {
	600: {
		fontSize: "32px",
		lineHeight: "36px",
		letterSpacing: "2%",
		fontWeight: 400,
		"@sm": { fontSize: "40px", lineHeight: "56px" },
		"@lg": { fontSize: "80px", lineHeight: "96px" },
	},
	500: {
		fontSize: "28px",
		lineHeight: "32px",
		letterSpacing: "2%",
		fontWeight: 400,
		"@sm": { fontSize: "48px", lineHeight: "58px" },
	},
	400: {
		fontSize: "24px",
		lineHeight: "32px",
		fontWeight: 400,
		fontFamily: "$sans",
		"@sm": { fontSize: "40px", lineHeight: "56px" },
	},
	"300b": {
		fontSize: "20px",
		lineHeight: "28px",
		fontWeight: 500,
		fontFamily: "$sans",
		"@sm": { fontSize: "28px", lineHeight: "48px" },
	},
	300: {
		fontSize: "20px",
		lineHeight: "28px",
		fontWeight: 400,
		fontFamily: "$sans",
		"@sm": { fontSize: "28px", lineHeight: "48px" },
	},
	200: {
		fontSize: "20px",
		lineHeight: "24px",
		fontWeight: 400,
		fontFamily: "$sans",
		"@sm": { fontSize: "24px", lineHeight: "40px" },
	},
	150: {
		fontSize: "18px",
		lineHeight: "24px",
		fontWeight: 600,
		fontFamily: "$sans",
	},
	100: {
		fontSize: "18px",
		lineHeight: "24px",
		fontWeight: 400,
		fontFamily: "$sans",
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
		w: {
			paragraph: { w: 320, "@sm": { w: 480 } },
		},
	},

	defaultVariants: { t: "100", fg: "black" },
});
