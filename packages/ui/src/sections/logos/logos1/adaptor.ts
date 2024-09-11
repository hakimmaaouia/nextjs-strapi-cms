import { FragmentType, useFragment } from "@repo/graphql/generated";
import { Logo1Props } from "./Logos1";
import { GET_LOGO1_FRAGMENT } from "./logos1.graphql";
import { imagesAdaptor } from "../../../components/image";
import { adaptor as typoAdaptor } from "../../../components/typo";

export const adaptor = (
  data: FragmentType<typeof GET_LOGO1_FRAGMENT> | null
): Logo1Props => {
  const props = useFragment(GET_LOGO1_FRAGMENT, data);

  return {
    text: typoAdaptor(props?.text),
    logos: imagesAdaptor(props?.logos),
    className: props?.className || "",
  };
};
