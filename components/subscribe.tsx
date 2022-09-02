import * as React from "react";
import SubscribeButton from "./subscribe-button";
import * as Dialog from "./primitives/dialog";
import * as Radio from "./primitives/radio";
import { Button, Flex, Text } from "./primitives";
import ArrowIcon from "./icons/arrow-icon";
import XIcon from "./icons/x-icon";
import Input from "./primitives/input";
import Label from "./primitives/label";

const INITIAL_FORM = {
	u: "***REMOVED***",
	id: "***REMOVED***",
	EMAIL: "",
	ROLE: "",
	STUDENTS: "",
	MERGE3: "",
};

export default function Subscribe() {
	const [modalOpened, setModalOpened] = React.useState(false);
	const [submitted, setSubmitted] = React.useState(false);
	const [values, setValues] = React.useState(INITIAL_FORM);

	function handleSubmit(e) {
		e.preventDefault();

		console.log("data", e.target);

		function getFormData(object) {
			const formData = new FormData();
			Object.keys(object).forEach((key) => formData.append(key, object[key]));
			return formData;
		}
		const form = getFormData(values);
		console.log("form:", form);

		fetch("***REMOVED***", {
			method: "POST",
			mode: "no-cors",
			body: form,
		}).then(() => {
			setSubmitted(true);
			// setModalOpened(false);
			setTimeout(() => {
				setSubmitted(false);
			}, 3000);
		});
	}

	return (
		<Dialog.Root open={modalOpened} onOpenChange={setModalOpened}>
			<Dialog.Trigger asChild>
				<SubscribeButton
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
					<input type="hidden" name="u" value="***REMOVED***" />
					<input type="hidden" name="id" value="***REMOVED***" />
					<Input
						id="mce-EMAIL"
						name="EMAIL"
						value={values.EMAIL}
						onChange={(e) => setValues({ ...values, EMAIL: e.target.value })}
						type="email"
						required
						placeholder="Enter email"
					/>

					<Flex fill css={{ flexes: "css", gap: 24 }}>
						<Radio.Root
							name="ROLE"
							aria-label="User role"
							value={values.ROLE}
							onValueChange={(value) => setValues({ ...values, ROLE: value })}
						>
							<Radio.Group>
								<Label htmlFor="ROLE" variant="legend">
									How do you want to use Goji?
								</Label>
								<Radio.Item id="mce-ROLE-0" name="ROLE" value="parent">
									As a parent
								</Radio.Item>
								<Radio.Item id="mce-ROLE-1" name="ROLE" value="teacher">
									As a teacher
								</Radio.Item>
								<Radio.Item id="mce-ROLE-2" name="ROLE" value="browsing">
									Just browsing
								</Radio.Item>
							</Radio.Group>
						</Radio.Root>

						<Radio.Root
							name="STUDENTS"
							aria-label="Number of students"
							value={values.STUDENTS}
							onValueChange={(value) =>
								setValues({ ...values, STUDENTS: value })
							}
						>
							<Radio.Group>
								<Label htmlFor="STUDENTS" variant="legend">
									How many students?
								</Label>
								<Radio.Item id="mce-STUDENTS-0" name="STUDENTS" value="1">
									1
								</Radio.Item>
								<Radio.Item id="mce-STUDENTS-1" name="STUDENTS" value="2">
									2-5
								</Radio.Item>
								<Radio.Item id="mce-STUDENTS-2" name="STUDENTS" value="3">
									5+
								</Radio.Item>
							</Radio.Group>
						</Radio.Root>

						<Radio.Root
							name="CHANNEL"
							aria-label="Channel"
							value={values.MERGE3}
							onValueChange={(value) => setValues({ ...values, MERGE3: value })}
						>
							<Radio.Group id="mergeRow-3">
								<Label htmlFor="MERGE3" variant="legend">
									How did you hear about us?
								</Label>
								<Radio.Item id="mce-CHANNEL-0" name="CHANNEL" value="social">
									Social
								</Radio.Item>
								<Radio.Item id="mce-CHANNEL-1" name="CHANNEL" value="friends">
									From friends
								</Radio.Item>
								<Radio.Item id="mce-CHANNEL-2" name="CHANNEL" value="other">
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
