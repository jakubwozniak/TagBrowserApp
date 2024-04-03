import type { Meta, StoryObj } from "@storybook/react";
import TagBrowser from ".";
import ThemeManager from "../../../themeManager";
import Layout from "../../../Layout";
import { withRouter } from "storybook-addon-remix-react-router";
import { Box } from "@mui/material";
import ToggleTheme from "../../molecules/toggleTheme";
import { Provider } from "react-redux";
import { storybookStore } from "../../../state/storybookStore";
const meta: Meta<typeof TagBrowser> = {
  title: "App/Templates/TagBrowser",
  tags: ["autodocs"],
  component: TagBrowser,
  decorators: [
    withRouter,
    (Story) => (
      <Provider store={storybookStore}>
        <ThemeManager>
          <Layout
            sx={{
              p: "20px",
              height: "inherit",
            }}
          >
            <ToggleTheme center />
            <Box sx={{ backgroundColor: "#2B3647" }}>
              <Story />
            </Box>
          </Layout>
        </ThemeManager>
      </Provider>
    ),
  ],
} satisfies Meta<typeof TagBrowser>;
export default meta;

type Story = StoryObj<typeof TagBrowser>;

export const Default: Story = {};
