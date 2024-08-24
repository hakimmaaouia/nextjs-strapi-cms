import { FragmentType, useFragment } from "@repo/graphql/generated";
import { editableProps } from "./Image";
import { GET_IMAGE_FRAGMENT } from "./image.graphql";

export const adaptor = (
  data: FragmentType<typeof GET_IMAGE_FRAGMENT> | null | undefined
): editableProps => {
  const props = useFragment(GET_IMAGE_FRAGMENT, data);

  return {
    alt: props?.data?.attributes?.alternativeText || "",
    src: `http://localhost:1337${props?.data?.attributes?.url}` || "",
  };
};
