import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
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
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// // const Drawer = createDrawerNavigator();

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
// const HomeScreen = () => {
//   return (
//     <View>
//       <Text>Home Screen</Text>
//     </View>
//   );
// };

// const ProfileScreen = ({ navigation, route }) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

// // tab
// const Tab = createBottomTabNavigator();
// // const First = () => {
// //   return (
// //     <View>
// //       <Text>This is first screen</Text>
// //     </View>
// //   );
// // };

// const Second = () => {
//   return (
//     <View>
//       <Text>This is second screen</Text>
//     </View>
//   );
// };

export default function AppContainer() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

// console.disableYellowBox = true;
