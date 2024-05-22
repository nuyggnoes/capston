import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.mainText}>Login Screen</Text>
    //   {/* <StatusBar style="auto" /> */}
    // </View>
    <LoginScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beig",
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    color: "black",
    fontSize: 50,
    fontWeight: "900",
  },
});
