import React from "react";

// const Stack = createNativeStackNavigator();

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
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="first tab" component={First} />
        <Tab.Screen name="second tab" component={Second} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// console.disableYellowBox = true;
