import React from "react";
import AppContainer from "./src/navigations/AppNavigation";
import { Camera } from "expo-camera";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.mainText}>Login Screen</Text>
    //   {/* <StatusBar style="auto" /> */}
    // </View>
    // <LoginScreen />
    <AppContainer />
  );
}
