import { graphql } from "@repo/graphql/generated/gql";

export const GET_ICON_FRAGMENT = graphql(`
  fragment ComponentComponentIcon on ComponentComponentIcon {
    id
    name
  }
`);
