import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CalendarTestScreen from "../screens/CalendarTestScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import CameraScreen from "../components/CameraScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
      <Stack.Screen name="Calendar" component={CalendarTestScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Camera" component={CameraScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Main">
      {/* <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} /> */}
      <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <MainNavigator /> */}
    </NavigationContainer>
  );
}

// console.disableYellowBox = true;
