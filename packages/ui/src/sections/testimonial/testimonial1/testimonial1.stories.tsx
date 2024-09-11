import type { Meta, StoryObj } from "@storybook/react";
import Testimonial1 from "./index"; // Adjust the import path as necessary

const meta = {
  title: "Sections/Testimonial1",
  component: Testimonial1,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Testimonial1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: {
      as: "h2",
      children: "What Our Clients Say",
      highlightedIndex: [0],
    },
    description: {
      as: "p",
      children:
        "Our clients love the exceptional service we provide. They often share their positive experiences with us.",
      highlightedIndex: [0],
    },
    image: {
      alt: "Client Testimonial",
      src: "https://via.placeholder.com/400",
    },
    avatar: {
      alt: "Client Avatar",
      src: "https://via.placeholder.com/100",
    },
    authorName: {
      as: "span",
      children: "John Doe",
      highlightedIndex: [0],
    },
    isReverse: false,
    className: "",
  },
};

export const Reverted: Story = {
  args: {
    title: {
      as: "h2",
      children: "What Our Clients Say",
      highlightedIndex: [0],
    },
    description: {
      as: "p",
      children:
        "Our clients love the exceptional service we provide. They often share their positive experiences with us.",
    },
    image: {
      alt: "Client Testimonial",
      src: "https://via.placeholder.com/400",
    },
    avatar: {
      alt: "Client Avatar",
      src: "https://via.placeholder.com/100",
    },
    authorName: {
      as: "span",
      children: "John Doe",
      highlightedIndex: [0],
    },
    isReverse: true,
    className: "",
  },
};
