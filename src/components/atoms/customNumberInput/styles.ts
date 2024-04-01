import { styled } from "@mui/material";
import { numberInputClasses } from "@mui/base/Unstable_NumberInput";

export const StyledInputRoot = styled("div")(
  ({ theme }) => `
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 400;
      border-radius: 6px;
      border: 1px solid ${
        theme.palette.mode === "dark"
          ? "rgba(255, 255, 255, 0.23)"
          : "rgba(0, 0, 0, 0.23)"
      };
      display: grid;
      grid-template-columns: 1fr 19px;
      grid-template-rows: 1fr 1fr;
      overflow: hidden;
      padding: 8px;
  
      // firefox
      &:focus-visible {
        outline: 0;
      }
    `
);

export const StyledInputElement = styled("input")(
  ({ theme }) => `
      font-size: 0.875rem;
      font-family: inherit;
      font-weight: 400;
      line-height: 1.5;
      grid-column: 1/2;
      grid-row: 1/3;
      color: ${
        theme.palette.mode === "dark"
          ? theme.palette.text.primary
          : theme.palette.text.primary
      };
      background: inherit;
      border: none;
      border-radius: inherit;
      padding: 8px 12px;
      outline: 0;
      width: calc(100% - 25px);
    `
);

export const StyledButton = styled("button")(
  ({ theme }) => `
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      appearance: none;
      padding: 0;
      width: 19px;
      height: 19px;
      font-family: system-ui, sans-serif;
      font-size: 0.875rem;
      line-height: 1;
      box-sizing: border-box;
      border: 0;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 120ms;
  
    
      &.${numberInputClasses.incrementButton} {
        grid-column: 2/3;
        grid-row: 1/2;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        border: 1px solid;
        border-bottom: 0;
        border-color: ${
          theme.palette.mode === "dark"
            ? theme.palette.text.disabled
            : theme.palette.text.disabled
        };
        background: ${
          theme.palette.mode === "dark"
            ? theme.palette.primary.main
            : theme.palette.primary.main
        };
        color: ${
          theme.palette.mode === "dark"
            ? theme.palette.text.primary
            : theme.palette.text.primary
        };
    
        &:hover {
          cursor: pointer;
          color: #FFF;
          background: ${
            theme.palette.mode === "dark"
              ? theme.palette.primary.light
              : theme.palette.primary.light
          };
          border-color: ${
            theme.palette.mode === "dark"
              ? theme.palette.text.primary
              : theme.palette.text.primary
          };
        }
      }
    
      &.${numberInputClasses.decrementButton} {
        grid-column: 2/3;
        grid-row: 2/3;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border: 1px solid;
        border-color: ${
          theme.palette.mode === "dark"
            ? theme.palette.text.disabled
            : theme.palette.text.disabled
        };
        background: ${
          theme.palette.mode === "dark"
            ? theme.palette.primary.main
            : theme.palette.primary.main
        };
        color: ${
          theme.palette.mode === "dark"
            ? theme.palette.text.primary
            : theme.palette.text.primary
        };
    
        &:hover {
          cursor: pointer;
          color: #FFF;
          background: ${
            theme.palette.mode === "dark"
              ? theme.palette.primary.light
              : theme.palette.primary.light
          };
          border-color: ${
            theme.palette.mode === "dark"
              ? theme.palette.text.primary
              : theme.palette.text.primary
          };
        }
      }
    
      & .arrow {
        transform: translateY(-1px);
      }
    
      & .arrow {
        transform: translateY(-1px);
      }
    `
);
