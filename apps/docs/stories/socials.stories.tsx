import type { Meta, StoryObj } from "@storybook/react";
import { Socials } from "@repo/ui/components/socials/socials";
import "@repo/ui/styles.css";

const meta: Meta<typeof Socials> = {
  title: "UI/Socials",
  component: Socials,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Socials>;

export const Default: Story = {
  args: {
    size: "md",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};
