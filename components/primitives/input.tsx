import { styled } from "../../styles/stitches.config";
import { t } from "./text";

const Input = styled("input", {
	all: "unset",
	boxSizing: "border-box",

	w: "100%",
	radius: "$input",
	p: 16,
	bg: "$inputBg",

	...t[50],
	color: "black",
	// outline: "0px",
	boxShadow: "none",
	transition: "box-shadow .1s",

	"&:focus": { boxShadow: "0px 0px 0px 3px $colors$blue", bg: "$white" },
});

export default Input;
