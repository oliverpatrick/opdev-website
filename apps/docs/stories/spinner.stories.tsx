import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@repo/ui/components/spinner/spinner";
import "@repo/ui/styles.css";

const meta: Meta<typeof Spinner> = {
  title: "UI/Spinner",
  component: Spinner,
  argTypes: {
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const Large: Story = {
  args: {
    className: "w-12 h-12",
  },
};

export const Small: Story = {
  args: {
    className: "w-4 h-4",
  },
};
