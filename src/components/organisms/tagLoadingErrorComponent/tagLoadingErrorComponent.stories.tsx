import type { Meta, StoryObj } from "@storybook/react";
import TagLoadingErrorComponent from ".";
import ThemeManager from "../../../themeManager";
import Layout from "../../../Layout";
import ToggleTheme from "../../molecules/toggleTheme";
import { expect, fn, within } from "@storybook/test";
import { Provider } from "react-redux";
import { store } from "../../../state/store";

const meta: Meta<typeof TagLoadingErrorComponent> = {
  title: "App/Organisms/TagLoadingErrorComponent",
  tags: ["autodocs"],
  component: TagLoadingErrorComponent,
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
  args: {},
} satisfies Meta<typeof TagLoadingErrorComponent>;
export default meta;

type Story = StoryObj<typeof TagLoadingErrorComponent>;

const error = {
  status: 400,
  data: {
    error_id: 403,
    error_message: "page above 25 requires access token or app key",
    error_name: "access_denied",
  },
};

export const Default: Story = {
  args: { error: error },
};

export const LoginOnPageTest: Story = {
  args: { error: error },
};

LoginOnPageTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginBtn = canvas.getByText(/LOGIN/i);
  await expect(loginBtn).toBeInTheDocument();
};
