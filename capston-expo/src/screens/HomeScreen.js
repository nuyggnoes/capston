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
  SafeAreaView,
} from "react-native";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { theme } from "../../color";

const { width, height } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style="dark" />
      {/* <View style={styles.headerContainer}>
        <Text style={styles.greeting}>Let’s make great dishes</Text>
      </View> */}
      <Header />
      <View style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", height: height }}>
        <Text style={styles.greeting}>나의 냉장고로 이런 요리를..?</Text>
        <Image
          source={require("../../assets/backgroundImg.png")}
          style={{ width: hp(50), height: hp(50), marginRight: hp(2) }}
          resizeMode="contain"
        />
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={{ color: theme.white, fontWeight: "bold" }}>시작하기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.bgWhite,
  },
  headerContainer: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: theme.amber,
    width: width,
    height: hp(20),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: hp(5),
    paddingBottom: hp(5),
  },
  greeting: {
    fontSize: hp(3),
    fontWeight: "bold",
    // color: "black",
    lineHeight: 50,
  },
  btn: {
    paddingHorizontal: hp(10),
    paddingVertical: hp(2),
    backgroundColor: theme.btnBrown,
    borderRadius: hp(1.4),
  },
});
