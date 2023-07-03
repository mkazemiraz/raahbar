import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import "./assets/css/Style.css";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import i18n from "i18next";
import * as I18next from "react-i18next";
import { faIR } from "@mui/material/locale";
import { RouterProvider } from "react-router-dom";
import Messages_En from "./i18n/Messages_En";
import Messages_Fa from "./i18n/Messages_Fa";
import MainRouter from "./routers/MainRouter";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props: React.PropsWithChildren) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

// Configure i18n //
const i18nLanguageResources = {
  en: {
    translation: Messages_En,
  },
  fa: {
    translation: Messages_Fa,
  },
};

i18n.use(I18next.initReactI18next).init({
  resources: i18nLanguageResources,
  lng: "fa",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const theme = useMemo(
    () =>
      createTheme(
        {
          direction: "rtl",
          palette: {
            primary: {
              main: "#48CAE4",
              light: "#90E0EF",
              dark: "#0096C7",
            },
            secondary: {
              main: "#EDF3FF",
              dark: "#0C2FE3",
            },
          },
          typography: {
            fontFamily: "IRANSans",
            allVariants: {
              fontWeight: 500,
            },
          },
        },
        faIR
      ),
    []
  );

  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <RTL>
            <RouterProvider router={MainRouter} />
          </RTL>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
