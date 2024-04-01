import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
} from "@mui/base/Unstable_NumberInput";
import { forwardRef } from "react";
import { StyledInputRoot, StyledInputElement, StyledButton } from "./styles";

interface CustomNumberInputProps extends NumberInputProps {}

const CustomNumberInput = function CustomNumberInput({
  ...rest
}: CustomNumberInputProps) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: "▴",
        },
        decrementButton: {
          children: "▾",
        },
      }}
      {...rest}
    />
  );
};

export default CustomNumberInput;
