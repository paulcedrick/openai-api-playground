/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "openapi-playground",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("MyWeb", {
      environment: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY ?? "",
      },
    });
  },
});
