import { GraphQLClient } from "graphql-request";
import { cache } from "react";
import { apiKey, apiUrl } from "./var";

const endpoint = `${apiUrl}/graphql`;
export const revalidate = 3600;

const client = new GraphQLClient(endpoint, {
  fetch: cache(async (url, params) => {
    return fetch(url, { ...params, next: { revalidate } });
  }),
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export default client;
