import type { Meta, StoryObj } from "@storybook/react";
import Nav from "./Nav";

const meta: Meta<typeof Nav> = {
  title: "Layouts/Nav",
  component: Nav,
};

export default meta;
type Story = StoryObj<typeof Nav>;

const links = [
  { title: "Home", href: "#" },
  { title: "About", href: "#" },
  {
    title: "Services",
    items: [
      { title: "Web Development", href: "#" },
      { title: "App Development", href: "#" },
      { title: "SEO Services", href: "#" },
    ],
  },
  {
    title: "Link",
    items: [
      { title: "Link #1", href: "#" },
      { title: "Link #2", href: "#" },
      { title: "Link #3", href: "#" },
    ],
  },
  { title: "Contact", href: "#" },
];

const cta = [
  { title: "Sign in", href: "#" },
  { title: "Sign up", href: "#" },
];

export const Default: Story = {
  args: {
    links,
    cta,
  },
};

export const NoCTA: Story = {
  args: {
    links,
  },
};

export const NoDropdown: Story = {
  args: {
    links: links.filter((link) => !("items" in link)),
    cta,
  },
};
