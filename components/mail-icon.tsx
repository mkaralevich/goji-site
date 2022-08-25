import { Box } from "./primitives";

export default function MailIcon() {
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
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.99778 4.59991L16.999 4.5999C18.2264 4.5999 19.3364 5.10249 20.1345 5.91311L12.0001 12.2399L3.86376 5.91165C4.66165 5.1019 5.77109 4.59991 6.99778 4.59991ZM3.14526 6.87305C2.79683 7.50306 2.59848 8.22763 2.59845 8.99855C2.59839 10.999 2.59853 12.9994 2.59868 14.9999C2.59885 17.43 4.56887 19.3999 6.99892 19.3999H16.9998C19.4295 19.3999 21.3992 17.4305 21.3993 15.001C21.3993 13.0006 21.3992 11.0003 21.3991 8.99992C21.3991 8.22919 21.2009 7.50475 20.8527 6.87477L12.3684 13.4736C12.1518 13.6421 11.8484 13.6421 11.6317 13.4736L3.14526 6.87305ZM21.495 5.66078C22.1886 6.59311 22.599 7.74855 22.5991 8.99985L22.5991 9.0704C22.5992 11.0472 22.5993 13.0241 22.5993 15.001C22.5992 18.0934 20.0921 20.5999 16.9998 20.5999H6.99892C3.90612 20.5999 1.3989 18.0927 1.39868 15C1.39853 12.9995 1.39839 10.999 1.39845 8.99851C1.39855 5.90618 3.90562 3.39992 6.99778 3.39991L16.999 3.3999C18.8219 3.39991 20.4414 4.27094 21.464 5.61952C21.4673 5.62351 21.4705 5.62755 21.4737 5.63165C21.4811 5.64121 21.4882 5.65093 21.495 5.66078Z"
				fill="#fff"
			/>
		</Box>
	);
}
