import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SingleBookClubPage } from "../screens/SingleBookClubPage";
import Home from "../screens/Home";
import GeneralChat from "../screens/GeneralChat"
import BookChat from "../screens/BookChat";
import NextBook from "../screens/NextBook";
import React from "react";
import { UserProvider } from "../usercontext";

const Stack = createNativeStackNavigator();

const StackBookClubs = () => {
  return (
   <UserProvider>
    <Stack.Navigator
      screenOptions={{
        headerTitle:  () => <Header></Header> ,
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="SingleBookClubPage" component={SingleBookClubPage} />
      <Stack.Screen name="General Chat" component={GeneralChat} />
      <Stack.Screen name="Book Chat" component={BookChat} />
      <Stack.Screen name="Next Book" component={NextBook} />
    </Stack.Navigator>
  </UserProvider>
  );
};

export default StackBookClubs;
