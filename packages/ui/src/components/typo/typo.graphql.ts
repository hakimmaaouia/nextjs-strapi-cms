import { graphql } from "@repo/graphql/generated/gql";

export const GET_TYPO_FRAGMENT = graphql(`
  fragment ComponentComponentTypo on ComponentComponentTypo {
    id
    text
    as
    highlightedIndex
  }
`);
