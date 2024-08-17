import { FragmentType, useFragment } from "@repo/graphql/generated";
import { IFooterProps } from "./Footer";
import { GET_FOOTER_FRAGMENT } from "./fragment.graphql";

export const adaptor = (
  data: FragmentType<typeof GET_FOOTER_FRAGMENT>
): IFooterProps => {
  const footer = useFragment(GET_FOOTER_FRAGMENT, data);

  return {
    links:
      footer.nav?.map((nav) => ({
        title: nav?.title || "",
        item:
          nav?.items?.map((item) => ({
            title: item?.title || "",
            href: item?.href || "",
            isExternal: item?.isExternal || false,
          })) || [],
      })) || [],
    description: footer.description || "",
  };
};
