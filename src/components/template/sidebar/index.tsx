import {
  Avatar,
  List,
  styled,
  Box,
  TextField,
  useTheme,
  InputAdornment,
  IconButton,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";

import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

import Paths from "@constants/Paths";
import { useTranslation } from "react-i18next";
import MenuItem from "./menu-item";
import LOGO from "@assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";

const IDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    backgroundColor: theme.palette.secondary.main,
    width: 240,
  },
}));

const Sidebar = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <IDrawer variant="permanent">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: [1, 3],
        }}
      >
        <Avatar src={LOGO} sx={{ width: 85, height: 85 }} />
      </Box>
      <Box
        sx={{
          px: [1.5],
        }}
        component={"form"}
        noValidate
      >
        <TextField
          type="text"
          margin="normal"
          fullWidth
          id="search"
          placeholder={t("Search")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton aria-label="search">
                  <SearchIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
            style: {
              backgroundColor: theme.palette.common.white,
              borderRadius: "30px",
              fontSize: "14px",
            },
          }}
        />
      </Box>
      <List sx={{ mt: 2 }}>
        <MenuItem
          path={Paths.HOME}
          title={t("Dashboard")}
          icon={<DashboardCustomizeOutlinedIcon />}
        />
        <MenuItem
          path={""}
          title={t("Users")}
          icon={<PeopleAltOutlinedIcon />}
        />
        <MenuItem
          path={""}
          title={t("Reports")}
          icon={<AssignmentOutlinedIcon />}
        />
        <MenuItem
          path={""}
          title={t("Buy")}
          icon={<CreditCardOutlinedIcon />}
        />
      </List>
    </IDrawer>
  );
};

export default Sidebar;
