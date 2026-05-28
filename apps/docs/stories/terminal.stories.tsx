import type { Meta, StoryObj } from "@storybook/react";
import { Terminal } from "@repo/ui/components/terminal/terminal";
import "@repo/ui/styles.css";

const meta: Meta<typeof Terminal> = {
  title: "UI/Terminal",
  component: Terminal,
  argTypes: {
    time: { control: "text" },
    version: { control: "text" },
    cmdline: { control: "text" },
    theme: {
      control: { type: "select", options: ["light", "dark"] },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Terminal>;

export const Default: Story = {
  args: {
    time: "Mon Apr 1 12:00:00 2024",
    version: "1.0.0",
    cmdline: 'user@opdev:~$ echo "Hello, World!"',
  },
};

export const DarkMode: Story = {
  args: {
    time: "Mon Apr 1 12:00:00 2024",
    version: "1.0.0",
    cmdline: 'user@turborepo:~$ echo "Hello, World!"',
    theme: "dark",
  },
};
