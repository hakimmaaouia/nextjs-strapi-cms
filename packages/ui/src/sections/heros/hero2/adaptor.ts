import { FragmentType, useFragment } from "@repo/graphql/generated";
import { IHero2Props } from "./Hero2";
import { GET_HERO2_FRAGMENT } from "./hero2.graphql";
import { imageAdaptor } from "../../../components/image";
import { adaptor as buttonAdaptor } from "../../../components/button";
import { adaptor as typoAdaptor } from "../../../components/typo";

export const adaptor = (
  data: FragmentType<typeof GET_HERO2_FRAGMENT>
): IHero2Props => {
  const props = useFragment(GET_HERO2_FRAGMENT, data);

  return {
    title: typoAdaptor(props.title),
    description: typoAdaptor(props.description),
    firstButton: buttonAdaptor(props.firstButton),
    secondButton: buttonAdaptor(props.secondButton),
    image: imageAdaptor(props.image),
    className: props.className || "",
  };
};
