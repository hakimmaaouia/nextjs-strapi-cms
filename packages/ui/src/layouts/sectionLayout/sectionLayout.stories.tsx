import type { Meta, StoryObj } from "@storybook/react";
import SectionLayout, { ISectionLayoutProps } from "./SectionLayout";

const textMock = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`;

const meta: Meta<ISectionLayoutProps> = {
  title: "Components/SectionLayout",
  component: SectionLayout,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: { type: "select" },
      options: ["default", "foreground"],
    },
    sectionVariant: {
      control: { type: "select" },
      options: ["default", "small", "full"],
    },
    className: { control: "text" },
    innerClassName: { control: "text" },
  },
} satisfies Meta<ISectionLayoutProps>;

export default meta;

type Story = StoryObj<ISectionLayoutProps>;

export const Default: Story = {
  args: {
    backgroundColor: "default",
    sectionVariant: "default",
    children: <div>{textMock}</div>,
  },
};

export const BackgroundColor: Story = {
  args: {
    backgroundColor: "foreground",
    children: <div className="text-white">{textMock}</div>,
  },
};

export const SmallSection: Story = {
  args: {
    sectionVariant: "small",
    children: <div>{textMock}</div>,
  },
};

export const FullWidthSection: Story = {
  args: {
    sectionVariant: "full",
    children: <div>{textMock}</div>,
  },
};
