import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { theme } from "../../color";
import { Calendar } from "react-native-calendars";
import CustomCalendar from "../components/CustomCalendar";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { BellIcon, Bars4Icon } from "react-native-heroicons/outline";
import { DrawerActions } from "@react-navigation/native";
import Header from "../components/Header";

export default function HomeScreen({ navigation }) {
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
        <Header navigation={navigation} />
        {/* greetings and punchline */}
        <View style={styles.greetingContainer}>
          <Text style={{ marginBottom: 8, fontSize: hp(1.7) }}>Hello, UserName!</Text>
          <View style={{ marginBottom: 8 }}>
            <Text style={{ fontSize: hp(3.8), fontWeight: "bold" }}>Make your own food,</Text>
          </View>
          <Text style={{ fontSize: hp(3.8), fontWeight: "bold" }}>
            stay at <Text style={{ color: "#FFC107" }}>home</Text>
          </Text>
        </View>

        <Calendar
          monthFormat={"M월"}
          onDayPress={(target) => {
            console.log(target);
          }}></Calendar>
        <Button title="Go to Login" onPress={() => navigation.navigate("Login", { name: "PKNU" })} />
        <Button title="Go to CustomCalendar" onPress={() => navigation.navigate("Canlendar", { name: "Calendar" })} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
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
