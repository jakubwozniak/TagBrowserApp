import type { Meta, StoryObj } from "@storybook/react";
import LoginStatus from ".";
import ThemeManager from "../../../themeManager";
import Layout from "../../../Layout";
import ToggleTheme from "../toggleTheme";
import { Provider } from "react-redux";
import { storybookStore } from "../../../state/storybookStore";
import { Box, Theme } from "@mui/material";
import { expect, userEvent, within } from "@storybook/test";

const meta: Meta<typeof LoginStatus> = {
  title: "App/Molecules/LoginStatus",
  tags: ["autodocs"],
  component: LoginStatus,
  decorators: [
    (Story) => (
      <Provider store={storybookStore}>
        <ThemeManager>
          <Layout height="inherit">
            <Box sx={{ color: (theme: Theme) => theme.palette.text.primary }}>
              <ToggleTheme
                center
                sx={{ color: (theme: Theme) => theme.palette.text.primary }}
              />
              <Story />
            </Box>
          </Layout>
        </ThemeManager>
      </Provider>
    ),
  ],
} satisfies Meta<typeof LoginStatus>;
export default meta;

type Story = StoryObj<typeof LoginStatus>;
export const Default: Story = {};
export const DefaultTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const logoutBtn = canvas.getByText(/logout/i);
    await expect(logoutBtn).toBeInTheDocument();
    await userEvent.click(logoutBtn);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await expect(logoutBtn).not.toBeInTheDocument();
    const loginBtn = canvas.getByText(/login/i);
    await expect(loginBtn).toBeInTheDocument();
    //TODO: test login button
    //await userEvent.click(loginBtn);
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    //await expect(logoutBtn).toBeInTheDocument();
  },
};
