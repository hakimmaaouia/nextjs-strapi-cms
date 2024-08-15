import type { Meta, StoryObj } from "@storybook/react";
import GlobalLayout from "./index";
import { Default as DefaultNav } from "../nav/nav.stories";
import { Default as DefaultFooter } from "../footer/footer.stories";
import { INavProps } from "../nav";
import { IFooterProps } from "../footer";

const meta: Meta<typeof GlobalLayout> = {
  title: "Layouts/GlobalLayout",
  component: GlobalLayout,
};

export default meta;

type Story = StoryObj<typeof GlobalLayout>;

const completeNavProps: INavProps = {
  links: DefaultNav.args?.links || [],
  cta: DefaultNav.args?.cta || [],
};

const completeFooterProps: IFooterProps = {
  description: DefaultFooter.args?.description || "",
  links: DefaultFooter.args?.links || [],
};
export const Default: Story = {
  args: {
    children: "Main content goes here",
    nav: completeNavProps,
    footer: completeFooterProps,
  },
};

export const NoCTA: Story = {
  args: {
    children: "Main content goes here",
    nav: { ...completeNavProps, cta: [] },
    footer: completeFooterProps,
  },
};

export const NoDropdown: Story = {
  args: {
    children: "Main content goes here",
    nav: {
      ...completeNavProps,
      links: completeNavProps.links.filter((link) => !("items" in link)),
    },
    footer: completeFooterProps,
  },
};
