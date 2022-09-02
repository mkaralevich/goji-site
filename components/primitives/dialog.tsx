import React from "react";
import { styled, keyframes } from "../../styles/stitches.config";
import * as Primitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";

export const Root = Primitive.Root;
export const Trigger = Primitive.Trigger;
export const Close = Primitive.Close;

const contentShow = keyframes({
	"0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
	"100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const _Overlay = styled(Primitive.Overlay, {
	position: "fixed",
	inset: 0,
	bg: "$overlay",
	transition: "background 1s",
});

const _Content = styled("div", {
	position: "fixed",
	top: "50%",
	left: "50%",
	w: 420,
	maxw: "450px",
	maxh: "85vh",

	display: "flex",
	flexes: "css",
	gap: 24,

	bg: "$white",
	boxShadow: "$elevation",
	transform: "translate(-50%, -50%)",
	radius: "$modal",
	p: 24,

	"&:focus": { outline: "none" },
});

export const Content = React.forwardRef<
	HTMLDivElement,
	Primitive.DialogContentProps
>(({ children, ...props }, ref) => {
	return (
		<Primitive.Portal>
			<_Overlay />
			<Primitive.Content asChild {...props}>
				<_Content
					key="modal"
					ref={ref}
					as={motion.div}
					initial={{ opacity: 0, x: "-50%", y: "-40%" }}
					animate={{ opacity: 1, x: "-50%", y: "-50%" }}
					exit={{ opacity: 0, x: "-50%", y: "-40%" }}
					transition={{
						type: "spring",
						stiffness: 200,
						damping: 20,
						mass: 1,
					}}
				>
					{children}
				</_Content>
			</Primitive.Content>
		</Primitive.Portal>
	);
});

Content.displayName = "Content";
