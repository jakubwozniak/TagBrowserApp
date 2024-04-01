import { useState, useMemo, ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeContext } from "../hooks/useColorMode";

interface ThemeManagerProps {
  children: ReactNode;
}

declare module "@mui/material/styles" {
  export interface Theme {
    customValues: {
      text: {
        sidebar: string;
      };
    };
  }
  export interface ThemeOptions {
    customValues?: {
      text?: {
        sidebar?: string;
      };
    };
  }
}

const ThemeManager = ({ children }: ThemeManagerProps) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        customValues: { text: { sidebar: "#fff" } },
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: { light: "#fff", main: "#F7F8FD", dark: "#2B3647" },
              }
            : {
                primary: { light: "#384456", main: "#2B3647", dark: "#191F2A" },
                background: { paper: "#384456" },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeManager;
