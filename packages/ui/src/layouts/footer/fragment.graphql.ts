import { graphql } from "@repo/graphql/generated/gql";

export const GET_FOOTER_FRAGMENT = graphql(`
  fragment footer on Footer {
    nav {
      title
      items {
        title
        href
        isExternal
      }
    }
    description
  }
`);
