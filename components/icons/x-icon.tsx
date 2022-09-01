import { Box } from "../primitives";

export default function XIcon() {
	const size = 24;
	return (
		<Box
			as="svg"
			css={{ h: size, w: size, minh: size, minw: size }}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6.55762 6.55737L17.4429 17.4427"
				stroke="#171717"
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.55762 17.4426L17.4429 6.55735"
				stroke="#171717"
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Box>
	);
}
