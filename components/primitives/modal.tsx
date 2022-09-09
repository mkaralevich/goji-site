import React from "react";
import { styled, keyframes } from "../../styles/stitches.config";
import * as Primitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { t } from "./text";

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
	z: "$dialogOverlay",

	bg: "$overlay",
	display: "grid",
	placeItems: "start center",
	transition: "background 1s",
	overflowY: "auto",

	"@sm": { bg: "$overlay", placeItems: "center" },
});

export const Title = styled(Primitive.Title, {
	...t[300],
	w: "100%",
});

export const Description = styled(Primitive.Description, {
	...t[50],
	fg: "$secondary",
	w: "100%",
});

const _Content = styled("div", {
	position: "relative",
	w: "calc(100% - 8px)",
	display: "flex",
	flexes: "css",
	my: 4,
	py: 24,
	gap: 24,
	bg: "$white",
	boxShadow: "$elevationLarge",
	radius: "$modal",

	"&:focus": { outline: "none" },
	"@sm": { w: 420 },
});

export const Content = React.forwardRef<
	HTMLDivElement,
	Primitive.DialogContentProps
>(({ children, ...props }, ref) => {
	return (
		<Primitive.Portal>
			<_Overlay>
				<Primitive.Content asChild {...props}>
					<_Content
						key="modal"
						ref={ref}
						as={motion.div}
						initial={{ opacity: 0, y: -120 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 120 }}
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
			</_Overlay>
		</Primitive.Portal>
	);
});

Content.displayName = "Content";
