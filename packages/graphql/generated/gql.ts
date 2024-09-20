/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query getPages {\n    pages {\n      data {\n        attributes {\n          path\n          publishedAt\n          updatedAt\n          locale\n          localizations {\n            data {\n              attributes {\n                locale\n                publishedAt\n                updatedAt\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetPagesDocument,
    "\n  query Layout($locale: I18NLocaleCode) {\n    footer(locale: $locale) {\n      data {\n        attributes {\n          ...footer\n        }\n      }\n    }\n    header(locale: $locale) {\n      data {\n        attributes {\n          ...header\n        }\n      }\n    }\n  }\n": types.LayoutDocument,
    "\n  query Pages($locale: I18NLocaleCode, $filters: PageFiltersInput) {\n    pages(filters: $filters, locale: $locale) {\n      data {\n        attributes {\n          title\n          path\n          seo {\n            title\n            description\n          }\n          layout {\n            __typename\n            ...ComponentSectionHero1\n            ...ComponentSectionHero2\n            ...ComponentSectionTestimonial1\n            ...ComponentSectionLogo1\n            ...ComponentSectionFeatures1\n          }\n        }\n      }\n    }\n  }\n": types.PagesDocument,
    "\n  fragment ComponentComponentButton on ComponentComponentButton {\n    id\n    title\n    type\n    target\n    href\n    disabled\n  }\n": types.ComponentComponentButtonFragmentDoc,
    "\n  fragment ComponentComponentIcon on ComponentComponentIcon {\n    id\n    name\n  }\n": types.ComponentComponentIconFragmentDoc,
    "\n  fragment Image on UploadFileEntityResponse {\n    data {\n      attributes {\n        alternativeText\n        url\n      }\n    }\n  }\n": types.ImageFragmentDoc,
    "\n  fragment Images on UploadFileRelationResponseCollection {\n    data {\n      attributes {\n        alternativeText\n        url\n      }\n    }\n  }\n": types.ImagesFragmentDoc,
    "\n  fragment ComponentComponentTypo on ComponentComponentTypo {\n    id\n    text\n    as\n    highlightedIndex\n  }\n": types.ComponentComponentTypoFragmentDoc,
    "\n  fragment footer on Footer {\n    nav {\n      title\n      items {\n        title\n        href\n        isExternal\n      }\n    }\n    description\n  }\n": types.FooterFragmentDoc,
    "\n  fragment header on Header {\n    cta {\n      id\n      title\n      type\n      target\n      href\n      disabled\n    }\n\n    nav {\n      __typename\n      ... on ComponentNavLink {\n        title\n        href\n        isExternal\n      }\n      ... on ComponentNavDropdown {\n        title\n        items {\n          title\n          href\n          isExternal\n        }\n      }\n    }\n  }\n": types.HeaderFragmentDoc,
    "\n  fragment ComponentSectionFeatures1 on ComponentSectionFeatures1 {\n    title {\n      ...ComponentComponentTypo\n    }\n    className\n    features {\n      title\n      description\n      icon {\n        ...ComponentComponentIcon\n      }\n      button {\n        ...ComponentComponentButton\n      }\n    }\n  }\n": types.ComponentSectionFeatures1FragmentDoc,
    "\n  fragment ComponentSectionHero1 on ComponentSectionHero1 {\n    title {\n      ...ComponentComponentTypo\n    }\n    description {\n      ...ComponentComponentTypo\n    }\n    firstButton {\n      ...ComponentComponentButton\n    }\n\n    secondButton {\n      ...ComponentComponentButton\n    }\n    image {\n      ...Image\n    }\n    className\n  }\n": types.ComponentSectionHero1FragmentDoc,
    "\n  fragment ComponentSectionHero2 on ComponentSectionHero2 {\n    title {\n      ...ComponentComponentTypo\n    }\n    description {\n      ...ComponentComponentTypo\n    }\n    firstButton {\n      ...ComponentComponentButton\n    }\n\n    secondButton {\n      ...ComponentComponentButton\n    }\n    image {\n      ...Image\n    }\n    className\n  }\n": types.ComponentSectionHero2FragmentDoc,
    "\n  fragment ComponentSectionLogo1 on ComponentSectionLogo1 {\n    text {\n      ...ComponentComponentTypo\n    }\n    logos {\n      ...Images\n    }\n    className\n  }\n": types.ComponentSectionLogo1FragmentDoc,
    "\n  fragment ComponentSectionTestimonial1 on ComponentSectionTestimonial1 {\n    title {\n      ...ComponentComponentTypo\n    }\n    description: description {\n      ...ComponentComponentTypo\n    }\n    authorName {\n      ...ComponentComponentTypo\n    }\n    image {\n      ...Image\n    }\n    avatar {\n      ...Image\n    }\n    isReverse\n    className\n  }\n": types.ComponentSectionTestimonial1FragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPages {\n    pages {\n      data {\n        attributes {\n          path\n          publishedAt\n          updatedAt\n          locale\n          localizations {\n            data {\n              attributes {\n                locale\n                publishedAt\n                updatedAt\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPages {\n    pages {\n      data {\n        attributes {\n          path\n          publishedAt\n          updatedAt\n          locale\n          localizations {\n            data {\n              attributes {\n                locale\n                publishedAt\n                updatedAt\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Layout($locale: I18NLocaleCode) {\n    footer(locale: $locale) {\n      data {\n        attributes {\n          ...footer\n        }\n      }\n    }\n    header(locale: $locale) {\n      data {\n        attributes {\n          ...header\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Layout($locale: I18NLocaleCode) {\n    footer(locale: $locale) {\n      data {\n        attributes {\n          ...footer\n        }\n      }\n    }\n    header(locale: $locale) {\n      data {\n        attributes {\n          ...header\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Pages($locale: I18NLocaleCode, $filters: PageFiltersInput) {\n    pages(filters: $filters, locale: $locale) {\n      data {\n        attributes {\n          title\n          path\n          seo {\n            title\n            description\n          }\n          layout {\n            __typename\n            ...ComponentSectionHero1\n            ...ComponentSectionHero2\n            ...ComponentSectionTestimonial1\n            ...ComponentSectionLogo1\n            ...ComponentSectionFeatures1\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Pages($locale: I18NLocaleCode, $filters: PageFiltersInput) {\n    pages(filters: $filters, locale: $locale) {\n      data {\n        attributes {\n          title\n          path\n          seo {\n            title\n            description\n          }\n          layout {\n            __typename\n            ...ComponentSectionHero1\n            ...ComponentSectionHero2\n            ...ComponentSectionTestimonial1\n            ...ComponentSectionLogo1\n            ...ComponentSectionFeatures1\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ComponentComponentButton on ComponentComponentButton {\n    id\n    title\n    type\n    target\n    href\n    disabled\n  }\n"): (typeof documents)["\n  fragment ComponentComponentButton on ComponentComponentButton {\n    id\n    title\n    type\n    target\n    href\n    disabled\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ComponentComponentIcon on ComponentComponentIcon {\n    id\n    name\n  }\n"): (typeof documents)["\n  fragment ComponentComponentIcon on ComponentComponentIcon {\n    id\n    name\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Image on UploadFileEntityResponse {\n    data {\n      attributes {\n        alternativeText\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment Image on UploadFileEntityResponse {\n    data {\n      attributes {\n        alternativeText\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Images on UploadFileRelationResponseCollection {\n    data {\n      attributes {\n        alternativeText\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment Images on UploadFileRelationResponseCollection {\n    data {\n      attributes {\n        alternativeText\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ComponentComponentTypo on ComponentComponentTypo {\n    id\n    text\n    as\n    highlightedIndex\n  }\n"): (typeof documents)["\n  fragment ComponentComponentTypo on ComponentComponentTypo {\n    id\n    text\n    as\n    highlightedIndex\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment footer on Footer {\n    nav {\n      title\n      items {\n        title\n        href\n        isExternal\n      }\n    }\n    description\n  }\n"): (typeof documents)["\n  fragment footer on Footer {\n    nav {\n      title\n      items {\n        title\n        href\n        isExternal\n      }\n    }\n    description\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment header on Header {\n    cta {\n      id\n      title\n      type\n      target\n      href\n      disabled\n    }\n\n    nav {\n      __typename\n      ... on ComponentNavLink {\n        title\n        href\n        isExternal\n      }\n      ... on ComponentNavDropdown {\n        title\n        items {\n          title\n          href\n          isExternal\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment header on Header {\n    cta {\n      id\n      title\n      type\n      target\n      href\n      disabled\n    }\n\n    nav {\n      __typename\n      ... on ComponentNavLink {\n        title\n        href\n        isExternal\n      }\n      ... on ComponentNavDropdown {\n        title\n        items {\n          title\n          href\n          isExternal\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ComponentSectionFeatures1 on ComponentSectionFeatures1 {\n    title {\n      ...ComponentComponentTypo\n    }\n    className\n    features {\n      title\n      description\n      icon {\n        ...ComponentComponentIcon\n      }\n      button {\n        ...ComponentComponentButton\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment ComponentSectionFeatures1 on ComponentSectionFeatures1 {\n    title {\n      ...ComponentComponentTypo\n    }\n    className\n    features {\n      title\n      description\n      icon {\n        ...ComponentComponentIcon\n      }\n      button {\n        ...ComponentComponentButton\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ComponentSectionHero1 on ComponentSectionHero1 {\n    title {\n      ...ComponentComponentTypo\n    }\n    description {\n      ...ComponentComponentTypo\n    }\n    firstButton {\n      ...ComponentComponentButton\n    }\n\n    secondButton {\n      ...ComponentComponentButton\n    }\n    image {\n      ...Image\n    }\n    className\n  }\n"): (typeof documents)["\n  fragment ComponentSectionHero1 on ComponentSectionHero1 {\n    title {\n      ...ComponentComponentTypo\n    }\n    description {\n      ...ComponentComponentTypo\n    }\n    firstButton {\n      ...ComponentComponentButton\n    }\n\n    secondButton {\n      ...ComponentComponentButton\n    }\n    image {\n      ...Image\n    }\n    className\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ComponentSectionHero2 on ComponentSectionHero2 {\n    title {\n      ...ComponentComponentTypo\n    }\n    description {\n      ...ComponentComponentTypo\n    }\n    firstButton {\n      ...ComponentComponentButton\n    }\n\n    secondButton {\n      ...ComponentComponentButton\n    }\n    image {\n      ...Image\n    }\n    className\n  }\n"): (typeof documents)["\n  fragment ComponentSectionHero2 on ComponentSectionHero2 {\n    title {\n      ...ComponentComponentTypo\n    }\n    description {\n      ...ComponentComponentTypo\n    }\n    firstButton {\n      ...ComponentComponentButton\n    }\n\n    secondButton {\n      ...ComponentComponentButton\n    }\n    image {\n      ...Image\n    }\n    className\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ComponentSectionLogo1 on ComponentSectionLogo1 {\n    text {\n      ...ComponentComponentTypo\n    }\n    logos {\n      ...Images\n    }\n    className\n  }\n"): (typeof documents)["\n  fragment ComponentSectionLogo1 on ComponentSectionLogo1 {\n    text {\n      ...ComponentComponentTypo\n    }\n    logos {\n      ...Images\n    }\n    className\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ComponentSectionTestimonial1 on ComponentSectionTestimonial1 {\n    title {\n      ...ComponentComponentTypo\n    }\n    description: description {\n      ...ComponentComponentTypo\n    }\n    authorName {\n      ...ComponentComponentTypo\n    }\n    image {\n      ...Image\n    }\n    avatar {\n      ...Image\n    }\n    isReverse\n    className\n  }\n"): (typeof documents)["\n  fragment ComponentSectionTestimonial1 on ComponentSectionTestimonial1 {\n    title {\n      ...ComponentComponentTypo\n    }\n    description: description {\n      ...ComponentComponentTypo\n    }\n    authorName {\n      ...ComponentComponentTypo\n    }\n    image {\n      ...Image\n    }\n    avatar {\n      ...Image\n    }\n    isReverse\n    className\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;