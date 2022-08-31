import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import ArrowIcon from "./arrow-icon";
import MailIcon from "./mail-icon";
import { Flex } from "./primitives";

export default function Subscribe() {
	const { scrollYProgress } = useScroll();
	const [isPageEnd, setIsPageEnd] = useState(false);
	const [focused, setFocused] = useState(false);
	const [signedUp, setSignedUp] = useState(false);
	const [email, setEmail] = useState("");

	useEffect(() => {
		return scrollYProgress.onChange((latest) => {
			setIsPageEnd(latest > 0.9);
		});
	}, [scrollYProgress]);

	const transition = {
		type: "spring",
		stiffness: 200,
		damping: 40,
		mass: 0.5,
	};

	const activeInput = focused || email.length > 0;

	function handleSubmit(e) {
		e.preventDefault();

		const form = e.target;
		fetch("***REMOVED***", {
			method: "POST",
			mode: "no-cors",
			body: new FormData(form),
		}).then(() => {
			setSignedUp(true);
			setEmail("");
			(document.activeElement as HTMLElement).blur();
			setTimeout(() => {
				setSignedUp(false);
			}, 3000);
			form.reset();
		});
	}

	return (
		<Flex
			as={motion.div}
			fill
			initial={{ y: 120, scale: 0.8 }}
			animate={{ y: 0, scale: 1 }}
			transition={{ ...transition, delay: 0.5 }}
			px="md"
			py="md"
			css={{
				position: "fixed",
				z: "$subscribe",
				bottom: 0,
				flexes: "ccc",
			}}
		>
			<Flex
				as={motion.form}
				onSubmit={handleSubmit}
				animate={{
					y: isPageEnd ? "-25vh" : 0,
					width: isPageEnd || activeInput ? 420 : 320,
				}}
				transition={transition}
				css={{
					flexes: "rcc",
					cursor: focused ? "text" : "pointer",
					bg: "$orange",
					py: 16,
					px: 24,
					gap: 16,
					radius: 24,
					maxw: "100%",

					"@sm": { radius: 32, px: 32, w: "auto" },
				}}
			>
				<MailIcon />
				<input type="hidden" name="u" value="***REMOVED***" />
				<input type="hidden" name="id" value="***REMOVED***" />
				<Flex
					as="input"
					type="email"
					name="MERGE0"
					id="MERGE0"
					placeholder={signedUp ? "Thank you!" : "Join waitlist"}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					onFocus={(e) => {
						setFocused(true);
						e.target.placeholder = signedUp ? "Thank you" : "Enter email...";
					}}
					onBlur={(e) => {
						setFocused(false);
						e.target.placeholder = signedUp ? "Thank you!" : "Join waitlist";
					}}
					css={{
						all: "unset",
						w: "100%",
						fontSize: "20px",
						lineHeight: "32px",
						fontWeight: 400,
						fontFamily: "$sans",
						textAlign: activeInput ? "left" : "center",
						fg: "$white",

						"@sm": { fontSize: "28px", lineHeight: "48px" },

						"&::placeholder": {
							fg: "$white",
							opacity: 1,
							transition: "opacity 1s",
						},
						"&:focus": { "&::placeholder": { opacity: 0.4 } },
					}}
				/>
				<Flex
					as="button"
					type="submit"
					aria-label="Subscribe"
					css={{
						all: "unset",
						opacity: activeInput ? 1 : 0,
						cursor: "pointer",
						display: "flex",
						flexes: "ccc",
					}}
				>
					<ArrowIcon />
				</Flex>
			</Flex>
		</Flex>
	);
}
