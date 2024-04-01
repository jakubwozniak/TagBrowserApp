import type { Meta, StoryObj } from "@storybook/react";
import LogoutButton from ".";
import ThemeManager from "../../../themeManager";
import Layout from "../../../Layout";
import ToggleTheme from "../../molecules/toggleTheme";
import { Provider } from "react-redux";
import { expect, userEvent, within } from "@storybook/test";
import { storybookStore } from "../../../state/storybookStore";

const meta: Meta<typeof LogoutButton> = {
  title: "App/Atoms/LogoutButton",
  tags: ["autodocs"],
  component: LogoutButton,
  decorators: [
    (Story) => (
      <Provider store={storybookStore}>
        <ThemeManager>
          <Layout height="inherit">
            <ToggleTheme center />
            <Story />
          </Layout>
        </ThemeManager>
      </Provider>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof LogoutButton>;
export default meta;

type Story = StoryObj<typeof LogoutButton>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const logoutBtn = canvas.getByText(/LOGOUT/i);
    await expect(logoutBtn).toBeInTheDocument();
  },
};
