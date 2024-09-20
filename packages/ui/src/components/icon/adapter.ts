import { editableProps } from "./Icon";
import { FragmentType, useFragment } from "@repo/graphql/generated";
import { GET_ICON_FRAGMENT } from "./icon.graphql";

export const adapter = (
  data: FragmentType<typeof GET_ICON_FRAGMENT> | null | undefined
): editableProps => {
  const props = useFragment(GET_ICON_FRAGMENT, data);

  return {
    name: props?.name.replace(/_/g, "-") as unknown as editableProps["name"],
    id: props?.id,
  };
};
