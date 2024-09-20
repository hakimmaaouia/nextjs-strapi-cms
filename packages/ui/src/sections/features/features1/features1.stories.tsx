import type { Meta, StoryObj } from "@storybook/react";
import FeaturesSection from "./Features1";

const meta: Meta<typeof FeaturesSection> = {
  title: "Sections/FeaturesSection1",
  component: FeaturesSection,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeaturesSection>;

const featuresData = [
  {
    icon: { name: "search" },
    title: "Quality",
    description:
      "Our UI blocks are designed with quality in mind. Every block is pixel perfect and visually appealing.",
    button: {
      href: "#",
      children: "Learn more",
    },
  },
  {
    icon: { name: "layout-grid" },
    title: "Customizable",
    description:
      "Easily customize our UI blocks to fit your needs. Change colors, fonts, and more with our easy-to-use interface.",
    button: {
      href: "#",
      children: "Learn more",
    },
  },
  {
    icon: { name: "laptop" },
    title: "Responsive",
    description:
      "Our UI blocks are fully responsive and look great on any device. No matter the screen size, your website will look amazing.",
    button: {
      href: "#",
      children: "Learn more",
    },
  },
  {
    icon: { name: "list" },
    title: "Easy to Use",
    description:
      "Our UI blocks are easy to use and require no coding knowledge. Simply drag and drop the blocks you want.",
    button: {
      href: "#",
      children: "Learn more",
    },
  },
  {
    icon: { name: "zap" },
    title: "Fast",
    description:
      "Optimized for speed and performance. Your website will load fast and provide a great user experience.",
    button: {
      href: "#",
      children: "Learn more",
    },
  },
  {
    icon: { name: "infinity" },
    title: "Modern",
    description:
      "Our UI blocks are designed with modern trends in mind. Your website will look fresh and up-to-date.",
    button: {
      href: "#",
      children: "Learn more",
    },
  },
];

export const Default: Story = {
  args: {
    title: {
      as: "h1",
      children: "Build your own website with our UI blocks",
    },
    features: featuresData,
  },
};

export const WithCustomTitle: Story = {
  args: {
    title: {
      as: "h2",
      children: "Start Building Today!",
    },
    features: featuresData,
  },
};
