import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

interface FormInputProps {
  placeholder: string;
}

const FormInput = ({ placeholder }: FormInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={{ ...FONTS.body4, color: COLORS.black }}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    height: SIZES.h1 * 1.7,
    borderWidth: 1,
    borderColor: COLORS.chocolateBackground,
    justifyContent: "center",
    borderRadius: SIZES.base,
    paddingHorizontal: SIZES.width * 0.04,
  },
});
