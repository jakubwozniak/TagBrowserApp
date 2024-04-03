import type { Meta, StoryObj } from "@storybook/react";
import SimpleList from ".";
import ThemeManager from "../../../themeManager";
import Layout from "../../../Layout";
import { expect, fn, within } from "@storybook/test";
import ToggleTheme from "../toggleTheme";
import TagItem from "../../atoms/tagItem";

const meta: Meta<typeof SimpleList> = {
  title: "App/Molecules/SimpleList",
  tags: ["autodocs"],
  component: SimpleList,
  decorators: [
    (Story) => (
      <ThemeManager>
        <Layout
          sx={{
            p: "20px",
            height: "inherit",
          }}
        >
          <ToggleTheme center />
          <Story />
        </Layout>
      </ThemeManager>
    ),
  ],
  args: {
    renderItem: fn(),
  },
  argTypes: {
    items: {
      control: "object",
    },
    direction: {},
    renderItem: {
      description:
        "Contains primary and secondary text templates for ListItemText",
    },
  },
} satisfies Meta<typeof SimpleList>;
export default meta;

type Story = StoryObj<typeof SimpleList>;

const items = [
  { name: "Name", count: "Count" },
  { name: "Name2", count: "Count2" },
  { name: "Name3", count: "Count3" },
];

export const Column: Story = {
  args: {
    direction: "column",
    renderItem: TagItem as any,
    items: items,
  },
};

export const Row: Story = {
  args: {
    direction: "row",
    renderItem: TagItem as any,
    items: items,
  },
};

export const RowTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await Promise.all(
      items.map(async (item) => {
        const nameText = canvas.getByText(item.name);
        await expect(nameText).toBeInTheDocument();
        const countText = canvas.getByText(item.count);
        await expect(countText).toBeInTheDocument();
      })
    );
  },
  args: {
    direction: "row",
    renderItem: TagItem as any,
    items: [
      { name: "Name", count: "Count" },
      { name: "Name2", count: "Count2" },
      { name: "Name3", count: "Count3" },
    ],
  },
};
