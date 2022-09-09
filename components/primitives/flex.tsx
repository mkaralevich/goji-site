import { styled } from "../../styles/stitches.config";

const sizes = (key: string) => {
	return {
		sm: { [key]: 16 },
		md: { [key]: 16, "@sm": { [key]: 32 } },
		lg: { [key]: 48, "@sm": { [key]: 48 }, "@md": { [key]: 80 } },
		xlg: { [key]: 80, "@sm": { [key]: 128 }, "@md": { [key]: 128 } },
	};
};

export const Flex = styled("div", {
	boxSizing: "border-box",
	display: "flex",

	variants: {
		fill: { true: { width: "100%" } },

		center: { true: { alignItems: "center", justifyContent: "center" } },

		dir: {
			row: { flexDirection: "row" },
			col: { flexDirection: "column" },
		},

		align: {
			start: { alignItems: "flex-start" },
			center: { alignItems: "center" },
			end: { alignItems: "flex-end" },
		},

		justify: {
			start: { justifyContent: "flex-start" },
			center: { justifyContent: "center" },
			end: { justifyContent: "flex-end" },
			between: { justifyContent: "space-between" },
		},

		wrap: {
			noWrap: { flexWrap: "nowrap" },
			wrap: { flexWrap: "wrap" },
		},

		gap: sizes("gap"),
		/* paddings */
		p: sizes("p"),
		px: sizes("px"),
		pt: sizes("pt"),
		pb: sizes("pb"),
		py: sizes("py"),
		pl: sizes("pl"),
		pr: sizes("pr"),
		/* margins */
		m: sizes("m"),
		mx: sizes("mx"),
		mt: sizes("mt"),
		mb: sizes("mb"),
		my: sizes("my"),
		ml: sizes("ml"),
		mr: sizes("mr"),
	},
});
