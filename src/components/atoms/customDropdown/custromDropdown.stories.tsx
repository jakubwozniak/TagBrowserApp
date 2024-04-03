import type { Meta, StoryObj } from "@storybook/react";
import CustomDropdown from ".";
import ThemeManager from "../../../themeManager";
import Layout from "../../../Layout";
import { expect, fn, userEvent, within } from "@storybook/test";
import ToggleTheme from "../../molecules/toggleTheme";

const meta: Meta<typeof CustomDropdown> = {
  title: "App/Atoms/CustomDropdown",
  tags: ["autodocs"],
  component: CustomDropdown,
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
    handleChange: fn(),
    items: [{ name: "" }],
  },
  argTypes: {
    items: {
      control: "object",
    },
    text: {
      type: "string",
      control: { type: "text" },
      description: "Text displayed inside if no value selected",
    },
    value: {
      type: "string",
      control: { type: "text" },
      description: "Selected value",
    },
  },
} satisfies Meta<typeof CustomDropdown>;
export default meta;

type Story = StoryObj<typeof CustomDropdown>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectDropdown = canvas.getByRole("combobox", {
      name: /Select value/i,
    });

    await expect(selectDropdown).toBeInTheDocument();
    await userEvent.click(selectDropdown);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const selectDropdownPresentation = document.querySelector(
      '[role="presentation"] [role="listbox"]'
    );
    let isNoneOptionPresent = false;
    if (selectDropdownPresentation) {
      await expect(selectDropdownPresentation).toBeInTheDocument();
      const options = within(
        selectDropdownPresentation as HTMLElement
      ).getAllByRole("option");

      options.forEach((option) => {
        if (
          option &&
          option.textContent &&
          option.textContent.trim() === "None"
        ) {
          isNoneOptionPresent = true;
        }
      });
      await expect(isNoneOptionPresent).toBeTruthy();
    }
  },
  args: {
    text: "Select value",
  },
};

const items = [
  { name: "", value: 0 },
  { name: "1", value: 1 },
  { name: "2", value: 2 },
];

export const WithValue: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectDropdown = canvas.getByRole("combobox", {
      name: /Select value/i,
    });

    await expect(selectDropdown).toBeInTheDocument();
    await userEvent.click(selectDropdown);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const selectDropdownPresentation = document.querySelector(
      '[role="presentation"] [role="listbox"]'
    );
    let isNoneOptionPresent = false;
    let is1OptionPresent = false;
    let is2OptionPresent = false;
    if (selectDropdownPresentation) {
      await expect(selectDropdownPresentation).toBeInTheDocument();
      const options = within(
        selectDropdownPresentation as HTMLElement
      ).getAllByRole("option");

      options.forEach((option) => {
        if (option && option.textContent) {
          if (option.textContent.trim() === "None") {
            isNoneOptionPresent = true;
          }
          if (option.textContent.trim() === "1") {
            is1OptionPresent = true;
          }
          if (option.textContent.trim() === "2") {
            is2OptionPresent = true;
          }
        }
      });
      await expect(isNoneOptionPresent).toBeTruthy();
      await expect(is1OptionPresent).toBeTruthy();
      await expect(is2OptionPresent).toBeTruthy();
    }
  },
  args: {
    items: items,
    text: "Select value",
  },
};
