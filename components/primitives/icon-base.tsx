import React from "react";
import { Box } from "./box";

type Props = {
	children: React.ReactNode;
	size?: number;
};

export const IconBase = ({ children, size = 20 }: Props) => {
	return (
		<Box
			as="svg"
			width={size}
			height={size}
			viewBox={`0 0 ${size} ${size}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{children}
		</Box>
	);
};
