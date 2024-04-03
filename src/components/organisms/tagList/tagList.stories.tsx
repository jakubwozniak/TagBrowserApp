import type { Meta, StoryObj } from "@storybook/react";
import TagList from ".";
import ThemeManager from "../../../themeManager";
import Layout from "../../../Layout";
import ToggleTheme from "../../molecules/toggleTheme";
import { expect, fn, userEvent, within } from "@storybook/test";

const meta: Meta<typeof TagList> = {
  title: "App/Organisms/TagList",
  tags: ["autodocs"],
  component: TagList,
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
    handleSortFieldChange: fn(),
    handleSortDirectionChange: fn(),
    handleItemsPerPageChange: fn(),
    handleCurrentPageInputChange: fn(),
  },
} satisfies Meta<typeof TagList>;
export default meta;

type Story = StoryObj<typeof TagList>;
const items = [
  {
    has_synonyms: true,
    is_moderator_only: false,
    is_required: false,
    count: 338038,
    name: "ruby-on-rails",
  },
  {
    has_synonyms: true,
    is_moderator_only: false,
    is_required: false,
    count: 337827,
    name: ".net",
  },
  {
    has_synonyms: true,
    is_moderator_only: false,
    is_required: false,
    count: 334494,
    name: "sql-server",
  },
  {
    has_synonyms: true,
    is_moderator_only: false,
    is_required: false,
    count: 333346,
    name: "swift",
  },
  {
    has_synonyms: false,
    is_moderator_only: false,
    is_required: false,
    count: 311747,
    name: "django",
  },
  {
    has_synonyms: true,
    is_moderator_only: false,
    is_required: false,
    count: 304024,
    name: "angular",
  },
  {
    has_synonyms: true,
    is_moderator_only: false,
    is_required: false,
    count: 292321,
    name: "objective-c",
  },
];
export const Default: Story = {
  args: {
    currentItemsOnPagesInput: 7,
    currentItemsOnPage: 7,
    currentPageInput: 1,
    currentPage: 1,
    sortField: "",
    sortDirection: "",
    data: {
      items: items,
      has_more: true,
      quota_max: 300,
      quota_remaining: 246,
    },
  },
};

export const AllTests: Story = {
  args: {
    currentItemsOnPagesInput: 7,
    currentItemsOnPage: 7,
    currentPageInput: 1,
    currentPage: 1,
    sortField: "",
    sortDirection: "",
    data: {
      items: items,
      has_more: true,
      quota_max: 300,
      quota_remaining: 246,
    },
  },
};

export const ListItemsTest: Story = {
  args: {
    currentItemsOnPagesInput: 7,
    currentItemsOnPage: 7,
    currentPageInput: 1,
    currentPage: 1,
    sortField: "",
    sortDirection: "",
    data: {
      items: items,
      has_more: true,
      quota_max: 300,
      quota_remaining: 246,
    },
  },
};

export const SortFieldTest: Story = {
  args: {
    currentItemsOnPagesInput: 7,
    currentItemsOnPage: 7,
    currentPageInput: 1,
    currentPage: 1,
    sortField: "",
    sortDirection: "",
    data: {
      items: items,
      has_more: true,
      quota_max: 300,
      quota_remaining: 246,
    },
  },
};

export const DirectionFieldTest: Story = {
  args: {
    currentItemsOnPagesInput: 7,
    currentItemsOnPage: 7,
    currentPageInput: 1,
    currentPage: 1,
    sortField: "",
    sortDirection: "",
    data: {
      items: items,
      has_more: true,
      quota_max: 300,
      quota_remaining: 246,
    },
  },
};

export const ItemsOnPageTest: Story = {
  args: {
    currentItemsOnPagesInput: 7,
    currentItemsOnPage: 7,
    currentPageInput: 1,
    currentPage: 1,
    sortField: "",
    sortDirection: "",
    data: {
      items: items,
      has_more: true,
      quota_max: 300,
      quota_remaining: 246,
    },
  },
};

ListItemsTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await Promise.all(
    items.map(async (item) => {
      const nameText = canvas.getByText(item.name);
      await expect(nameText).toBeInTheDocument();
      const countText = canvas.getByText(item.count);
      await expect(countText).toBeInTheDocument();
    })
  );
};

SortFieldTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const sortDropdownContainer = (canvas.getByText(/Sort Field/i) as HTMLElement)
    .parentElement as HTMLElement;

  const sortDropdown = within(sortDropdownContainer).getByRole("combobox");
  await expect(sortDropdown).toBeInTheDocument();
  await userEvent.click(sortDropdown);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const selectDropdownPresentation = document.querySelector(
    '[role="presentation"] [role="listbox"]'
  );
  let isNoneOptionPresent = false;
  let isPopularOptionPresent = false;
  let isNameOptionPresent = false;
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
        if (option.textContent.trim() === "popular") {
          isPopularOptionPresent = true;
        }
        if (option.textContent.trim() === "name") {
          isNameOptionPresent = true;
        }
      }
    });
    await expect(isNoneOptionPresent).toBeTruthy();
    await expect(isPopularOptionPresent).toBeTruthy();
    await expect(isNameOptionPresent).toBeTruthy();
  }
};

DirectionFieldTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const sortDropdownContainer = (
    canvas.getByText(/Sort Direction/i) as HTMLElement
  ).parentElement as HTMLElement;

  const sortDropdown = within(sortDropdownContainer).getByRole("combobox");
  await expect(sortDropdown).toBeInTheDocument();
  await userEvent.click(sortDropdown);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const selectDropdownPresentation = document.querySelector(
    '[role="presentation"] [role="listbox"]'
  );
  let isNoneOptionPresent = false;
  let isPopularOptionPresent = false;
  let isNameOptionPresent = false;
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
        if (option.textContent.trim() === "asc") {
          isPopularOptionPresent = true;
        }
        if (option.textContent.trim() === "desc") {
          isNameOptionPresent = true;
        }
      }
    });
    await expect(isNoneOptionPresent).toBeTruthy();
    await expect(isPopularOptionPresent).toBeTruthy();
    await expect(isNameOptionPresent).toBeTruthy();
  }
};

ItemsOnPageTest.play = async ({ canvasElement }) => {
  const input = within(canvasElement).getByPlaceholderText(/Page Size/i);
  await expect(input).toBeInTheDocument();
  await expect(input).toHaveValue("7");
  const listOfTags = canvasElement.querySelector("ul") as HTMLElement;
  console.log(listOfTags.querySelectorAll("li").length);
  await expect(listOfTags.querySelectorAll("li").length).toBe(7);
};

AllTests.play = async (context) => {
  await ListItemsTest.play?.(context);
  await SortFieldTest.play?.(context);
  await closeDropdown();
  await DirectionFieldTest.play?.(context);
  await closeDropdown();
  await ItemsOnPageTest.play?.(context);
};

const closeDropdown = async () => {
  const selectDropdownPresentationContainer = document.querySelector(
    '[role="presentation"]'
  ) as HTMLElement;

  const selectDropdownPresentation =
    selectDropdownPresentationContainer.querySelector(
      'div[aria-hidden="true"]'
    ) as HTMLElement;
  await userEvent.click(selectDropdownPresentation);
};
