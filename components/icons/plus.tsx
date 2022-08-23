import { Box, IconBase } from "../primitives";

export const PlusIcon = ({ fg = "$fg" }) => {
	return (
		<IconBase>
			<Box
				as="path"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.75 5C10.75 4.58579 10.4142 4.25 10 4.25C9.58579 4.25 9.25 4.58579 9.25 5V9.25H5C4.58579 9.25 4.25 9.58579 4.25 10C4.25 10.4142 4.58579 10.75 5 10.75H9.25V15C9.25 15.4142 9.58579 15.75 10 15.75C10.4142 15.75 10.75 15.4142 10.75 15V10.75H15C15.4142 10.75 15.75 10.4142 15.75 10C15.75 9.58579 15.4142 9.25 15 9.25H10.75V5Z"
				css={{ fill: fg }}
				strokeWidth="1.5"
			/>
		</IconBase>
	);
};
