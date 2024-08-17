import { graphql } from "@repo/graphql/generated/gql";
import client from "../config/graphqlClient";
import { LayoutDocument } from "@repo/graphql/generated/graphql";

export const GET_LAYOUT_QUERY = graphql(/* GraphQL */ `
  query Layout($locale: I18NLocaleCode) {
    footer(locale: $locale) {
      data {
        attributes {
          ...footer
        }
      }
    }
    header(locale: $locale) {
      data {
        attributes {
          ...header
        }
      }
    }
  }
`);

interface IGetLayout {
  lang?: string;
}

export const getLayout = async ({ lang = "en" }: IGetLayout) => {
  return await client.request(LayoutDocument, { locale: lang });
};
