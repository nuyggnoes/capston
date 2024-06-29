import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from "react-native";
import { theme } from "../../color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { BellIcon, Bars4Icon } from "react-native-heroicons/outline";
import Header from "../components/Header";

export default function LoginScreen({ navigation }) {
  const [click, setClick] = useState(false);
  const logo = require("../../assets/pknulogo.png");
  const { username, setUsername } = useState("");
  const { password, setPassword } = useState("");
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        <Image source={logo} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="EMAIL OR USERNAME"
            value={username}
            onChangeText={setUsername}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="PASSWORD"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.rememberView}>
          <View style={styles.switch}>
            <Switch value={click} onValueChange={setClick} trackColor={{ true: theme.blue, false: "gray" }} />
            <Text style={styles.rememberText}>Remember Me</Text>
          </View>
          <View>
            <Pressable onPress={() => Alert.alert("Forgot Password")}>
              <Text style={styles.forgetText}>Forgot Password?</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.buttonView}>
          <Pressable style={styles.button} onPress={() => Alert.alert("Login Successfuly!", `${click}`)}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
        </View>

        <View style={styles.mediaIcons}></View>

        <Text style={styles.footerText}>
          Don't Have Account?
          <Pressable onPress={() => Alert.alert("Sign up")}>
            <Text style={styles.signup}> Sign Up</Text>
          </Pressable>
        </Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 70,
    height: "100%",
  },

  image: {
    marginTop: 25,
    height: 160,
    width: 170,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: theme.blue,
  },
  inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 25,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: theme.blue,
    borderWidth: 1,
    borderRadius: 7,
  },
  rememberView: {
    width: "100%",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
  },
  switch: {
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rememberText: {
    fontSize: 13,
  },
  forgetText: {
    fontSize: 11,
    color: theme.blue,
  },
  button: {
    backgroundColor: theme.blue,
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50,
  },
  optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "gray",
    fontSize: 13,
    marginBottom: 6,
  },
  mediaIcons: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 23,
  },
  icons: {
    width: 40,
    height: 40,
  },
  footerText: {
    textAlign: "center",
    color: "gray",
  },
  signup: {
    color: theme.blue,
    fontSize: 13,
  },
});
