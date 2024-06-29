import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CalendarTestScreen from "../screens/CalendarTestScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          alignSelf: "center",
          flex: 1,
        },
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        contentStyle: {
          backgroundColor: "#ffffff",
        },
      }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Canlendar" component={CalendarTestScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <MainNavigator />
    </NavigationContainer>
  );
}
// // function DrawerStack() {
// //   return (
// //     <Drawer.Navigator
// //       drawerPosition="left"
// //       initialRouteName="Main"
// //       drawerStyle={{
// //         width: 250,
// //       }}
// //       screenOptions={{ headerShown: false }}
// //       drawerContent={({ navigation }) => <DrawerContainer navigation={navigation} />}>
// //       <Drawer.Screen name="Main" component={MainNavigator} />
// //     </Drawer.Navigator>
// //   );
// // }

// console.disableYellowBox = true;
