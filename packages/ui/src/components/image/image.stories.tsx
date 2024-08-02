import { Meta, StoryObj } from "@storybook/react";
import { Image } from "."; // Adjust the import path if necessary

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    radius: {
      control: "radio",
      options: ["none", "medium"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    radius: "medium",
    alt: "Sample Image",
    src: "https://picsum.photos/1000/1800",
    width: 500,
    height: 500,
  },
};

export const NoRadius: Story = {
  args: {
    radius: "none",
    alt: "Sample Image",
    src: "https://picsum.photos/1000/1800",
    width: 500,
    height: 500,
  },
};

export const EagerLoading: Story = {
  args: {
    radius: "none",
    alt: "Sample Image",
    src: "https://picsum.photos/1000/1000",
    width: 500,
    height: 500,
    loading: "eager",
  },
};

export const Fill: Story = {
  args: {
    fill: true,
    src: "https://picsum.photos/1000/1000",
    width: undefined,
    height: undefined,
  },
  render: (args) => (
    <div
      style={{
        width: 800,
        height: 800,
        position: "relative",
      }}
    >
      <Image {...args} />
    </div>
  ),
};
