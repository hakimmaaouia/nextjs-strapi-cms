import { FragmentType, useFragment } from "@repo/graphql/generated";
import { INavProps } from "./Nav";
import { GET_HEADER_FRAGMENT } from "./fragment.graphql";

export const adaptor = (
  data: FragmentType<typeof GET_HEADER_FRAGMENT>
): INavProps => {
  const header = useFragment(GET_HEADER_FRAGMENT, data);

  return {
    links:
      header.nav?.map((nav) => {
        if (nav?.__typename === "ComponentNavDropdown") {
          return {
            title: nav?.title || "",
            items: nav?.items?.map((item) => ({
              title: item?.href || "",
              href: item?.href || "",
            })),
          };
        } else if (nav?.__typename === "ComponentNavLink") {
          return {
            title: nav?.title || "",
            href: nav?.href || "",
          };
        }
        return {} as any;
      }) || [],
    cta: header.cta?.map((item) => ({
      title: item?.href || "",
      href: item?.href || "",
    })),
  };
};
