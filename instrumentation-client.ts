// instrumentation-client.js
import posthog from "posthog-js";

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
	api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST as string,
	capture_pageview: "history_change",
});
