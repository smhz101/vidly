// import * as Sentry from "@sentry/browser";

function init() {
  // Sentry.init({
  //   release: "http-app@0.0.1",
  //   dsn: "https://094886f3190d4aae87a7e327987f578d@sentry.io/5184159"
  // });
}

function log(error) {
  // Sentry.captureException(error);
  console.error(error);
}

export default {
  init,
  log
};
