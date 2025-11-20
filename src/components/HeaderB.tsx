import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../constants";

const HeaderB = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={SIZES.h1}
          color="black"
          style={{ margin: 0 }}
        />
      </TouchableOpacity>
      <View
        style={{
          height: 1,
          width: SIZES.width * 0.4,
          backgroundColor: COLORS.chocolateBackground,
          borderRadius: SIZES.base,
        }}
      >
        <View
          style={{
            height: 1,
            width: SIZES.width * 0.1,
            backgroundColor: COLORS.black,
            borderRadius: SIZES.base,
          }}
        />
      </View>
      <View />
    </View>
  );
};

export default HeaderB;

const styles = StyleSheet.create({});
