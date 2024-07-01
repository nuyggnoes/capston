import React from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { UserCircleIcon } from "react-native-heroicons/solid";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../color";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logologo.png")}
          style={{ width: hp(7), height: hp(7) }}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>APP NAME</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Test2")}>
        <UserCircleIcon size={hp(5)} color="grey" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  logoText: {
    marginLeft: hp(1),
    fontSize: hp(2.5),
    fontWeight: "bold",
    color: theme.amber,
  },
});

export default Header;
