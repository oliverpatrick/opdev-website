import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@repo/ui/components/common/alert";
import "@repo/ui/styles.css";

const meta: Meta<typeof Alert> = {
  title: "UI/Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "warning", "error", "success"],
    },
    position: {
      control: "select",
      options: ["default", "top", "bottom"],
    },
    title: { control: "text" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    children: "This is an informational alert message.",
    position: "default",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    children: "This is a warning alert message.",
    position: "default",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    children: "Something went wrong. Please try again.",
    position: "default",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    children: "Operation completed successfully!",
    position: "default",
  },
};
