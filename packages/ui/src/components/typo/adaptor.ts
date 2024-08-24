import { FragmentType, useFragment } from "@repo/graphql/generated";
import { editableProps } from "./Typo";
import { GET_TYPO_FRAGMENT } from "./typo.graphql";

export const adaptor = (
  data: FragmentType<typeof GET_TYPO_FRAGMENT> | null | undefined
): editableProps => {
  const props = useFragment(GET_TYPO_FRAGMENT, data);
  return {
    children: props?.text || "",
    as: props?.as || "span",
    highlightedIndex: props?.highlightedIndex?.split(",").map(Number) || [],
  };
};
