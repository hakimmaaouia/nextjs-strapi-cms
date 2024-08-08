import type { Meta, StoryObj } from "@storybook/react";
import Hero1 from ".";

const meta = {
  title: "Sections/Hero1",
  component: Hero1,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Hero1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
