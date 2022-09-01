import React from "react";
import { styled, keyframes } from "../../styles/stitches.config";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export const Root = DialogPrimitive.Root;
export const Trigger = DialogPrimitive.Trigger;
export const Close = DialogPrimitive.Close;

const overlayShow = keyframes({
	"0%": { opacity: 0 },
	"100%": { opacity: 1 },
});

const contentShow = keyframes({
	"0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
	"100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const _Overlay = styled(DialogPrimitive.Overlay, {
	bg: "transparent",
	position: "fixed",
	inset: 0,
	"@media (prefers-reduced-motion: no-preference)": {
		animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
	},
});

const _Content = styled(DialogPrimitive.Content, {
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

	"@media (prefers-reduced-motion: no-preference)": {
		animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
	},

	"&:focus": { outline: "none" },
});

export function Content({ children, ...props }) {
	return (
		<DialogPrimitive.Portal>
			<_Overlay />
			<_Content {...props}>{children}</_Content>
		</DialogPrimitive.Portal>
	);
}
