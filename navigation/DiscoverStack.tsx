import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CreateABookClub from "../screens/CreateABookClub";
import Discover from "../screens/Discover";
import FindABookClub from "../screens/FindABookClub";
import { UserProvider } from "../usercontext";
import Header from "../components/Header";
import { SingleBookClubPage } from "../screens/SingleBookClubPage";
import NextBook from "../screens/NextBook";
import { FirstBook } from "../screens/FirstBook";

const Stack = createNativeStackNavigator();

const DiscoverStack = () => {
  return (
    <UserProvider>
      <Stack.Navigator
        screenOptions={{
          headerTitle:  () => <Header></Header> ,
          headerStyle: {
            backgroundColor: "#424B54"
          },
          headerTitleAlign:"center",
        }}
      >
        <Stack.Screen name="Discover Home" component={Discover} />
        <Stack.Screen name="Create a book club" component={CreateABookClub} />
        <Stack.Screen name="Find a book club" component={FindABookClub} />
        <Stack.Screen name="SingleBookClubPage" component={SingleBookClubPage} />
        <Stack.Screen name="Next Book" component={NextBook} />
        <Stack.Screen name="First Book" component={FirstBook} />
      </Stack.Navigator>
    </UserProvider>
  );
};

export default DiscoverStack;
