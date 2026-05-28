import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "@repo/ui/components/accordion/accordion";
import "@repo/ui/styles.css";

const meta: Meta<typeof Accordion> = {
  title: "UI/Accordion",
  component: Accordion,
  argTypes: {
    allowMultiple: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      {
        id: "1",
        title: "What is this project?",
        content: "A turborepo monorepo with shared UI components.",
      },
      {
        id: "2",
        title: "How do I get started?",
        content: "Run pnpm install and then pnpm dev to start development.",
      },
      {
        id: "3",
        title: "Can I contribute?",
        content: "Yes! Check the contributing guide for more details.",
      },
    ],
    allowMultiple: false,
  },
};

export const MultipleOpen: Story = {
  args: {
    items: [
      {
        id: "1",
        title: "Section One",
        content: "Content for section one.",
      },
      {
        id: "2",
        title: "Section Two",
        content: "Content for section two.",
      },
      {
        id: "3",
        title: "Section Three",
        content: "Content for section three.",
      },
    ],
    allowMultiple: true,
  },
};
