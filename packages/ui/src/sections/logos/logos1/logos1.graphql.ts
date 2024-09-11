import { graphql } from "@repo/graphql/generated/gql";

export const GET_LOGO1_FRAGMENT = graphql(`
  fragment ComponentSectionLogo1 on ComponentSectionLogo1 {
    text {
      ...ComponentComponentTypo
    }
    logos {
      ...Images
    }
    className
  }
`);
