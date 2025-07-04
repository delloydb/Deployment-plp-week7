import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://<your-project>@o123456.ingest.sentry.io/123456",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});
