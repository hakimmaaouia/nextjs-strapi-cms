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

export const Get_IMAGES_FRAGMENT = graphql(`
  fragment Images on UploadFileRelationResponseCollection {
    data {
      attributes {
        alternativeText
        url
      }
    }
  }
`);
