import { FragmentType, useFragment } from "@repo/graphql/generated";
import { buttonTarget, editableProps } from "./Button";
import { GET_BUTTON_FRAGMENT } from "./button.graphql";

export const adaptor = (
  data: FragmentType<typeof GET_BUTTON_FRAGMENT> | null | undefined
): editableProps => {
  const props = useFragment(GET_BUTTON_FRAGMENT, data);

  return {
    children: props?.title || "",
    type: props?.type || "button",
    target: (props?.target || "_blank") as buttonTarget,
    href: props?.href || "",
    disabled: props?.disabled || false,
  };
};
