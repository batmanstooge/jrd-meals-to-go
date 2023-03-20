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

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAUWq6Mhg3roLvyctxPMuRgKNTFZr9HPxg",
  authDomain: "jrd-complete-react-native-2023.firebaseapp.com",
  projectId: "jrd-complete-react-native-2023",
  storageBucket: "jrd-complete-react-native-2023.appspot.com",
  messagingSenderId: "427867086723",
  appId: "1:427867086723:web:1aac39f8af6440cba5a0b6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    signInWithEmailAndPassword(firebaseAuth, "test@test.com", "123456")
      .then((userCredential) => {
        console.log(userCredential);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
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
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
