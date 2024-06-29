import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

export default function WelcomeScreen({ navigation }) {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;
    setTimeout(() => (ring1padding.value = withSpring(ring1padding.value + hp(5))), 100);
    setTimeout(() => (ring2padding.value = withSpring(ring2padding.value + hp(5.5))), 300);
    setTimeout(() => navigation.navigate("Home"), 3000);
  }, []);

  return (
    <View style={styles.viewContainer}>
      <StatusBar style="light" />
      {/* logo image with rings */}
      <Animated.View
        style={{ padding: ring2padding, backgroundColor: "rgba(255, 255, 255, 0.3)", borderRadius: "300" }}>
        <Animated.View
          style={{ padding: ring2padding, backgroundColor: "rgba(255, 255, 255, 0.3)", borderRadius: "300" }}>
          <Image source={require("../../assets/welcomelogo.png")} style={{ width: hp(20), height: hp(20) }} />
        </Animated.View>
      </Animated.View>
      {/* title */}
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Foody</Text>
        <Text style={styles.subText}>Food is always right</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
  imgRing1: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "300",
  },
  imgRing2: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "300",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 50,
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: hp(7),
    marginBottom: 10,
  },
  subText: {
    color: "white",
    fontSize: hp(2),
  },
});
