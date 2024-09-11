import { graphql } from "@repo/graphql/generated/gql";

export const GET_TESTIMONIAL1_FRAGMENT = graphql(`
  fragment ComponentSectionTestimonial1 on ComponentSectionTestimonial1 {
    title {
      ...ComponentComponentTypo
    }
    description: description {
      ...ComponentComponentTypo
    }
    authorName {
      ...ComponentComponentTypo
    }
    image {
      ...Image
    }
    avatar {
      ...Image
    }
    isReverse
    className
  }
`);
