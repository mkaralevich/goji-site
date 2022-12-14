import * as Stitches from "@stitches/react";
import { setFlexGroup, bp } from "../utils";

export type { CSS, PropertyValue, VariantProps } from "@stitches/react";

export const {
	keyframes,
	css,
	globalCss,
	styled,
	config,
	createTheme,
	getCssText,
} = Stitches.createStitches({
	theme: {
		colors: {
			/* semantics */
			secondary: "rgba(0, 0, 0, 0.56)",
			border: "rgba(0, 0, 0, 0.12)",
			borderSecondary: "rgba(0, 0, 0, 0.08)",
			overlay: "rgba(0, 0, 0, 0.16)",
			orangeHover: "#E1320F",
			inputBg: "#F5F6F8",
			/* tokens */
			black: "#2B2F43",
			white: "#fff",
			gray: "#F9FAFC",
			orange: "#FB4926",
			blue: "#0F72B9",
			brown: "#CB996F",
			yellow: "#FEDA31",
			green: "#3E7247",
			gradientWhite:
				"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%)",
			gradientOrange: "linear-gradient(180deg, #FFF5F3 0%, #fff 100%)",
			gradientYellow:
				"linear-gradient(180deg, #FEDA31 0%, rgba(255, 255, 255, 100) 100%)",
		},

		sizes: {
			pageMaxWidth: "1200px",
		},

		radii: {
			img: "8px",
			button: "24px",
			round: "999px",
			modal: "24px",
			input: "16px",
		},

		shadows: {
			elevationLarge:
				"0px 4px 24px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.08)",
			elevationSmall:
				"0px 0px 12px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.08)",
		},

		zIndices: {
			dialogOverlay: 400,
			subscribeButton: 300,
			introModalImg: 200,
			introImgOverlay: 100,
		},

		fonts: {
			sans: "-apple-system, system-ui, helvetica, sans-serif",
			mono: "'iA Writer Mono S', Courier, Mono",
		},
	},

	media: {
		_: bp(0),
		sm: bp(480),
		md: bp(768),
		lg: bp(1024),
		xlg: bp(1280),
	},

	utils: {
		z: (value: Stitches.PropertyValue<"zIndex">) => ({
			zIndex: value,
		}),
		/* sizes */
		w: (value: Stitches.PropertyValue<"width">) => ({
			width: value,
		}),
		minw: (value: Stitches.PropertyValue<"minWidth">) => ({
			minWidth: value,
		}),
		maxw: (value: Stitches.PropertyValue<"maxWidth">) => ({
			maxWidth: value,
		}),
		h: (value: Stitches.PropertyValue<"height">) => ({
			height: value,
		}),
		minh: (value: Stitches.PropertyValue<"minHeight">) => ({
			minHeight: value,
		}),
		maxh: (value: Stitches.PropertyValue<"maxHeight">) => ({
			maxHeight: value,
		}),
		s: (value: number | string) => ({
			width: value,
			height: value,
		}),
		mins: (value: number | string) => ({
			minWidth: value,
			minHeight: value,
		}),
		maxs: (value: number | string) => ({
			maxWidth: value,
			maxHeight: value,
		}),

		/* colors */
		fg: (value: Stitches.PropertyValue<"color">) => ({
			color: value,
		}),
		bg: (value: Stitches.PropertyValue<"background">) => ({
			background: value,
		}),

		/* flexes */
		flexes: (value: string) => ({
			...setFlexGroup(value),
		}),

		/* paddings */
		p: (value: Stitches.PropertyValue<"padding">) => ({
			padding: value,
		}),
		px: (value: Stitches.PropertyValue<"padding">) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		py: (value: Stitches.PropertyValue<"padding">) => ({
			paddingTop: value,
			paddingBottom: value,
		}),
		pt: (value: Stitches.PropertyValue<"padding">) => ({
			paddingTop: value,
		}),
		pr: (value: Stitches.PropertyValue<"padding">) => ({
			paddingRight: value,
		}),
		pb: (value: Stitches.PropertyValue<"padding">) => ({
			paddingBottom: value,
		}),
		pl: (value: Stitches.PropertyValue<"padding">) => ({
			paddingLeft: value,
		}),

		/* margins */
		m: (value: Stitches.PropertyValue<"margin">) => ({
			margin: value,
		}),
		mx: (value: Stitches.PropertyValue<"margin">) => ({
			marginLeft: value,
			marginRight: value,
		}),
		my: (value: Stitches.PropertyValue<"margin">) => ({
			marginTop: value,
			marginBottom: value,
		}),
		mt: (value: Stitches.PropertyValue<"margin">) => ({
			marginTop: value,
		}),
		mr: (value: Stitches.PropertyValue<"margin">) => ({
			marginRight: value,
		}),
		mb: (value: Stitches.PropertyValue<"margin">) => ({
			marginBottom: value,
		}),
		ml: (value: Stitches.PropertyValue<"margin">) => ({
			marginLeft: value,
		}),

		/* borders */
		b: (value: Stitches.PropertyValue<"border">) => ({
			border: value,
		}),
		bt: (value: Stitches.PropertyValue<"border">) => ({
			borderTop: value,
		}),
		br: (value: Stitches.PropertyValue<"border">) => ({
			borderRight: value,
		}),
		bb: (value: Stitches.PropertyValue<"border">) => ({
			borderBottom: value,
		}),
		bl: (value: Stitches.PropertyValue<"border">) => ({
			borderLeft: value,
		}),
		bc: (value: Stitches.PropertyValue<"borderColor">) => ({
			borderColor: value,
		}),
		radius: (value: Stitches.PropertyValue<"borderRadius">) => ({
			borderRadius: value,
		}),
	},
});
