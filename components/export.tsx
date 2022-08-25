import { Box } from "./primitives";

export default function Export() {
	return (
		<Box
			as="svg"
			width="100%"
			height="100%"
			viewBox="0 0 332 332"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="8.5"
				y="8.5"
				width="315"
				height="315"
				rx="63.5"
				fill="url(#paint0_linear_4_411)"
				stroke="white"
			/>
			<rect
				x="16.5"
				y="185.5"
				width="130"
				height="130"
				rx="55.5"
				fill="url(#paint1_linear_4_411)"
				stroke="white"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_4_411"
					x1="166"
					y1="8"
					x2="166"
					y2="324"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FF8329" />
					<stop offset="1" stopColor="#FF8329" stopOpacity="0.84" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_4_411"
					x1="81.5"
					y1="185"
					x2="81.5"
					y2="316"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FF8329" />
					<stop offset="1" stopColor="#FF8329" stopOpacity="0.84" />
				</linearGradient>
			</defs>
		</Box>
	);
}
