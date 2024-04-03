import type { Meta, StoryObj } from "@storybook/react";
import NavList from ".";
import ThemeManager from "../../../themeManager";
import Layout from "../../../Layout";
import ToggleTheme from "../toggleTheme";
import { withRouter } from "storybook-addon-remix-react-router";
import { Box } from "@mui/material";
import { expect, userEvent, within } from "@storybook/test";

const meta: Meta<typeof NavList> = {
  title: "App/Molecules/NavList",
  tags: ["autodocs"],
  component: NavList,
  decorators: [
    withRouter,
    (Story) => (
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
    ),
  ],
} satisfies Meta<typeof NavList>;
export default meta;

type Story = StoryObj<typeof NavList>;

export const Default: Story = {};

export const DefaultTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const homeBtnText = canvas.getByText(/Home/i);
    const homeBtn = (homeBtnText.parentElement as HTMLElement)
      .parentElement as HTMLElement;
    await expect(homeBtn).toBeInTheDocument();
    expect(homeBtn).toHaveClass("Mui-selected");

    const tagListBtnText = canvas.getByText(/Tag List/i);
    const tagListBtn = (tagListBtnText.parentElement as HTMLElement)
      .parentElement as HTMLElement;
    await expect(tagListBtn).toBeInTheDocument();
    //await userEvent.click(tagListBtn);
    //TODO: findout how to work with storybook-addon-remix-react-router
  },
};
