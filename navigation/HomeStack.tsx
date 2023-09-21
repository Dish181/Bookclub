import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SingleBookClubPage } from "../screens/SingleBookClubPage";
import Home from "../screens/Home";
import Discussion from "../screens/Discussion";
import NextBook from "../screens/NextBook";
import React from "react";
import { UserProvider } from "../usercontext";

const Stack = createNativeStackNavigator();

const StackBookClubs = () => {
  return (
    <UserProvider>
    <Stack.Navigator
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
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="SingleBookClubPage" component={SingleBookClubPage} />
      <Stack.Screen name="Discussion" component={Discussion} />
      <Stack.Screen name="Next Book" component={NextBook} />
    </Stack.Navigator>
    </UserProvider>

  );
};

export default StackBookClubs;
