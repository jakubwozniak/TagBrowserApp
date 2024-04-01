import { Theme, Typography } from "@mui/material";
import TagInterface from "../../../Interfaces/tagInterface";

const TagItem = (tag: TagInterface, theme: Theme) => ({
  primary: (
    <Typography
      variant="body2"
      fontSize={16}
      color={theme.palette.text.primary}
    >
      {tag.name}
    </Typography>
  ),
  secondary: (
    <Typography
      variant="body2"
      fontSize={12}
      color={theme.palette.text.secondary}
    >
      {tag.count}
    </Typography>
  ),
});

export default TagItem;
