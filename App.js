import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components";

import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useFontsOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useFontsLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

export default function App() {
  const [oswaldLoaded] = useFontsOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useFontsLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
