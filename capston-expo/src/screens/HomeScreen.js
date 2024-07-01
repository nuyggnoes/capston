import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Alert, Linking } from "react-native";
import { theme } from "../../color";
import { Calendar } from "react-native-calendars";
import CustomCalendar from "../components/CustomCalendar";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { CameraIcon } from "react-native-heroicons/outline";
import { DrawerActions } from "@react-navigation/native";
import Header from "../components/Header";
import { Camera } from "expo-camera";

export default function HomeScreen({ navigation }) {
  const openCameraHandler = async () => {
    // 카메라에 대한 접근 권한을 얻을 수 있는지 묻는 함수.
    const { status } = await Camera.requestCameraPermissionsAsync();
    console.log(status);
    // 권한을 획득하면 status가 granted 상태가 됩니다.
    if (status === "granted") {
      navigation.navigate("Camera");
    } else {
      Alert.alert("카메라 접근 허용", "카메라 접근을 허용하려면 설정에서 권한을 활성화하세요.", [
        { text: "취소", style: "cancel" },
        { text: "설정으로 이동", onPress: () => Linking.openSettings() },
      ]);
      console.log(status);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        style={styles.scrollContainer}>
        {/* <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Bars4Icon size={hp(4)} color="grey" />
          </TouchableOpacity>
          <Image source={require("../../assets/logo.png")} style={{ height: hp(5), width: hp(5.5) }} />
          <BellIcon size={hp(4)} color="grey" />
        </View> */}
        {/* <Header navigation={navigation} /> */}
        {/* greetings and punchline */}
        <View style={styles.greetingContainer}>
          <Text style={{ marginBottom: 8, fontSize: hp(1.7) }}>Login Text</Text>
          <View style={{ marginBottom: 8 }}>
            <Text style={{ fontSize: hp(3.8), fontWeight: "bold" }}>Main Greeting1</Text>
          </View>
          <Text style={{ fontSize: hp(3.8), fontWeight: "bold" }}>
            Main Greeting2 <Text style={{ color: theme.amber }}>Color</Text>
          </Text>
        </View>
        <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image
            source={require("../../assets/backgroundImg.png")}
            style={{ width: hp(30), height: hp(30) }}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          onPress={openCameraHandler}>
          <CameraIcon size={hp(10)} color={theme.amber} />
        </TouchableOpacity>
        <Button title="Go to Login" onPress={() => navigation.push("Login", { name: "PKNU" })} />
        <Button title="Go to CustomCalendar" onPress={() => navigation.navigate("Calendar", { name: "Calendar" })} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: theme.bgWhite,
  },
  scrollContainer: {
    paddingTop: 56,
    marginBottom: 24,
  },
  headerContainer: {
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    borderWidth: 1,
  },
  greetingContainer: {
    marginHorizontal: 16, // mx-4
    marginBottom: 8, // mb-2
  },
  greetingText: {
    fontSize: hp(1.7),
    marginBottom: 8,
  },
});
