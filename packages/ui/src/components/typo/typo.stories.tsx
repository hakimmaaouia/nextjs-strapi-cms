import { Meta, StoryObj } from "@storybook/react";
import { Typo } from "./index";

const meta: Meta<typeof Typo> = {
  title: "Components/Typo",
  component: Typo,
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "p", "span", "blockquote"],
    },
    size: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "p", "span", "blockquote"],
    },
    weight: {
      control: "select",
      options: [
        "normal",
        "bold",
        "extrabold",
        "black",
        "semibold",
        "thin",
        "light",
      ],
    },
    highlight: {
      control: "select",
      options: ["italic", "underline", "strikethrough", "highlight"],
    },
    highlightedIndex: {
      control: "array",
    },
    children: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typo>;

export const H1Bold: Story = {
  args: {
    as: "h1",
    size: "h1",
    weight: "bold",
    children: "This is a bold H1 text.",
  },
};

export const H2Semibold: Story = {
  args: {
    as: "h2",
    size: "h2",
    weight: "semibold",
    children: "This is a semibold H2 text.",
  },
};

export const H3Light: Story = {
  args: {
    as: "h3",
    size: "h3",
    weight: "light",
    children: "This is a light H3 text.",
  },
};

export const PItalicHighlight: Story = {
  args: {
    as: "p",
    size: "p",
    weight: "normal",
    highlightedIndex: [0, 2],
    highlight: "italic",
    children: "This is an italic highlighted text example.",
  },
};

export const BlockquoteUnderlineHighlight: Story = {
  args: {
    as: "blockquote",
    size: "blockquote",
    weight: "normal",
    highlightedIndex: [1, 3],
    highlight: "underline",
    children: "This is an underlined highlighted blockquote.",
  },
};

export const SpanStrikethroughHighlight: Story = {
  args: {
    as: "span",
    size: "span",
    weight: "normal",
    highlightedIndex: [2, 4],
    highlight: "strikethrough",
    children: "This is a strikethrough highlighted span text.",
  },
};

export const H4BlackHighlight: Story = {
  args: {
    as: "h4",
    size: "h4",
    weight: "black",
    highlightedIndex: [0],
    highlight: "highlight",
    children: "This is a highlighted H4 text.",
  },
};

export const CustomClass: Story = {
  args: {
    as: "blockquote",
    size: "blockquote",
    weight: "light",
    className: "text-[red]",
    children: "This is a blockquote with custom class.",
  },
};
