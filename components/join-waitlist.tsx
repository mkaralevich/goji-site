import Logo from "./logo";
import { Button, Flex, t } from "./primitives";

export default function JoinWaitlist() {
	return (
		<Button
			css={{
				position: "fixed",
				top: 32,
				left: 32,
				...t["400b"],
			}}
		>
			<Logo /> GOJI
		</Button>
	);
}
