import type { Meta, StoryObj } from "@storybook/react";
import LoaderComponent from ".";
import ThemeManager from "../../../themeManager";
import Layout from "../../../Layout";
import ToggleTheme from "../../molecules/toggleTheme";
import { Provider } from "react-redux";
import { store } from "../../../state/store";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof LoaderComponent> = {
  title: "App/Atoms/LoaderComponent",
  tags: ["autodocs"],
  component: LoaderComponent,
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
} satisfies Meta<typeof LoaderComponent>;
export default meta;

type Story = StoryObj<typeof LoaderComponent>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByText("Loading...");
    await expect(input).toBeInTheDocument();
  },
};
