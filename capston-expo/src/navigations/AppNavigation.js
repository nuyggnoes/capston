import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// function MainNavigator() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerTitleStyle: {
//           fontWeight: "bold",
//           textAlign: "center",
//           alignSelf: "center",
//           flex: 1,
//         },
//       }}>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Categories" component={CategoriesScreen} />
//       <Stack.Screen name="Recipe" component={RecipeScreen} />
//       <Stack.Screen name="RecipesList" component={RecipesListScreen} />
//       <Stack.Screen name="Ingredient" component={IngredientScreen} />
//       <Stack.Screen name="Search" component={SearchScreen} />
//       <Stack.Screen name="IngredientsDetails" component={IngredientsDetailsScreen} />
//     </Stack.Navigator>
//   );
// }

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
  return <NavigationContainer></NavigationContainer>;
}

// console.disableYellowBox = true;
