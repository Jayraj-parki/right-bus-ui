"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#0CA678" },
    secondary: { main: "#1A2B3C" }
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily:
      '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans"'
  }
});

export default function ThemeProvider({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
