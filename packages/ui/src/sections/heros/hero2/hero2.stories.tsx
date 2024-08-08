import type { Meta, StoryObj } from "@storybook/react";
import { Hero2 } from "./index"; // Adjust the import path as necessary

const meta = {
  title: "Sections/Hero2",
  component: Hero2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Hero2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
