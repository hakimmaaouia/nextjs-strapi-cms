import { IFeatures1Props } from "./Features1"; // Add this import
import { adapter as iconAdapter } from "../../../components/icon";
import { adaptor as typoAdapter } from "../../../components/typo";
import { adaptor as buttonAdapter } from "../../../components/button";
import { FragmentType, useFragment } from "@repo/graphql/generated";
import { GET_FEATURES1_FRAGMENT } from "./features1.graphql";

export const adapter = (
  data: FragmentType<typeof GET_FEATURES1_FRAGMENT> | null | undefined
): IFeatures1Props => {
  const props = useFragment(GET_FEATURES1_FRAGMENT, data);
  return {
    title: typoAdapter(props?.title),
    className: props?.className || "",
    features:
      props?.features?.map((feature) => ({
        title: feature?.title || "",
        description: feature?.description || "",
        icon: iconAdapter(feature?.icon),
        button: buttonAdapter(feature?.button),
      })) ?? [],
  };
};
