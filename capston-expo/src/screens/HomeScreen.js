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
      <Header />
      <ScrollView>
        <View style={styles.cardContainer}>
          <Text style={styles.cardText}>
            <Text style={{ fontWeight: "bold" }}>냉장고</Text> 속 재료로
          </Text>
          <Text style={styles.cardText}>
            자취 요리 <Text style={{ fontWeight: "bold" }}>시작하기</Text>
          </Text>
          <Image
            source={require("../../assets/backgroundImg.png")}
            style={{ width: "100%", height: hp(20), marginTop: hp(10) }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.btnContainer}>
          <Text style={{ color: theme.white, fontWeight: "bold", fontSize: hp(2) }}>냉장고 속 재료 찍으러 가기</Text>
          <TouchableOpacity>
            <View style={styles.newBtn}>
              <Text>시작하기</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <View style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", height: height }}>
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
      </View> */}
      </ScrollView>
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
  },
  cardContainer: {
    marginHorizontal: 30,
    marginTop: 50,
    height: hp(50),
    backgroundColor: theme.amber,
    borderTopLeftRadius: hp(3),
    borderTopRightRadius: hp(3),
    paddingTop: hp(4),
  },
  cardText: {
    color: theme.white,
    fontSize: hp(3.3),
    marginHorizontal: hp(4),
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 30,
    backgroundColor: "#FFA107",
    height: hp(13),
    borderBottomLeftRadius: hp(3),
    borderBottomRightRadius: hp(3),
    paddingHorizontal: hp(3),
  },
  greeting: {
    fontSize: hp(3),
    fontWeight: "bold",

    lineHeight: 50,
  },
  btn: {
    paddingHorizontal: hp(10),
    paddingVertical: hp(2),
    backgroundColor: theme.btnBrown,
    borderRadius: hp(1.4),
  },
  newBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.white,
    width: hp(10),
    height: hp(5),
    borderRadius: hp(3),
  },
});
