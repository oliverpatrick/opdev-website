import type { Meta, StoryObj } from "@storybook/react";
import { Timeline } from "@repo/ui/components/timeline/timeline";
import "@repo/ui/styles.css";

const meta: Meta<typeof Timeline> = {
  title: "UI/Timeline",
  component: Timeline,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "compact"],
    },
    showConnector: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    events: [
      {
        id: "1",
        date: "Jan 2024",
        title: "Project Started",
        description: "Initial planning and setup phase.",
        status: "completed",
      },
      {
        id: "2",
        date: "Mar 2024",
        title: "Development",
        description: "Building core features and components.",
        status: "completed",
      },
      {
        id: "3",
        date: "Jun 2024",
        title: "Beta Release",
        description: "First public beta available for testing.",
        status: "current",
      },
      {
        id: "4",
        date: "Sep 2024",
        title: "Production Launch",
        description: "Full production release planned.",
        status: "upcoming",
      },
    ],
    variant: "default",
    showConnector: true,
  },
};

export const Compact: Story = {
  args: {
    ...Default.args,
    variant: "compact",
  },
};

export const NoConnector: Story = {
  args: {
    ...Default.args,
    showConnector: false,
  },
};
