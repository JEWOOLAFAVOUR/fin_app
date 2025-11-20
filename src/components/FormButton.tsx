import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

interface FormButtonProps {
  title: string;
  onPress: () => void;
}

const FormButton = ({ title, onPress }: FormButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text
        style={{
          ...FONTS.body3c,
          color: COLORS.white,
          fontFamily: "Inter-Medium",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  container: {
    height: SIZES.h1 * 1.5,
    backgroundColor: COLORS.black,
    borderRadius: SIZES.h1,
    justifyContent: "center",
    alignItems: "center",
  },
});
