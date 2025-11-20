import FormButton from "@/src/components/FormButton";
import HeaderB from "@/src/components/HeaderB";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create5 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.page}>
      <View style={{ flex: 1 }}>
        <HeaderB />
        <View style={styles.content}>
          {/* Progress Circle */}
          <View style={styles.progressContainer}>
            <View style={styles.progressCircle}>
              <View style={styles.progressRing}>
                <Text style={styles.scoreText}>63</Text>
                <Text style={styles.scoreLabel}>fair</Text>
              </View>
            </View>
            {/* Background Icons */}
            {/* <View style={styles.leftIcon}>
              <Text style={styles.iconText}>🍴</Text>
            </View> */}
            {/* <View style={styles.rightIcon}>
              <Text style={styles.iconText}>🥤</Text>
            </View> */}
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>Improve eating habits</Text>
            <Text style={styles.description}>
              Log food effortlessly with AI and discover how your eating habits
              affect your energy, recovery, and sleep.
            </Text>
          </View>
        </View>
      </View>

      <FormButton
        title="Continue"
        onPress={() => {
          (navigation as any).navigate("Create6");
        }}
      />
    </SafeAreaView>
  );
};

export default Create5;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.offwhite,
    paddingTop: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.05,
    paddingBottom: SIZES.h1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  progressContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SIZES.h1 * 2,
  },
  progressCircle: {
    width: SIZES.width * 0.5,
    height: SIZES.width * 0.5,
    borderRadius: (SIZES.width * 0.5) / 2,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  progressRing: {
    alignItems: "center",
    justifyContent: "center",
  },
  scoreText: {
    ...FONTS.h1,
    fontSize: SIZES.h1 * 1.8,
    color: COLORS.black,
    fontFamily: "Inter-Bold",
    marginBottom: -SIZES.h5,
  },
  scoreLabel: {
    ...FONTS.body2,
    color: COLORS.primary_1,
    fontFamily: "Inter-Medium",
    marginTop: SIZES.h3,
  },
  leftIcon: {
    position: "absolute",
    left: -SIZES.h1,
    top: "50%",
    transform: [{ translateY: -SIZES.h2 }],
  },
  rightIcon: {
    position: "absolute",
    right: -SIZES.h1,
    top: "50%",
    transform: [{ translateY: -SIZES.h2 }],
  },
  iconText: {
    fontSize: SIZES.h1 * 1.5,
    opacity: 0.3,
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: SIZES.width * 0.05,
  },
  title: {
    ...FONTS.h2,
    color: COLORS.black,
    fontFamily: "Inter-Bold",
    textAlign: "center",
    marginBottom: SIZES.h3,
  },
  description: {
    ...FONTS.body2,
    color: COLORS.gray,
    textAlign: "center",
    lineHeight: SIZES.body2 * 1.5,
    paddingHorizontal: SIZES.h4,
  },
});
