import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SIZES } from "../constants";

const HeaderA = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={SIZES.h1}
          color="black"
          style={{ margin: 0 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderA;

const styles = StyleSheet.create({});
