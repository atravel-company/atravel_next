"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light", // Force Light Mode
    primary: { main: "#1976d2" },
    background: { default: "#f5f5f5" }, // Light background
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
