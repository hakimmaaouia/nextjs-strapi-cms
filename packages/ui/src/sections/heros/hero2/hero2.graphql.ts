import { graphql } from "@repo/graphql/generated/gql";

export const GET_HERO2_FRAGMENT = graphql(`
  fragment ComponentSectionHero2 on ComponentSectionHero2 {
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
