import { FragmentType, useFragment } from "@repo/graphql/generated";
import { ITestimonial1props } from "./Testimonial1";
import { GET_TESTIMONIAL1_FRAGMENT } from "./testimonial1.graphql";
import { imageAdaptor } from "../../../components/image";
import { adaptor as typoAdaptor } from "../../../components/typo";

export const adaptor = (
  data: FragmentType<typeof GET_TESTIMONIAL1_FRAGMENT> | null
): ITestimonial1props => {
  const props = useFragment(GET_TESTIMONIAL1_FRAGMENT, data);

  return {
    title: typoAdaptor(props?.title),
    description: typoAdaptor(props?.description),
    image: imageAdaptor(props?.image),
    avatar: imageAdaptor(props?.avatar),
    authorName: typoAdaptor(props?.authorName),
    isReverse: props?.isReverse,
    className: props?.className || "",
  };
};
