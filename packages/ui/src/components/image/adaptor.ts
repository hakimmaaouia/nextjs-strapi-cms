import { FragmentType, useFragment } from "@repo/graphql/generated";
import { editableProps } from "./Image";
import { GET_IMAGE_FRAGMENT, Get_IMAGES_FRAGMENT } from "./image.graphql";

export const imageAdaptor = (
  data: FragmentType<typeof GET_IMAGE_FRAGMENT> | null | undefined
): editableProps => {
  const props = useFragment(GET_IMAGE_FRAGMENT, data);

  return {
    alt: props?.data?.attributes?.alternativeText || "",
    src: `http://localhost:1337${props?.data?.attributes?.url}` || "",
  };
};

export const imagesAdaptor = (
  data: FragmentType<typeof Get_IMAGES_FRAGMENT> | null | undefined
): editableProps[] => {
  const props = useFragment(Get_IMAGES_FRAGMENT, data);

  return (
    props?.data.map((prop) => ({
      alt: prop.attributes?.alternativeText || "",
      src: `http://localhost:1337${prop.attributes?.url}` || "",
    })) || []
  );
};
