import { graphql } from "@repo/graphql/generated/gql";

export const GET_HERO1_FRAGMENT = graphql(`
  fragment ComponentSectionHero1 on ComponentSectionHero1 {
    title {
      ...ComponentComponentTypo
    }
    description {
      ...ComponentComponentTypo
    }
    firstButton {
      ...ComponentComponentButton
    }

    secondButton {
      ...ComponentComponentButton
    }
  }
`);
