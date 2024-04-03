import type { Meta, StoryObj } from "@storybook/react";
import CustomNumberInput from ".";
import ThemeManager from "../../../themeManager";
import Layout from "../../../Layout";
import { expect, fn, userEvent, within } from "@storybook/test";
import ToggleTheme from "../../molecules/toggleTheme";
const meta: Meta<typeof CustomNumberInput> = {
  title: "App/Atoms/CustomNumberInput",
  tags: ["autodocs"],
  component: CustomNumberInput,
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
    onChange: fn(),
  },
  argTypes: {
    placeholder: {
      type: "string",
      control: { type: "text" },
    },
    value: {
      type: "number",
      control: { type: "number" },
    },
    min: {
      type: "number",
      control: { type: "number" },
    },
    max: {
      type: "number",
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof CustomNumberInput>;
export default meta;

type Story = StoryObj<typeof CustomNumberInput>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Placeholder");
    await expect(input).toBeInTheDocument();
    await userEvent.type(input, "10");
    await userEvent.click(canvasElement);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await expect(input).toHaveValue("10");

    const incrementButton = canvas.getByRole("button", { name: "▴" });
    await expect(incrementButton).toBeInTheDocument();

    const decrementButton = canvas.getByRole("button", { name: "▾" });
    await expect(decrementButton).toBeInTheDocument();

    await userEvent.click(incrementButton);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await expect(input).toHaveValue("11");
    await userEvent.click(decrementButton);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await expect(input).toHaveValue("10");
  },
  args: {
    placeholder: "Placeholder",
  },
};

export const WithValue: Story = {
  args: {
    value: 1,
    min: 1,
    max: 100,
    placeholder: "Page size",
  },
};
