import * as React from "react";
import SubscribeButton from "./subscribe-button";
import * as Dialog from "./primitives/modal";
import * as Radio from "./primitives/radio";
import { Button, Flex, Text } from "./primitives";
import ArrowIcon from "./icons/arrow-icon";
import XIcon from "./icons/x-icon";
import Input from "./primitives/input";
import Label from "./primitives/label";

const MAILCHIMP = {
	URL: "https://school.us11.list-manage.com/subscribe/post",
	U: "9250a58d9f9545d9c1a77cdfc",
	ID: "21ac349c1f",
};
// const MAILCHIMP = {
// 	URL: process.env.NEXT_PUBLIC_MAILCHIMP_URL as string,
// 	U: process.env.NEXT_PUBLIC_MAILCHIMP_U as string,
// 	ID: process.env.NEXT_PUBLIC_MAILCHIMP_ID as string,
// };

console.log(
	"process.env.NEXT_PUBLIC_MAILCHIMP_URL:",
	process.env.MAILCHIMP_URL
);

export default function Subscribe() {
	const [modalOpened, setModalOpened] = React.useState(false);
	const [submitted, setSubmitted] = React.useState(false);
	const [email, setEmail] = React.useState("");

	async function handleSubmit(e) {
		e.preventDefault();

		const form = e.target;
		const response = await fetch(MAILCHIMP.URL, {
			method: "POST",
			mode: "no-cors",
			body: new FormData(form),
		});

		if (!response.ok) {
			console.log("response:", response.status);
		}

		setSubmitted(true);
		setModalOpened(false);
		form.reset();
		setEmail("");

		setTimeout(() => {
			setSubmitted(false);
		}, 4000);
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
				<Flex
					fill
					css={{
						flexes: "css",
						px: 24,
						gap: 8,
						// bb: "1px solid $borderSecondary",
					}}
				>
					<Dialog.Title>Join waitlist</Dialog.Title>
					<Dialog.Description>
						We'll notify you about product updates and when we have beta ready
						to try.
					</Dialog.Description>
				</Flex>

				<Flex
					as="form"
					onSubmit={handleSubmit}
					// action="https://school.us11.list-manage.com/subscribe/post?u=9250a58d9f9545d9c1a77cdfc&amp;id=21ac349c1f&amp;f_id=00f591e0f0"
					// method="post"
					// debug

					fill
					css={{ flexes: "css", gap: 24, px: 24 }}
				>
					{/* <Flex fill>
						<Text t="50" fg="secondary">
							We'll notify you about product updates and when we have beta ready
							to try.
						</Text>
					</Flex> */}
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

					<Button type="submit" variant="send" disabled={submitted}>
						Send <ArrowIcon />
					</Button>
				</Flex>
				<Dialog.Close asChild>
					<Button
						css={{
							position: "absolute",
							top: 4,
							right: 4,
							"@sm": { top: 8, right: 8 },
						}}
						aria-label="Close"
						variant="close"
					>
						<XIcon />
					</Button>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Root>
	);
}
