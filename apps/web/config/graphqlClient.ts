import { GraphQLClient } from "graphql-request";
import { cache } from "react";

const endpoint = "http://localhost:1337/graphql";
export const revalidate = 100;

const client = new GraphQLClient(endpoint, {
  fetch: cache(async (url, params) => {
    return fetch(url, { ...params, next: { revalidate } });
  }),
  headers: {
    Authorization: `Bearer d0e57d0271a8c111098b927c395ff23f93825723a12c15afb448a29080d8f66a991dc91d91f59942a656988c4d592780b036b87527b8a73a26af107912ef4d52208e4caeffa68db36cbe9cdffb6e72069ac0dfd5cbb891e8d8eae4b539bb6731aaa7c3c22944a60259f3b82484cffff507e0122549788792b11f46a7b068331e`,
  },
});

export default client;
