import { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";
import dynamicIconImports from "lucide-react/dynamicIconImports";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: "select",
      options: Object.keys(dynamicIconImports),
    },
    size: {
      control: "number",
    },
    color: {
      control: "color",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: "a-arrow-down",
    size: 24,
  },
};

export const Colored: Story = {
  args: {
    name: "heart",
    size: 32,
    color: "red",
  },
};

export const Large: Story = {
  args: {
    name: "settings",
    size: 48,
  },
};

// Helper component to display multiple icons
const IconGrid = ({ icons }: { icons: string[] }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "2rem",
    }}
  >
    {icons.map((iconName) => (
      <div key={iconName} className="flex justify-between items-center">
        <Icon name={iconName as keyof typeof dynamicIconImports} size={24} />
        <p>{iconName}</p>
      </div>
    ))}
  </div>
);

export const IconSet: Story = {
  render: () => <IconGrid icons={Object.keys(dynamicIconImports)} />,
};
