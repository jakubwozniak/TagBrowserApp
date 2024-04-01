import { ReactNode } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Theme, useTheme } from "@mui/material/styles";
import {
  listContainerStyles,
  listItemContainerStyles,
  listItemTextStyles,
} from "./styles";

interface SimpleListProps<T> {
  items: T[];
  direction: "row" | "column";
  renderItem: (
    item: T,
    theme: Theme
  ) => {
    primary: ReactNode;
    secondary?: ReactNode;
  };
}

const SimpleList = <T,>({
  direction,
  items,
  renderItem,
}: SimpleListProps<T>) => {
  const theme = useTheme();
  return (
    <List
      sx={{
        ...listContainerStyles,
        display: direction === "row" ? "flex" : "block",
        flexWrap: direction === "row" ? "wrap" : "nowrap",
      }}
    >
      {renderItem &&
        Array.isArray(items) &&
        items.map((item, index) => (
          <ListItem key={index} sx={listItemContainerStyles}>
            <ListItemText
              disableTypography
              sx={listItemTextStyles}
              primary={renderItem(item, theme).primary}
              secondary={renderItem(item, theme).secondary}
            />
          </ListItem>
        ))}
    </List>
  );
};

export default SimpleList;
