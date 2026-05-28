import type { Meta, StoryObj } from "@storybook/react";
import { PillTabNav } from "@repo/ui/components/pill-navigation/pill-navigation";
import "@repo/ui/styles.css";

const meta: Meta<typeof PillTabNav> = {
  title: "UI/PillTabNav",
  component: PillTabNav,
};

export default meta;
type Story = StoryObj<typeof PillTabNav>;

export const Default: Story = {
  args: {
    tabs: [
      { id: "me", label: "Me" },
      {
        id: "career",
        label: "Career",
        subItems: [
          { id: "work", label: "Work" },
          { id: "play", label: "Play" },
        ],
      },
    ],
    defaultTab: "me",
  },
};

export const ThreeTabs: Story = {
  args: {
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "details", label: "Details" },
      { id: "settings", label: "Settings" },
    ],
    defaultTab: "overview",
  },
};

export const WithMultipleSubOptions: Story = {
  args: {
    tabs: [
      { id: "home", label: "Home" },
      {
        id: "career",
        label: "Career",
        subItems: [
          { id: "work", label: "Work" },
          { id: "play", label: "Play" },
        ],
      },
      { id: "about", label: "About" },
      {
        id: "media",
        label: "Media",
        subItems: [
          { id: "photos", label: "Photos" },
          { id: "videos", label: "Videos" },
        ],
      },
    ],
    defaultTab: "home",
  },
};

export const ManyTabs: Story = {
  args: {
    tabs: [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "blog", label: "Blog" },
      { id: "contact", label: "Contact" },
    ],
    defaultTab: "home",
  },
};

export const Dark: Story = {
  args: {
    tabs: [
      { id: "me", label: "Me" },
      {
        id: "career",
        label: "Career",
        subItems: [
          { id: "work", label: "Work" },
          { id: "play", label: "Play" },
        ],
      },
    ],
    defaultTab: "me",
    trackBg: "bg-black",
    indicatorBg: "bg-gray-800",
    activeTextColor: "text-white",
    inactiveTextColor: "text-gray-400 hover:text-gray-300",
  },
};

export const Blue: Story = {
  args: {
    tabs: [
      { id: "me", label: "Me" },
      {
        id: "career",
        label: "Career",
        subItems: [
          { id: "work", label: "Work" },
          { id: "play", label: "Play" },
        ],
      },
    ],
    defaultTab: "me",
    trackBg: "bg-blue-100",
    indicatorBg: "bg-blue-500",
    activeTextColor: "text-white",
    inactiveTextColor: "text-blue-400 hover:text-blue-600",
  },
};

export const Green: Story = {
  args: {
    tabs: [
      { id: "me", label: "Me" },
      {
        id: "career",
        label: "Career",
        subItems: [
          { id: "work", label: "Work" },
          { id: "play", label: "Play" },
        ],
      },
    ],
    defaultTab: "me",
    trackBg: "bg-green-100",
    indicatorBg: "bg-green-500",
    activeTextColor: "text-white",
    inactiveTextColor: "text-green-400 hover:text-green-600",
  },
};
