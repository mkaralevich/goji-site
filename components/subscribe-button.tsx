import { motion, useScroll } from "framer-motion";
import React, { forwardRef } from "react";
import { CSS, VariantProps } from "../styles/stitches.config";
import MailIcon from "./icons/mail-icon";
import { Button, Flex } from "./primitives";

const TRANSITION = {
	type: "spring",
	stiffness: 200,
	damping: 40,
	mass: 0.5,
};

type ButtonOwnProps = VariantProps<typeof Button> & {
	modalOpened: boolean;
	setModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
	submitted: boolean;
	isInView: any;
	css?: CSS;
};

const SubscribeButton = forwardRef<HTMLButtonElement, ButtonOwnProps>(
	({ modalOpened, setModalOpened, submitted, isInView, ...props }, ref) => {
		// const { scrollYProgress } = useScroll();
		const [pageEnd, setPageEnd] = React.useState(false);

		const setButtonY = () => {
			if (modalOpened) return 320;
			else if (pageEnd) return "-20vh";
			return 0;
		};

		React.useEffect(() => {
			console.log("Element is in view: ", isInView);
			setPageEnd(isInView);
		}, [isInView]);

		return (
			<Flex
				as={motion.nav}
				initial={{ y: 320 }}
				animate={{ y: 0 }}
				transition={{ ...TRANSITION, delay: 0.5 }}
				fill
				px="md"
				py="md"
				css={{
					position: "fixed",
					z: "$subscribeButton",
					bottom: 0,
					flexes: "ccc",
				}}
			>
				<Flex
					as={motion.div}
					initial={{ y: 0, scale: 0.8 }}
					animate={{ y: setButtonY(), scale: 1 }}
					transition={TRANSITION}
				>
					<Button
						ref={ref}
						{...props}
						onClick={() => setModalOpened(true)}
						css={{
							width: 320,
							boxShadow: "$elevationLarge",
							"@sm": { width: pageEnd ? 420 : 320 },
						}}
					>
						<MailIcon />
						{submitted ? "Subscribed!" : "Join waitlist"}
					</Button>
				</Flex>
			</Flex>
		);
	}
);

SubscribeButton.displayName = "SubscribeButton";
export default SubscribeButton;
