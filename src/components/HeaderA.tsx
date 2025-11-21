import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const HeaderA = () => {
  return (
    <View style={styles.topctn}>
      <TouchableOpacity activeOpacity={0.6}>
        <AntDesign name="menu" size={SIZES.h3} color={COLORS.white} />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <View style={styles.logo}>
          <Text>O</Text>
        </View>
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.white,
            marginLeft: SIZES.h4,
          }}
        >
          Opticom
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.6} style={styles.bellContainer}>
        <Feather name="bell" size={SIZES.h2} color={COLORS.white} />
        <View style={styles.notificationDot} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderA;

const styles = StyleSheet.create({
  topctn: {
    height: SIZES.h1 * 2.4,
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.width * 0.05,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    height: SIZES.h1 * 1,
    width: SIZES.h1 * 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginLeft: SIZES.h3,
  },
  bellContainer: {
    position: "relative",
  },
  notificationDot: {
    position: "absolute",
    top: -2,
    right: 2,
    width: 8,
    height: 8,
    backgroundColor: "#FF4444",
    borderRadius: 4,
    // borderWidth: 1,
    // borderColor: COLORS.white,
  },
});
