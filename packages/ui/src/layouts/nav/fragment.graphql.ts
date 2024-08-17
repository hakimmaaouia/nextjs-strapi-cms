import { graphql } from "@repo/graphql/generated/gql";

export const GET_HEADER_FRAGMENT = graphql(`
  fragment header on Header {
    cta {
      id
      title
      type
      target
      href
      disabled
    }

    nav {
      __typename
      ... on ComponentNavLink {
        title
        href
        isExternal
      }
      ... on ComponentNavDropdown {
        title
        items {
          title
          href
          isExternal
        }
      }
    }
  }
`);
