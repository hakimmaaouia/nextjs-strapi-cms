import { graphql } from "@repo/graphql/generated/gql";

export const GET_IMAGE_FRAGMENT = graphql(`
  fragment Image on UploadFileEntityResponse {
    data {
      attributes {
        alternativeText
        url
      }
    }
  }
`);
