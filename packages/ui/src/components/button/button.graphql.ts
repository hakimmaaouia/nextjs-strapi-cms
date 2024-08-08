import { graphql } from "@repo/graphql/generated/gql";

export const GET_BUTTON_FRAGMENT = graphql(`
  fragment ComponentComponentButton on ComponentComponentButton {
    id
    title
    type
    target
    href
    disabled
  }
`);
