import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Buy from "../pages/Buy";
import Sell from "../pages/Sell";
import Settings from "../pages/Settings";
import Wallet from "../pages/Wallet";

const Drawer = createDrawerNavigator();

const pages = [
  {
    name: "Buy",
    component: Buy,
    icon: "money-bill",
  },
  {
    name: "Sell",
    component: Sell,
    icon: "store",
  },
  {
    name: "Wallet",
    component: Wallet,
    icon: "credit-card",
  },
  {
    name: "Settings",
    component: Settings,
    icon: "hammer",
  },
];

const AppNavigation = () => {
  return (
    <Drawer.Navigator>
      {pages.map((page) => (
        <Drawer.Screen
          name={page.name}
          component={page.component}
          options={{
            drawerIcon: ({ focused }) => {
              return <Icon name={page.icon} size={20} />;
            },
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default AppNavigation;
