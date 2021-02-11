import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ExchangeScreen from "../screens/ExchangeScreen";
import HomeScreen from "../screens/HomeScreen";

export const AppTabNavigator = createBottomTabNavigator({
  ExchangeBarter: {
    screen: ExchangeScreen,
    // navigationOptions: {
    //   // tabBarIcon: (
    //   //   // <Image
    //   //   //   source={require("./assets/ads-icon.png")}
    //   //   //   style={{ width: 20, height: 20 }}
    //   //   // />
    //   // ),
    //   tabBarLabel: "Barter Exchange",
    // },
  },
  BarterRequest: {
    screen: HomeScreen,
    // navigationOptions: {
    //   tabBarIcon: (
    //     <Image
    //       source={require("./assets/home-icon.png")}
    //       style={{ width: 20, height: 20 }}
    //     />
    //   ),
    // tabBarLabel: "Barter Request",
  },
});
