import FormButton from "@/src/components/FormButton";
import { COLORS, FONTS, images, SIZES } from "@/src/constants";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create21 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
      </View>

      <View style={styles.content}>
        {/* Bevel Logo */}
        <Image
          source={images.logo}
          style={{ width: SIZES.h1 * 3, height: SIZES.h1 * 3 }}
        />

        {/* Title and Description */}
        <Text style={styles.title}>Welcome to Bevel</Text>
        <Text style={styles.description}>
          Here's what you should know to make the most of your experience.
        </Text>
      </View>

      {/* Get Started Button */}
      <View style={styles.buttonContainer}>
        <FormButton
          title="Get started"
          onPress={() => {
            (navigation as any).navigate("Create22");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Create21;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  progressContainer: {
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h1 * 2,
    marginBottom: SIZES.h1,
  },
  progressBar: {
    height: 4,
    backgroundColor: COLORS.gray2,
    borderRadius: 2,
  },
  progressFill: {
    width: "20%",
    height: "100%",
    backgroundColor: COLORS.black,
    borderRadius: 2,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.width * 0.05,
  },
  logoContainer: {
    marginBottom: SIZES.h1 * 2,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    ...FONTS.h1,
    color: COLORS.white,
    fontFamily: "Inter-Bold",
    fontSize: 36,
  },
  title: {
    ...FONTS.h1,
    color: COLORS.black,
    textAlign: "center",
    marginBottom: SIZES.h3,
    fontFamily: "Inter-Bold",
  },
  description: {
    ...FONTS.body2,
    color: COLORS.gray,
    textAlign: "center",
    lineHeight: SIZES.body2 * 1.5,
    paddingHorizontal: SIZES.h4,
  },
  buttonContainer: {
    paddingHorizontal: SIZES.width * 0.05,
    paddingBottom: SIZES.h1,
  },
});
