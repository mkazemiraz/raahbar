import {
  Toolbar,
  Typography,
  styled,
  Stack,
  Box,
  Avatar,
  useTheme,
  Menu,
  MenuItem,
  Divider,
  Badge,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { useTranslation } from "react-i18next";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import {
  convertEnglishToPersianDigits,
  formatNumbersWithCommas,
} from "@utils/index";
const IAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<MuiAppBarProps>(({ theme }) => ({
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  zIndex: theme.zIndex.drawer + 1,
  marginLeft: 240,
  width: `calc(100% - 240px)`,
  boxShadow: "0px 7px 14px 0px #B2B2B240",
  backgroundColor: theme.palette.common.white,
  minHeight: 90,
  display: "flex",
  justifyContent: "center",
}));

const Header = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | null>(null);

  const handleOpenMenu = (event: React.BaseSyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <IAppBar position="absolute">
      <Toolbar>
        <Box
          sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 2 }}
        >
          <Avatar>
            <AccountCircleIcon color="inherit" />
          </Avatar>
          <Box>
            <Typography component="h1" variant="body1" color="inherit">
              {t("Username", { username: "محمد کاظمی راز" })}
            </Typography>
            <Typography
              component="h1"
              variant="body2"
              color={theme.palette.secondary.dark}
              mt={1}
              display={"flex"}
              alignItems={"center"}
              gap={1}
              sx={{ cursor: "pointer" }}
              onClick={handleOpenMenu}
            >
              {t("Role", { role: "فنی - نرم افزار" })} <KeyboardArrowDownIcon />
            </Typography>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  boxShadow: "3px -3px 8px 0px #00000026",
                  mt: 1.5,
                  backgroundColor: "#D9D9D9",
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 14,
                    width: 10,
                    height: 10,
                    backgroundColor: "#D9D9D9",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
            >
              <MenuItem onClick={handleCloseMenu}>
                {t("SoftwareManager")}
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>{t("Support")}</MenuItem>
            </Menu>
          </Box>
        </Box>
        <Stack direction="row" spacing={1} alignItems={"center"} gap={3}>
          <Box>
            <Typography component={"span"} color={"secondary.dark"}>
              {t("ReportCount")}
            </Typography>
            <Typography component={"span"}>
              {convertEnglishToPersianDigits(formatNumbersWithCommas(170123))}
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ borderWidth: "2px", bgcolor: theme.palette.secondary.dark }}
          />
          <Badge
            badgeContent={convertEnglishToPersianDigits(65)}
            color="warning"
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <EmailOutlinedIcon color="warning" />
          </Badge>
        </Stack>
      </Toolbar>
    </IAppBar>
  );
};

export default Header;
