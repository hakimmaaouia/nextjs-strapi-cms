import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:1337/graphql",
  documents: ["../../**/*.tsx", "../../apps/web/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./generated/": {
      preset: "client",
    },
  },
};

export default config;
