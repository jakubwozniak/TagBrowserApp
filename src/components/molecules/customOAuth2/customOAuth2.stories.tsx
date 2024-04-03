import type { Meta, StoryObj } from "@storybook/react";
import CustomOAuth2 from ".";
import ThemeManager from "../../../themeManager";
import Layout from "../../../Layout";
import ToggleTheme from "../toggleTheme";
import { Provider } from "react-redux";
import { store } from "../../../state/store";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof CustomOAuth2> = {
  title: "App/Molecules/CustomOAuth2",
  tags: ["autodocs"],
  component: CustomOAuth2,
  decorators: [
    (Story) => (
      <Provider store={store}>
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
      </Provider>
    ),
  ],
} satisfies Meta<typeof CustomOAuth2>;
export default meta;

type Story = StoryObj<typeof CustomOAuth2>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginBtn = canvas.getByText(/LOGIN/i);
    await expect(loginBtn).toBeInTheDocument();
  },
};
