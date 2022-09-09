import { styled } from "../../styles/stitches.config";

export const t = {
	600: {
		fontSize: "36px",
		lineHeight: "40px",
		letterSpacing: "2%",
		fontWeight: 400,
		"@sm": { fontSize: "58px", lineHeight: "64px" },
		"@md": { fontSize: "80px", lineHeight: "96px" },
	},
	500: {
		fontSize: "28px",
		lineHeight: "32px",
		letterSpacing: "2%",
		fontWeight: 400,
		"@sm": { fontSize: "36px", lineHeight: "40px" },
		"@md": { fontSize: "48px", lineHeight: "58px" },
	},
	400: {
		fontSize: "24px",
		lineHeight: "32px",
		fontWeight: 400,
		"@sm": { fontSize: "40px", lineHeight: "56px" },
	},
	"300b": {
		fontSize: "24px",
		lineHeight: "28px",
		fontWeight: 500,
		"@md": { fontSize: "40px", lineHeight: "48px" },
	},
	300: {
		fontSize: "20px",
		lineHeight: "28px",
		fontWeight: 400,
		"@sm": { fontSize: "28px", lineHeight: "48px" },
	},
	200: {
		fontSize: "24px",
		lineHeight: "32px",
		fontWeight: 400,
		"@sm": { fontSize: "24px", lineHeight: "40px" },
	},
	150: {
		fontSize: "18px",
		lineHeight: "24px",
		fontWeight: 600,
	},
	100: {
		fontSize: "18px",
		lineHeight: "24px",
		fontWeight: 400,
	},
	50: {
		fontSize: "16px",
		lineHeight: "20px",
		fontWeight: 400,
	},
};

export const Text = styled("p", {
	fontFamily: "$sans",
	fontStyle: "normal",
	fg: "$fg",

	variants: {
		t,
		fg: {
			black: { color: "$black" },
			secondary: { color: "$secondary" },
			green: { color: "$green" },
			blue: { color: "$blue" },
			orange: { color: "$orange" },
			white: { color: "$white" },
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
