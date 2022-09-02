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
	css?: CSS;
};

const SubscribeButton = forwardRef<HTMLButtonElement, ButtonOwnProps>(
	({ modalOpened, setModalOpened, submitted, ...props }, ref) => {
		const { scrollYProgress } = useScroll();
		const [pageEnd, setPageEnd] = React.useState(false);

		const setButtonY = () => {
			if (modalOpened) return 320;
			else if (pageEnd) return "-25vh";
			return 0;
		};

		React.useEffect(() => {
			return scrollYProgress.onChange((latest) => {
				setPageEnd(latest > 0.9);
			});
		}, [scrollYProgress]);

		return (
			<Flex
				as={motion.div}
				initial={{ y: 320 }}
				animate={{ y: 0 }}
				transition={{ ...TRANSITION, delay: 0.5 }}
				fill
				px="md"
				py="md"
				css={{ position: "fixed", z: "$subscribe", bottom: 0, flexes: "ccc" }}
			>
				<Button
					ref={ref}
					{...props}
					onClick={() => setModalOpened(true)}
					initial={{ width: 320, y: 0, scale: 0.8 }}
					animate={{
						width: pageEnd ? 420 : 320,
						y: setButtonY(),
						scale: 1,
					}}
					whileHover={{ y: -4 }}
					transition={TRANSITION}
				>
					<MailIcon />
					{submitted ? "Thank you!" : "Join waitlist"}
				</Button>
			</Flex>
		);
	}
);

SubscribeButton.displayName = "SubscribeButton";
export default SubscribeButton;
