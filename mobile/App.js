import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

import Login from "./pages/Login";
import AppNavigation from "./navigation/AppNavigation";

const Tabs = AnimatedTabBarNavigator();

export default () => {
  const [logedIn, setLogedIn] = useState(true);

  const toggleLogin = () => {
    setLogedIn(!logedIn);
  };

  if (!logedIn) {
    return <Login toggle={toggleLogin} />;
  }

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};
