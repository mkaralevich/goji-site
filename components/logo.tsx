import { styled } from "../styles/stitches.config";
import { Box } from "./primitives";

const Wrapper = styled("div", {
	bg: "$white",

	variants: {
		size: {
			small: {
				w: 48,
				h: 48,
				p: 8,
				radius: "12px",
				boxShadow: "$elevationSmall",
				"@md": {
					w: 56,
					h: 56,
					p: 8,
					radius: "16px",
					boxShadow: "$elevationLarge",
				},
			},
			large: {
				w: 96,
				h: 96,
				p: 12,
				radius: "24px",
				boxShadow: "$elevationSmall",
				"@md": {
					w: 128,
					h: 128,
					p: 16,
					radius: "32px",
					boxShadow: "$elevationLarge",
				},
			},
		},
	},
	defaultVariants: { size: "small" },
});

export default function Logo({ size = "small" }: { size: "small" | "large" }) {
	return (
		<Wrapper size={size}>
			<Box
				as="svg"
				width="100%"
				height="100%"
				viewBox="0 0 56 56"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M46.1185 39.0639C47.0043 32.5136 42.4123 26.4854 35.8619 25.5996C29.3116 24.7138 23.2834 29.3058 22.3976 35.8562C21.5118 42.4065 25.3183 54.2439 31.8686 55.1297C38.419 56.0155 45.2327 45.6143 46.1185 39.0639Z"
					fill="#FB4926"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M9.17365 28.0097C8.61961 21.423 13.51 15.6343 20.0967 15.0803C25.8654 14.595 31.022 18.2859 32.5861 23.635C26.4416 24.3739 21.3294 29.176 20.4615 35.5943C20.1025 38.2491 20.4241 41.5539 21.289 44.74C15.1996 43.9224 9.69094 34.1594 9.17365 28.0097Z"
					fill="#FB4926"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M46.1973 11.6803C40.5878 16.054 37.0113 22.0691 36.8202 31.175L32.913 31.0929C33.1294 20.7823 37.2812 13.6767 43.7943 8.59831L46.1973 11.6803Z"
					fill="#3E7247"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M21.0603 10.4905C21.9467 14.1367 22.5507 18.0229 22.8199 21.2242L18.9257 21.5517C18.6729 18.5464 18.1006 14.8595 17.2629 11.4137C16.414 7.92181 15.3376 4.8697 14.1564 3.00559L17.4575 0.913803C18.9896 3.33159 20.1851 6.89034 21.0603 10.4905Z"
					fill="#3E7247"
				/>
			</Box>
		</Wrapper>
	);
}
