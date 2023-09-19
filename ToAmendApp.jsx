import { StyleSheet, Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";
import Discover from "./screens/Discover";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitle: "Book Club",
          headerStyle: {
            backgroundColor: "darkblue",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert("This will take you to profile")}
                title="Profile pic"
                color="#fff"
              />
            ),
          }}
        />

        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert("This will take you to profile")}
                title="Profile pic"
                color="#fff"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Sign up"
          component={SignupScreen}
          options={{
            headerRight: () => <Button title="Sign up" />,
          }}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerRight: () => <Button title="Login" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});