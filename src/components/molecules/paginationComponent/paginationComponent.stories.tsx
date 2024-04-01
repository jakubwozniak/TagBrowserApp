import type { Meta, StoryObj } from "@storybook/react";
import PaginationComponent from ".";
import ThemeManager from "../../../themeManager";
import Layout from "../../../Layout";
import ToggleTheme from "../toggleTheme";
import { fn } from "@storybook/test";

const meta: Meta<typeof PaginationComponent> = {
  title: "App/Molecules/PaginationComponent",
  tags: ["autodocs"],
  component: PaginationComponent,
  decorators: [
    (Story) => (
      <ThemeManager>
        <Layout height="inherit">
          <ToggleTheme center />
          <Story />
        </Layout>
      </ThemeManager>
    ),
  ],
  args: { handlePageChange: fn() },
} satisfies Meta<typeof PaginationComponent>;
export default meta;

type Story = StoryObj<typeof PaginationComponent>;

export const Default: Story = { args: { totalPages: 10 } };
