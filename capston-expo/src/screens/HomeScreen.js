import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { theme } from "../../color";
import { Calendar } from "react-native-calendars";
import CustomCalendar from "../components/CustomCalendar";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>시작하기</Text> */}
      <Calendar
        monthFormat={"M월"}
        onDayPress={(target) => {
          console.log(target);
        }}></Calendar>
      <Button title="Go to Login" onPress={() => navigation.navigate("Login", { name: "PKNU" })} />
      <Button title="Go to CustomCalendar" onPress={() => navigation.navigate("Canlendar", { name: "Calendar" })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
  },
});
