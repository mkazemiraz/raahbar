import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

type MenuItemProps = {
  path: string;
  icon: React.ReactNode;
  title: string;
};

const MenuItem = (props: MenuItemProps) => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <ListItem disablePadding sx={{ display: "block", my: 2 }}>
        <ListItemButton
          sx={{
            borderRightWidth: "5px",
            borderRightStyle: "solid",
            backgroundColor: `${pathname === props.path && "#EFEFEF"}`,
            borderRightColor: `${
              pathname === props.path
                ? theme?.palette?.secondary.dark
                : "transparent"
            }`,
            minHeight: 48,
            justifyContent: "center",
            px: 1.5,
            "&:hover": {
              ...(pathname === props.path && { backgroundColor: "#EFEFEF" }),
            },
          }}
          onClick={() => navigate(props.path)}
        >
          <ListItemIcon
            sx={{
              minWidth: 40,
              color: theme.palette.common.black,
              mr: 1,
              justifyContent: "center",
            }}
          >
            {props.icon}
          </ListItemIcon>
          <ListItemText
            primary={props.title}
            sx={{
              color: theme.palette.common.black,
              marginBottom: 0,
            }}
          />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default MenuItem;
