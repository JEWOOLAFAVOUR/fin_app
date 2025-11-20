import FormButton from "@/src/components/FormButton";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create20 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Checkmark Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.checkmarkCircle}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>
          You're all set now.{"\n"}
          Thank you for answering.
        </Text>
      </View>

      {/* Get Started Button */}
      <View style={styles.buttonContainer}>
        <FormButton
          title="Get started"
          onPress={() => {
            console.log("Navigating to welcome tutorial");
            (navigation as any).navigate("Create21");
          }}
        />

        {/* Medical Disclaimer */}
        <Text style={styles.disclaimer}>
          Bevel is not a substitute for professional medical advice.{"\n"}
          Always consult your physician first.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Create20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.width * 0.05,
  },
  iconContainer: {
    marginBottom: SIZES.h1 * 2,
  },
  checkmarkCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.gray2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: COLORS.gray,
  },
  checkmark: {
    fontSize: 32,
    color: COLORS.gray,
    fontFamily: "Inter-Bold",
  },
  title: {
    ...FONTS.h2,
    color: COLORS.black,
    textAlign: "center",
    lineHeight: SIZES.h2 * 1.4,
    fontFamily: "Inter-Bold",
  },
  buttonContainer: {
    paddingHorizontal: SIZES.width * 0.05,
    paddingBottom: SIZES.h1,
  },
  disclaimer: {
    ...FONTS.body4,
    color: COLORS.gray,
    textAlign: "center",
    marginTop: SIZES.h3,
    lineHeight: SIZES.body4 * 1.4,
    paddingHorizontal: SIZES.h4,
  },
});
