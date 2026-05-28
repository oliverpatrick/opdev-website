import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/components/button/button";
import "@repo/ui/styles.css";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    style: { control: "text" },
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
        "block",
      ],
    },
    size: {
      control: "radio",
      options: ["default", "xs", "sm", "md", "lg", "icon", "icon-sm"],
    },
    asChild: { control: "boolean" },
    children: { control: "text" },
    isLoading: { control: "boolean" },
    hasArrow: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Click me",
    variant: "primary",
    size: "md",
    isLoading: false,
  },
};

export const Secondary: Story = {
  args: {
    children: "Click me",
    variant: "secondary",
    size: "md",
    isLoading: false,
  },
};

export const Danger: Story = {
  args: {
    children: "Click me",
    variant: "destructive",
    size: "md",
    isLoading: false,
  },
};
