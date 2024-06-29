import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { theme } from "../../color";
import { Calendar } from "react-native-calendars";
import CustomCalendar from "../components/CustomCalendar";

export default function CalendarTestScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <CustomCalendar />
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
