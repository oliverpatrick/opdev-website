import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "@repo/ui/components/tag/tag";
import "@repo/ui/styles.css";

const meta: Meta<typeof Tag> = {
  title: "UI/Tag",
  component: Tag,
  argTypes: {
    text: { control: "text" },
    href: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    text: "React",
  },
};

export const WithLink: Story = {
  args: {
    text: "TypeScript",
    href: "/tags/typescript",
  },
};

export const MultiWord: Story = {
  args: {
    text: "Next JS",
  },
};
