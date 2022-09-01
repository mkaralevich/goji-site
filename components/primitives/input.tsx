import { styled } from "../../styles/stitches.config";
import { t } from "./text";

const Input = styled("input", {
	all: "unset",
	boxSizing: "border-box",

	w: "100%",
	radius: "$input",
	p: 16,
	bg: "$gray",

	...t[100],
	color: "black",
	outline: "0px",
	transition: "outline .2s",

	"&:focus": { outline: "4px solid $blue", bg: "$white" },
});

export default Input;
