import { Box, CssBaseline, Toolbar, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
export default function MainTemplate() {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Box
          component="main"
          sx={{
            backgroundColor: theme.palette.grey[100],
            flexGrow: 1,
            minHeight: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Box sx={{ px: 5, py: 3 }}>
            <Box sx={{ py: 3 }}>
              <Outlet />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
