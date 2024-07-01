import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import HomeScreen2 from "../screens/HomeScreen2";
import LoginScreen from "../screens/LoginScreen";
import CalendarTestScreen from "../screens/CalendarTestScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import CameraScreen from "../components/CameraScreen";
import TestScreen2 from "../screens/TestScreen2";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon, BookOpenIcon, PowerIcon } from "react-native-heroicons/solid";
import { theme } from "../../color";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

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
      <Stack.Screen name="Test" component={HomeScreen2} options={{ headerShown: false }} />
      <Stack.Screen
        name="Test2"
        component={TestScreen2}
        options={{
          headerShown: false,
          animation: "slide_from_bottom",
        }}
      />
    </Stack.Navigator>
  );
}

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator initialRouteName="Main">
//       <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//       <Drawer.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
//     </Drawer.Navigator>
//   );
// }

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: theme.amber }}>
      <Tab.Screen
        name="Home"
        component={MainNavigator}
        options={{
          title: "홈",
          tabBarIcon: ({ color, size }) => <HomeIcon name="home" color={color} size={size} />,
        }}></Tab.Screen>
      <Tab.Screen
        name="Calendar"
        component={CalendarTestScreen}
        options={{
          title: "일지",
          tabBarIcon: ({ color, size }) => <BookOpenIcon name="book" color={color} size={size} />,
        }}></Tab.Screen>
      <Tab.Screen
        name="Test"
        component={HomeScreen2}
        options={{
          title: "일지",
          tabBarIcon: ({ color, size }) => <PowerIcon name="Test" color={color} size={size} />,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      {/* <MainNavigator /> */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

// console.disableYellowBox = true;
