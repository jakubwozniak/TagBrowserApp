import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { OutlinedInput } from "@mui/material";
import { ReactNode } from "react";

export interface ItemInterface {
  name: string;
}

export interface CustomDropdownProps {
  items: ItemInterface[];
  text: string;
  value: string;
  handleChange: (
    event: SelectChangeEvent<string | number>,
    child: ReactNode
  ) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  items,
  text,
  value,
  handleChange,
}) => {
  return (
    <>
      <FormControl sx={{ width: { sm: "150px", xs: "100%" } }}>
        <InputLabel id="customized-select-label">{text}</InputLabel>
        <Select
          labelId="customized-select-label"
          id="customized-select"
          value={value}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {Array.isArray(items) &&
            items.map((item) =>
              item.name === "" ? (
                <MenuItem key={item.name} value="">
                  <em>None</em>
                </MenuItem>
              ) : (
                <MenuItem key={item.name} value={item.name}>
                  {item.name}
                </MenuItem>
              )
            )}
        </Select>
      </FormControl>
    </>
  );
};

export default CustomDropdown;
