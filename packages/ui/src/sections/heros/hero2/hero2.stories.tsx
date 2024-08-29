import type { Meta, StoryObj } from "@storybook/react";
import Hero2 from "./Hero2";

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
  args: {
    title: {
      as: "h1",
      children: "Welcome to Our Website",
      highlightedIndex: [1],
    },
    description: {
      as: "p",
      children:
        "Discover our services and products that are tailored for your needs.",
      highlightedIndex: [0],
    },
    image: {
      alt: "Sample Image",
      src: "https://via.placeholder.com/400",
    },
    firstButton: {
      href: "#",
      target: "_self",
      type: "button",
      disabled: false,
      children: "Get Started",
    },
    secondButton: {
      href: "#",
      target: "_self",
      type: "button",
      disabled: false,
      children: "Learn More",
    },
    className: "",
  },
};
