import { Box, Typography } from "@mui/material";
import * as I18next from "react-i18next";
export default function NotFound() {
  const { t } = I18next.useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ mt: "130px" }}>
        {/* <img src={NotFoundImage} alt='404' width={600} height={400} /> */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
            {t("NotFound")}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "60px" }}>
          {/* <IButton onClick={() => Navigate('/')}>{t('BackHome')}</IButton> */}
        </Box>
      </Box>
    </Box>
  );
}
