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

	bg: "$white",
	display: "grid",
	placeItems: "top",
	transition: "background 1s",
	overflowY: "auto",

	"@sm": { bg: "$overlay", placeItems: "center" },
});

export const Title = styled(Primitive.Title, { ...t["200"] });

const _Content = styled("div", {
	position: "relative",
	w: "100%",
	display: "flex",
	flexes: "css",
	p: 24,
	gap: 24,
	bg: "$white",
	boxShadow: "$elevation",
	radius: 0,

	"&:focus": { outline: "none" },
	"@sm": { w: 420, radius: "$modal" },
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
