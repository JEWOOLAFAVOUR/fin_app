import FormButton from "@/src/components/FormButton";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const Create11 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Map Background */}
      <View style={styles.mapContainer}>
        <View style={styles.mapOverlay}>
          {/* Route indicators */}
          <View style={styles.routePoint1}>
            <Text style={styles.milesText}>2 mi</Text>
          </View>
          <View style={styles.routePoint2}>
            <Text style={styles.milesText}>1 mi</Text>
          </View>
          <View style={styles.routePoint3}>
            <Text style={styles.milesText}>3 mi</Text>
          </View>
          <View style={styles.routePoint4}>
            <Text style={styles.milesText}>4 mi</Text>
          </View>

          {/* Current location pin */}
          <View style={styles.currentLocation}>
            <View style={styles.locationDot} />
          </View>

          {/* Bottom left stats */}
          <View style={styles.statsContainer}>
            <Text style={styles.timeText}>18:31</Text>
            <Text style={styles.paceText}>Average Pace</Text>
          </View>

          {/* Zone indicator */}
          <View style={styles.zoneContainer}>
            <Text style={styles.zoneText}>Zone 4</Text>
          </View>
        </View>
      </View>

      {/* Metrics Bar */}
      <View style={styles.metricsContainer}>
        <View style={styles.metricItem}>
          <Text style={styles.metricIcon}>💖</Text>
          <Text style={styles.metricLabel}>HR</Text>
        </View>
        <View style={styles.metricItem}>
          <Text style={styles.metricIcon}>⏱️</Text>
          <Text style={styles.metricLabel}>Pace</Text>
        </View>
        <View style={styles.metricItem}>
          <Text style={styles.metricIcon}>⛰️</Text>
          <Text style={styles.metricLabel}>Elevation</Text>
        </View>
        <View style={styles.metricItem}>
          <Text style={styles.metricIcon}>⚡</Text>
          <Text style={styles.metricLabel}>Power</Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Go the extra mile</Text>
        <Text style={styles.description}>
          Level up your endurance with personalized data on cardio load, heart
          rate recovery, and training zones.
        </Text>
      </View>

      {/* Continue Button */}
      <View style={styles.buttonContainer}>
        <FormButton
          title="Continue"
          onPress={() => {
            (navigation as any).navigate("Create12");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Create11;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mapContainer: {
    height: height * 0.5,
    backgroundColor: "#E8F4F8",
    position: "relative",
  },
  mapOverlay: {
    flex: 1,
    position: "relative",
  },
  routePoint1: {
    position: "absolute",
    top: "25%",
    right: "20%",
    backgroundColor: "#FF6B9D",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  routePoint2: {
    position: "absolute",
    top: "40%",
    right: "15%",
    backgroundColor: "#FF6B9D",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  routePoint3: {
    position: "absolute",
    bottom: "45%",
    left: "15%",
    backgroundColor: "#9B59B6",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  routePoint4: {
    position: "absolute",
    bottom: "25%",
    right: "25%",
    backgroundColor: "#9B59B6",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  milesText: {
    color: COLORS.white,
    fontSize: 12,
    fontFamily: "Inter-Bold",
  },
  currentLocation: {
    position: "absolute",
    top: "60%",
    left: "45%",
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
  },
  locationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.white,
  },
  statsContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  timeText: {
    ...FONTS.h1,
    color: COLORS.black,
    fontFamily: "Inter-Bold",
  },
  paceText: {
    ...FONTS.body4,
    color: COLORS.gray,
    marginTop: 4,
  },
  zoneContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  zoneText: {
    ...FONTS.h4,
    color: "#FF6B9D",
    fontFamily: "Inter-Bold",
  },
  metricsContainer: {
    flexDirection: "row",
    paddingHorizontal: SIZES.width * 0.05,
    paddingVertical: SIZES.h4,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray2,
  },
  metricItem: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.gray2,
    paddingVertical: SIZES.h4,
    marginHorizontal: 4,
    borderRadius: SIZES.h4,
  },
  metricIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  metricLabel: {
    ...FONTS.body4,
    color: COLORS.gray,
    fontFamily: "Inter-Medium",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    ...FONTS.h2,
    color: COLORS.black,
    textAlign: "center",
    marginBottom: SIZES.h3,
    fontFamily: "Inter-Bold",
  },
  description: {
    ...FONTS.body4,
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
