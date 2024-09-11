import { FragmentType, useFragment } from "@repo/graphql/generated";
import { IHero1Props } from "./Hero1";
import { GET_HERO1_FRAGMENT } from "./hero1.graphql";
import { imageAdaptor } from "../../../components/image";
import { adaptor as buttonAdaptor } from "../../../components/button";
import { adaptor as typoAdaptor } from "../../../components/typo";

export const adaptor = (
  data: FragmentType<typeof GET_HERO1_FRAGMENT> | null
): IHero1Props => {
  const props = useFragment(GET_HERO1_FRAGMENT, data);

  return {
    title: typoAdaptor(props?.title),
    description: typoAdaptor(props?.description),
    image: imageAdaptor(props?.image),
    firstButton: buttonAdaptor(props?.firstButton),
    secondButton: buttonAdaptor(props?.secondButton),
    className: props?.className || "",
  };
};
