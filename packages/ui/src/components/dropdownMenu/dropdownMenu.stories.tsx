import { Meta, StoryObj } from "@storybook/react";
import DropDownMenu from "../../components/dropdownMenu";
import Button from "../../components/button";

const meta: Meta<typeof DropDownMenu> = {
  title: "Components/DropdownMenu",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropDownMenu>;

export const Default: Story = {
  render: () => (
    <DropDownMenu.DropdownMenuContext>
      <DropDownMenu.DropdownMenuTrigger>
        <Button>Open Menu</Button>
      </DropDownMenu.DropdownMenuTrigger>
      <DropDownMenu.DropdownMenuContent className="w-56">
        <DropDownMenu.DropdownMenuLabel>Menu</DropDownMenu.DropdownMenuLabel>
        <DropDownMenu.DropdownMenuItem>Item 1</DropDownMenu.DropdownMenuItem>
        <DropDownMenu.DropdownMenuItem>Item 2</DropDownMenu.DropdownMenuItem>
        <DropDownMenu.DropdownMenuSeparator />
        <DropDownMenu.DropdownMenuItem>Item 3</DropDownMenu.DropdownMenuItem>
      </DropDownMenu.DropdownMenuContent>
    </DropDownMenu.DropdownMenuContext>
  ),
};
