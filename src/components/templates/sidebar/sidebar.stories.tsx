import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from ".";
import ThemeManager from "../../../themeManager";
import Layout from "../../../Layout";
import { withRouter } from "storybook-addon-remix-react-router";
import { Box } from "@mui/material";
import ToggleTheme from "../../molecules/toggleTheme";
import { Provider } from "react-redux";
import { storybookStore } from "../../../state/storybookStore";
const meta: Meta<typeof Sidebar> = {
  title: "App/Templates/Sidebar",
  tags: ["autodocs"],
  component: Sidebar,
  decorators: [
    withRouter,
    (Story) => (
      <Provider store={storybookStore}>
        <ThemeManager>
          <Layout height="inherit">
            <ToggleTheme center />
            <Box sx={{ backgroundColor: "#2B3647" }}>
              <Story />
            </Box>
          </Layout>
        </ThemeManager>
      </Provider>
    ),
  ],
} satisfies Meta<typeof Sidebar>;
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};
