import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import DiscoverStack from "./DiscoverStack";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const navTheme = DefaultTheme;
navTheme.colors.background = "#ffebcd";
navTheme.colors.text = "#424B54";
console.log(navTheme);

const TabNavigation: React.FC = () => {
  return (
    <NavigationContainer theme={navTheme} independent={true}>
      <Tab.Navigator
      
        screenOptions={({ route }) => ({
          
          tabBarInactiveBackgroundColor: "#FFEBCD",
          tabBarActiveBackgroundColor: "#424B54",
          tabBarInactiveTintColor: "#424B54",
          tabBarActiveTintColor: "#F7C17A",
          headerShown: false,
          tabBarStyle: { backgroundColor: "#ffebcd", position: "absolute" },

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Discover") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Discover" component={DiscoverStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabNavigation;
