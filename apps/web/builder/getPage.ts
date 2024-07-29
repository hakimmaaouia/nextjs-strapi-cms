import { graphql } from "@repo/graphql/generated/gql";
import client from "../config/graphqlClient";
import { PagesDocument } from "@repo/graphql/generated/graphql";

export const GET_PAGE_QUERY = graphql(/* GraphQL */ `
  query Pages($locale: I18NLocaleCode, $filters: PageFiltersInput) {
    pages(filters: $filters, locale: $locale) {
      data {
        attributes {
          title
          path
          seo {
            title
            description
          }
          layout {
            __typename
            ... on ComponentSectionCardSlider {
              id
              title
            }
          }
        }
      }
    }
  }
`);

interface IGetPage {
  path: string;
  locale?: string;
}
export const getPage = async ({ path, locale = "en" }: IGetPage) => {
  return await client.request(PagesDocument, {
    filters: {
      path: {
        eq: path,
      },
    },
    locale: locale,
  });
};
