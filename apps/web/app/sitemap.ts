import { graphql } from "@repo/graphql/generated/gql";
import client from "../config/graphqlClient";
import {
  GetPagesDocument,
  GetPagesQuery,
} from "@repo/graphql/generated/graphql";
import { MetadataRoute } from "next";
import { env } from "../config/env";

export const GET_PAGES_QUERY = graphql(/* GraphQL */ `
  query getPages {
    pages {
      data {
        attributes {
          path
          publishedAt
          updatedAt
          locale
          localizations {
            data {
              attributes {
                locale
                publishedAt
                updatedAt
              }
            }
          }
        }
      }
    }
  }
`);

export const getPages = async (): Promise<GetPagesQuery> => {
  return client.request(GetPagesDocument);
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { pages } = await getPages();

  return pages.data.flatMap((page) => {
    const { path, publishedAt, updatedAt, locale, localizations } =
      page.attributes;
    const baseUrl = env.BASE_URL;

    const entries: MetadataRoute.Sitemap = [
      {
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(updatedAt || publishedAt),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      },
    ];

    if (localizations?.data) {
      localizations.data.forEach((localization) => {
        const {
          locale: localeAlt,
          updatedAt: updatedAtAlt,
          publishedAt: publishedAtAlt,
        } = localization.attributes;
        entries.push({
          url: `${baseUrl}/${localeAlt}${path}`,
          lastModified: new Date(updatedAtAlt || publishedAtAlt),
          changeFrequency: "weekly" as const,
          priority: 0.8,
        });
      });
    }

    return entries;
  });
}
