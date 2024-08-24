import type { Meta, StoryObj } from "@storybook/react";
import Footer from ".";

const links = [
  {
    title: "Navigation",
    item: [
      { title: "Pricing", href: "./pricing.html", isExternal: false },
      {
        title: "All Templates",
        href: "./templates.html",
        isExternal: false,
      },
      {
        title: "Landing Pages",
        href: "./landing-pages.html",
        isExternal: false,
      },
      {
        title: "Next.js Templates",
        href: "./nextjs.html",
        isExternal: false,
      },
      {
        title: "Full Templates",
        href: "./multi-page.html",
        isExternal: false,
      },
      { title: "Free Templates", href: "./demos.html", isExternal: false },
      {
        title: "Documentation",
        href: "./documentation.html",
        isExternal: false,
      },
      { title: "Customers", href: "#", isExternal: false },
      {
        title: "About",
        href: "https://twitter.com/wickedtemplates/",
        isExternal: true,
      },
    ],
  },
  {
    title: "UI/UX & Dev",
    item: [
      {
        title: "Wicked Blocks",
        href: "https://www.wickedblocks.dev",
        isExternal: true,
      },
      {
        title: "Wicked Backgrounds",
        href: "https://www.wickedbackgrounds.com/",
        isExternal: true,
      },
      {
        title: "Wicked Popup's",
        href: "https://wickedpopups.com/",
        isExternal: true,
      },
      {
        title: "Colors & Fonts",
        href: "https://www.colorsandfonts.com/.html",
        isExternal: true,
      },
      {
        title: "30 Days Of Tailwind CSS",
        href: "https://30daysoftailwindcss.com/",
        isExternal: true,
      },
      {
        title: "Wicked VS Code",
        href: "https://www.wvsc.dev/.html",
        isExternal: true,
      },
      {
        title: "Brutalist Websites",
        href: "https://www.brutalist.one/.html",
        isExternal: true,
      },
    ],
  },
  {
    title: "Legal",
    item: [
      { title: "Changelog", href: "./changelog.html", isExternal: false },
      { title: "FAQ", href: "./faq.html", isExternal: false },
      { title: "Refund", href: "./refund.html", isExternal: false },
      { title: "License", href: "./license.html", isExternal: false },
      {
        title: "Privacy Policy",
        href: "./privacy.html",
        isExternal: false,
      },
      { title: "Terms", href: "./terms.html", isExternal: false },
    ],
  },
  {
    title: "Socials",
    item: [
      {
        title: "Twitter",
        href: "https://twitter.com/WickedTemplates",
        isExternal: true,
      },
      {
        title: "Dribbble",
        href: "https://dribbble.com/MichaelAndreuzza.html",
        isExternal: true,
      },
      {
        title: "Indie Hackers",
        href: "https://www.indiehackers.com/product/wicked-templates",
        isExternal: true,
      },
    ],
  },
];
const meta: Meta<typeof Footer> = {
  title: "Layouts/Footer",
  component: Footer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    links,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
};
