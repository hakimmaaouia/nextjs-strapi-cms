import { Meta, StoryObj } from "@storybook/react";
import Collapsible from "../../components/collapsible";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => (
    <div className=" w-[400px]">
      <Collapsible.CollapsibleContext className="w-full ">
        <Collapsible.CollapsibleTrigger className="flex justify-between w-full mt-2 px-4 py-2 text-sm text-gray-500 hover:text-black-600 focus:outline-none  ">
          Can I use this in my project?
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Collapsible.CollapsibleTrigger>
        <Collapsible.CollapsibleContent className="p-4 text-wrap">
          Yes. Free to use for personal and commercial projects. No attribution
          required.
        </Collapsible.CollapsibleContent>
      </Collapsible.CollapsibleContext>
    </div>
  ),
  args: {},
};
