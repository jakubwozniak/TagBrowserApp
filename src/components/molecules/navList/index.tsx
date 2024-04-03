import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { navItems } from "./navItems";
import { NavItemInterface } from "./navList.types";
import { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { containerStyles, listItemButtonStyles } from "./styles";
const NavList = () => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(1);
  useLayoutEffect(() => {
    const index: number = navItems.findIndex((item: NavItemInterface) => {
      return pathname === item.link;
    });
    if (index !== -1) {
      setSelectedIndex(navItems[index].id);
    }
  }, [pathname]);

  const handleListItemClick = (item: NavItemInterface) => {
    navigate(item.link);
  };
  console.log(theme);
  return (
    <List component="ul" aria-label="main" sx={containerStyles}>
      {navItems.map((item: NavItemInterface) => (
        <ListItemButton
          selected={selectedIndex === item.id}
          onClick={(event) => handleListItemClick(item)}
          key={item.id}
          sx={listItemButtonStyles}
        >
          <ListItemIcon>
            <item.icon sx={{ color: theme.customValues.text.sidebar }} />
          </ListItemIcon>
          <ListItemText
            sx={{ color: theme.customValues.text.sidebar }}
            primary={item.name}
          />
        </ListItemButton>
      ))}
    </List>
  );
};

export default NavList;
