import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "Bookclub",
          headerTitleAlign: "center",
        }}
      >
        {user ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Bookclub" }}
          />
        ) : (
          <>
            <Stack.Screen name="Sign up" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
