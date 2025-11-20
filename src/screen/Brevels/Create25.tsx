import { COLORS, SIZES } from "@/src/constants";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create25 = () => {
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
        {/* Sleep Circle Indicator */}
        <View style={styles.sleepContainer}>
          <View style={styles.sleepCircle}>
            <View style={styles.sleepProgress} />
            <View style={styles.sleepInner}>
              <Text style={styles.sleepIcon}>🌙</Text>
            </View>
          </View>
        </View>

        {/* Title and Description */}
        <Text style={styles.title}>Sleep</Text>
        <Text style={styles.description}>
          Sleep is a measurement of your sleep quality from the previous night.
          It is based on the longest sleep session of the day.
        </Text>

        {/* How Sleep is calculated Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>How Sleep is calculated</Text>

          <View style={styles.calculationItem}>
            <Text style={styles.calculationIcon}>🕐</Text>
            <View style={styles.calculationText}>
              <Text style={styles.calculationTitle}>Time Asleep</Text>
              <Text style={styles.calculationDescription}>
                The total duration of your sleep session excluding awake
                segments.
              </Text>
            </View>
          </View>

          <View style={styles.calculationItem}>
            <Text style={styles.calculationIcon}>🔄</Text>
            <View style={styles.calculationText}>
              <Text style={styles.calculationTitle}>Sleep Stages</Text>
              <Text style={styles.calculationDescription}>
                The distribution of Light, Deep, Core, and REM sleep.
              </Text>
            </View>
          </View>

          <View style={styles.calculationItem}>
            <Text style={styles.calculationIcon}>💓</Text>
            <View style={styles.calculationText}>
              <Text style={styles.calculationTitle}>Heart Rate Dip</Text>
              <Text style={styles.calculationDescription}>
                The difference between your daytime heart rate and your
                nighttime heart rate.
              </Text>
            </View>
          </View>

          <View style={styles.calculationItem}>
            <Text style={styles.calculationIcon}>📊</Text>
            <View style={styles.calculationText}>
              <Text style={styles.calculationTitle}>Sleep Efficiency</Text>
              <Text style={styles.calculationDescription}>
                The percentage of time spent asleep vs. time in bed.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            (navigation as any).goBack();
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={SIZES.h1}
            color="black"
            style={{ margin: 0 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            (navigation as any).navigate("Create26");
          }}
        >
          <Text style={styles.nextText}>Next →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Create25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E5F5", // Light purple/lavender background like in image
  },
  progressContainer: {
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h2,
    marginBottom: SIZES.h3,
  },
  progressBar: {
    height: 4,
    backgroundColor: COLORS.gray2,
    borderRadius: 2,
  },
  progressFill: {
    width: "90%",
    height: "100%",
    backgroundColor: COLORS.black,
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: SIZES.width * 0.05,
  },
  sleepContainer: {
    alignItems: "flex-end",
    marginBottom: SIZES.h2,
    paddingRight: SIZES.width * 0.05,
  },
  sleepCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#E5E5E5",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  sleepProgress: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 8,
    borderColor: "transparent",
    borderTopColor: "#8BB6FF",
    borderRightColor: "#8BB6FF",
    borderBottomColor: "#8BB6FF",
    transform: [{ rotate: "0deg" }],
  },
  sleepInner: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  sleepIcon: {
    fontSize: 28,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.black,
    fontFamily: "Inter-Bold",
    marginBottom: SIZES.h4,
  },
  description: {
    fontSize: 15,
    color: COLORS.black,
    lineHeight: 22,
    marginBottom: SIZES.h2,
    fontFamily: "Inter-Regular",
  },
  sectionContainer: {
    marginBottom: SIZES.h2,
  },
  sectionTitle: {
    fontSize: 14,
    color: "#8E8E93",
    fontFamily: "Inter-Medium",
    marginBottom: SIZES.h4,
  },
  calculationItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: SIZES.h3,
  },
  calculationIcon: {
    fontSize: 18,
    marginRight: SIZES.h4,
    marginTop: 2,
    width: 24,
    textAlign: "center",
    color: "#8E8E93",
  },
  calculationText: {
    flex: 1,
  },
  calculationTitle: {
    fontSize: 15,
    color: COLORS.black,
    fontFamily: "Inter-SemiBold",
    marginBottom: 4,
  },
  calculationDescription: {
    fontSize: 13,
    color: "#8E8E93",
    lineHeight: 18,
    fontFamily: "Inter-Regular",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.width * 0.05,
    paddingBottom: SIZES.h2,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  backIcon: {
    fontSize: 18,
    color: COLORS.black,
  },
  nextButton: {
    backgroundColor: COLORS.black,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  nextText: {
    fontSize: 14,
    color: COLORS.white,
    fontFamily: "Inter-Medium",
  },
});
