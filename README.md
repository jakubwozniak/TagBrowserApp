# TagBrowserApp

TagBrowserApp is a project developed as part of a recruitment process to demonstrate skills in web development. The application allows users to browse and filter tags retrieved from the Stack Exchange API and provides authentication using OAuth 2.0.

## Features

- Browse and filter tags fetched from the Stack Exchange API.
- User authentication using OAuth 2.0.
- Utilizes Redux, Redux Toolkit, and RTK Query for state management and API interactions.
- Components are documented using Storybook.
- Tests are written using Storybook's built-in testing tool `@storybook/test` for each Story.

## State Management

- **Redux**: Redux is utilized for managing the application state.
- **Redux Toolkit**: Redux Toolkit is used to simplify Redux setup and configuration.
- **RTK Query**: RTK Query is employed for making API calls and managing cache with Redux.

## Documentation

Components in the project are documented using Storybook, providing an easy-to-use interface to browse and understand each component's usage and properties.

## Tests

Tests are written using Storybook's built-in testing tool `@storybook/test` for each Story. This tool provides a convenient way to write and run tests directly within Storybook, ensuring that each component behaves as expected in isolation. For example:

```javascript
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
```

These tests ensure the reliability and stability of the codebase, covering both individual components and integration scenarios.

## Getting Started

To get started with the TagBrowserApp, follow these steps:

1. Install dependencies by running:

```
npm ci
```

2. Once dependencies are installed, you can start the app or Storybook using the following commands:

- To start the app, run:

  ```
  npm start
  ```

- To start Storybook, run:

  ```
  npm run storybook
  ```
