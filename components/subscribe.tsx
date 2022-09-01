import React from "react";
import SubscribeButton from "./subscribe-button";
import * as Dialog from "./primitives/dialog";
import * as Radio from "./primitives/radio";
import { Button, Flex, Text } from "./primitives";
import ArrowIcon from "./icons/arrow-icon";
import XIcon from "./icons/x-icon";
import Input from "./primitives/input";
import Label from "./primitives/label";

export default function Subscribe() {
	const [modalOpened, setModalOpened] = React.useState();

	// function handleSubmit(e) {
	// 	e.preventDefault();

	// 	const form = e.target;
	// 	fetch("***REMOVED***", {
	// 		method: "POST",
	// 		mode: "no-cors",
	// 		body: new FormData(form),
	// 	}).then(() => {
	// 		setSignedUp(true);
	// 		setEmail("");
	// 		(document.activeElement as HTMLElement).blur();
	// 		setTimeout(() => {
	// 			setSignedUp(false);
	// 		}, 3000);
	// 		form.reset();
	// 	});
	// }

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<SubscribeButton />
			</Dialog.Trigger>

			<Dialog.Content>
				<Flex fill css={{ flexes: "rbc" }}>
					<Text t="200">Almost there</Text>
					<Dialog.Close asChild>
						<Button aria-label="Close" variant="close">
							<XIcon />
						</Button>
					</Dialog.Close>
				</Flex>

				<Flex as="form" fill css={{ flexes: "css", gap: 24 }}>
					<Input id="email" type="email" placeholder="Enter email" />

					<Radio.Root aria-label="User type">
						<Flex fill css={{ flexes: "css", gap: 24 }}>
							<Radio.Group>
								<Label variant="legend">How do you want to use Goji?</Label>
								<Radio.Item id="parent" value="parent">
									As a parent
								</Radio.Item>
								<Radio.Item id="teacher" value="teacher">
									As a teacher
								</Radio.Item>
								<Radio.Item id="browsing" value="browsing">
									Just browsing
								</Radio.Item>
							</Radio.Group>

							<Radio.Group>
								<Label variant="legend">How many students?</Label>
								<Radio.Item id="1" value="1">
									1
								</Radio.Item>
								<Radio.Item id="2" value="2">
									2-5
								</Radio.Item>
								<Radio.Item id="3" value="3">
									5+
								</Radio.Item>
							</Radio.Group>

							<Radio.Group>
								<Label variant="legend">How did you hear about us?</Label>
								<Radio.Item id="1" value="1">
									Social
								</Radio.Item>
								<Radio.Item id="2" value="2">
									From friends
								</Radio.Item>
								<Radio.Item id="3" value="3">
									Other
								</Radio.Item>
							</Radio.Group>
						</Flex>
					</Radio.Root>

					<Dialog.Close asChild>
						<Button variant="send">
							Send <ArrowIcon />
						</Button>
					</Dialog.Close>
				</Flex>
			</Dialog.Content>
		</Dialog.Root>
	);
}
