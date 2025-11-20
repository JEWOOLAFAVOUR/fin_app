import FormButton from "@/src/components/FormButton";
import HeaderB from "@/src/components/HeaderB";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create14 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.page}>
      <View style={{ flex: 1 }}>
        <HeaderB />
        <View style={styles.content}>
          {/* Health Icon */}
          <View style={styles.iconContainer}>
            <Text style={styles.healthIcon}>💖</Text>
          </View>

          {/* Title and Description */}
          <Text style={styles.title}>Allow access to Health</Text>
          <Text style={styles.description}>
            Bevel needs your Health data to build activities, provide insights,
            and record workouts.
          </Text>
        </View>
      </View>

      <FormButton
        title="Connect to Health"
        onPress={() => {
          // Handle health permission request
          console.log("Requesting Health access permission");
          console.log("Onboarding completed!");
          // Complete onboarding flow
        }}
      />
    </SafeAreaView>
  );
};

export default Create14;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.05,
    paddingBottom: SIZES.h1,
  },
  content: {
    flex: 1,
    paddingTop: SIZES.h2,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.gray2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.h1 * 2,
  },
  healthIcon: {
    fontSize: 40,
  },
  title: {
    ...FONTS.h2,
    color: COLORS.black,
    textAlign: "center",
    marginBottom: SIZES.h3,
    lineHeight: SIZES.h2 * 1.4,
    fontFamily: "Inter-Bold",
  },
  description: {
    ...FONTS.body2,
    color: COLORS.gray,
    textAlign: "center",
    lineHeight: SIZES.body2 * 1.5,
    paddingHorizontal: SIZES.h4,
  },
});
