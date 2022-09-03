import * as React from "react";
import SubscribeButton from "./subscribe-button";
import * as Dialog from "./primitives/dialog";
import * as Radio from "./primitives/radio";
import { Button, Flex, Text } from "./primitives";
import ArrowIcon from "./icons/arrow-icon";
import XIcon from "./icons/x-icon";
import Input from "./primitives/input";
import Label from "./primitives/label";

const MAILCHIMP = {
	URL: process.env.MAILCHIMP_URL as string,
	U: process.env.MAILCHIMP_U as string,
	ID: process.env.MAILCHIMP_ID as string,
};

export default function Subscribe() {
	const [modalOpened, setModalOpened] = React.useState(false);
	const [submitted, setSubmitted] = React.useState(false);
	const [email, setEmail] = React.useState("");

	function handleSubmit(e) {
		e.preventDefault();

		const form = e.target;

		fetch(MAILCHIMP.URL, {
			method: "POST",
			mode: "no-cors",
			body: new FormData(form),
		}).then(() => {
			setSubmitted(true);
			setModalOpened(false);
			form.reset();
			setTimeout(() => {
				setSubmitted(false);
			}, 4000);
		});
	}

	return (
		<Dialog.Root open={modalOpened} onOpenChange={setModalOpened}>
			<Dialog.Trigger asChild>
				<SubscribeButton
					submitted={submitted}
					modalOpened={modalOpened}
					setModalOpened={setModalOpened}
				/>
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

				<Flex
					as="form"
					onSubmit={handleSubmit}
					fill
					css={{ flexes: "css", gap: 24 }}
				>
					<input type="hidden" name="u" value={MAILCHIMP.U} />
					<input type="hidden" name="id" value={MAILCHIMP.ID} />
					<Input
						name="EMAIL"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						required
						placeholder="Enter email"
					/>

					<Flex fill css={{ flexes: "css", gap: 24 }}>
						<Radio.Root name="ROLE" aria-label="User role" required>
							<Radio.Group>
								<Label htmlFor="ROLE" variant="legend">
									How do you want to use Goji?
								</Label>
								<Radio.Item id="r0" value="I am a parent">
									As a parent
								</Radio.Item>
								<Radio.Item id="r1" value="I am a teacher">
									As a teacher
								</Radio.Item>
								<Radio.Item id="r2" value="I am just looking">
									Just browsing
								</Radio.Item>
							</Radio.Group>
						</Radio.Root>

						<Radio.Root
							name="STUDENTS"
							aria-label="Number of students"
							required
						>
							<Radio.Group>
								<Label htmlFor="STUDENTS" variant="legend">
									How many students?
								</Label>
								<Radio.Item id="s0" value="1">
									1
								</Radio.Item>
								<Radio.Item id="s1" value="2-5">
									2-5
								</Radio.Item>
								<Radio.Item id="s2" value="5+">
									5+
								</Radio.Item>
							</Radio.Group>
						</Radio.Root>

						<Radio.Root name="CHANNEL" aria-label="Channel" required>
							<Radio.Group>
								<Label htmlFor="CHANNEL" variant="legend">
									How did you hear about us?
								</Label>
								<Radio.Item id="c0" value="Social">
									Social
								</Radio.Item>
								<Radio.Item id="c1" value="Friends">
									From friends
								</Radio.Item>
								<Radio.Item id="c2" value="Other">
									Other
								</Radio.Item>
							</Radio.Group>
						</Radio.Root>
					</Flex>

					<Button type="submit" variant="send">
						Send <ArrowIcon />
					</Button>
				</Flex>
			</Dialog.Content>
		</Dialog.Root>
	);
}
