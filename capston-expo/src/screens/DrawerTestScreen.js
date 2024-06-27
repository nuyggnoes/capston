import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { theme } from "../../color";

export default function DrawerTestScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DrawerTest</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate("Login", { name: "PKNU" })} />
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
