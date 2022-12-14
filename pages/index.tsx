import Intro from "../components/intro";
import Progress from "../components/progress";
import Outro from "../components/outro";
import Subscribe from "../components/subscribe";
import { Flex } from "../components/primitives";
import Head from "next/head";
import { motion } from "framer-motion";
import Script from "next/script";
import Pitch from "../components/pitch";

const title = "GOJI · Education tracker";
const ogTitle = "GOJI · Organize education for your kids";
const description =
	"Goji helps parents organize education for their kids and stay on track";

export default function Index() {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content={description} />
				<meta
					name="keywords"
					content="education, tracker, organizer, school, curriculum, unschool, kids, students"
				/>
				<meta property="og:title" content={ogTitle} key="title" />
				<meta property="og:description" content={description} />
				<meta property="og:url" content="https://gogoji.app" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://gogoji.app/og.jpg" />
				<meta property="image:width" content="1280" />
				<meta property="image:height" content="720" />
				<title>{title}</title>
			</Head>

			<Script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM}`}
			/>
			<Script
				id="gtm"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GTM}', {
              page_path: window.location.pathname,
							cookie_flags: 'SameSite=None;Secure'
            });
          `,
				}}
			/>

			<Flex
				as={motion.main}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				fill
				dir="col"
			>
				<Intro />
				<Progress />
				<Outro />
			</Flex>
		</>
	);
}
