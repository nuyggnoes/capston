import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Linking,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { theme } from "../../color";

const { width, height } = Dimensions.get("window");

export default function TestScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="light" />
      <View style={styles.headerContainer}>
        <Text style={styles.greeting}>Let’s make great dishes</Text>
      </View>
      <View style={styles.content}>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.bgWhite,
  },
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.amber,
    width: width,
    height: hp(30),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: hp(5),
  },
  greeting: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: theme.white,
    lineHeight: 50,
  },
});
