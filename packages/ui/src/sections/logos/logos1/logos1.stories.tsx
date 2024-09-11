import type { Meta, StoryObj } from "@storybook/react";
import Logos from "./index";

const meta: Meta<typeof Logos> = {
  title: "Sections/Logos1",
  component: Logos,
  tags: ["autodocs"],
} satisfies Meta<typeof Logos>;

export default meta;

type Story = StoryObj<typeof Logos>;

export const Default: Story = {
  args: {
    logos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        alt: "Apple Logo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        alt: "Microsoft Logo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
        alt: "Google Logo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
        alt: "Instagram Logo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        alt: "Amazon Logo",
      },
    ],
  },
};

export const WithText: Story = {
  args: {
    text: {
      as: "h1",
      children: "Our Partners",
      highlightedIndex: [1],
    },
    logos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        alt: "Microsoft Logo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
        alt: "Google Logo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
        alt: "Instagram Logo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        alt: "Amazon Logo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        alt: "Apple Logo",
      },
    ],
  },
};

export const WithTowLogos: Story = {
  args: {
    text: {
      as: "h1",
      children: "Our Partners",
      highlightedIndex: [1],
    },
    logos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        alt: "Microsoft Logo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
        alt: "Google Logo",
      },
    ],
  },
};
