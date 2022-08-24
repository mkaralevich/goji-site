import { JoinWaitlist } from "../components/join-waitlist";
import Intro from "../components/intro";
import Progress from "../components/progress";
import Outro from "../components/outro";
import Footer from "../components/footer";

export default function Index() {
	return (
		<>
			<JoinWaitlist />
			<Intro />
			<Progress />
			<Outro />
			<Footer />
		</>
	);
}
