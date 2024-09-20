import { graphql } from "@repo/graphql/generated/gql";

export const GET_FEATURES1_FRAGMENT = graphql(`
  fragment ComponentSectionFeatures1 on ComponentSectionFeatures1 {
    title {
      ...ComponentComponentTypo
    }
    className
    features {
      title
      description
      icon {
        ...ComponentComponentIcon
      }
      button {
        ...ComponentComponentButton
      }
    }
  }
`);
