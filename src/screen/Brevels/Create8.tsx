import FormButton from "@/src/components/FormButton";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create8 = () => {
  const navigation = useNavigation();

  const sleepMetrics = [
    {
      id: "efficiency",
      title: "Sleep efficiency",
      value: 75,
      status: "Fair",
      color: "#F59E0B", // Yellow/Orange
    },
    {
      id: "time_asleep",
      title: "Time asleep",
      value: 85,
      status: "Good",
      color: "#10B981", // Green
    },
    {
      id: "deep_sleep",
      title: "Deep sleep",
      value: 92,
      status: "Excellent",
      color: "#3B82F6", // Blue
    },
    {
      id: "rem_sleep",
      title: "REM sleep",
      value: 95,
      status: "Excellent",
      color: "#8B5CF6", // Purple
    },
  ];

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar
        backgroundColor={styles.page.backgroundColor}
        barStyle="light-content"
      />

      <View style={styles.content}>
        {/* Sleep Metrics */}
        <View style={styles.metricsContainer}>
          {sleepMetrics.map((metric, index) => (
            <View
              key={metric.id}
              style={[styles.metricCard, { opacity: index >= 2 ? 1 : 1 }]}
            >
              <View style={styles.metricHeader}>
                <View style={styles.iconContainer}>
                  <Text style={styles.metricIcon}>
                    {metric.id === "efficiency"
                      ? "😴"
                      : metric.id === "time_asleep"
                      ? "🕐"
                      : metric.id === "deep_sleep"
                      ? "🌙"
                      : "💭"}
                  </Text>
                </View>
                <Text style={styles.metricTitle}>{metric.title}</Text>
                <Text style={[styles.metricStatus, { color: metric.color }]}>
                  {metric.status}
                </Text>
              </View>

              <View style={styles.progressContainer}>
                <View style={styles.progressTrack}>
                  <View
                    style={[
                      styles.progressBar,
                      {
                        width: `${metric.value}%`,
                        backgroundColor: metric.color,
                      },
                    ]}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Moon Icon */}
        <View style={styles.moonContainer}>
          <Text style={styles.moonIcon}>🌙</Text>
        </View>

        {/* Cloud Effects */}
        <View style={styles.cloudsContainer}>
          <View style={[styles.cloud, styles.cloudLeft]} />
          <View style={[styles.cloud, styles.cloudRight]} />
        </View>

        {/* Stars Background */}
        <View style={styles.starsContainer}>
          {[...Array(20)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.star,
                {
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 80}%`,
                  opacity: Math.random() * 0.8 + 0.2,
                },
              ]}
            />
          ))}
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Understand your sleep quality</Text>
          <Text style={styles.description}>
            Bevel breaks down your sleep stages, heart rate trends, and
            efficiency to help you rest deeper and wake up feeling refreshed.
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <FormButton
          title="Continue"
          onPress={() => {
            (navigation as any).navigate("Create9");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Create8;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#1E293B", // Dark blue background
  },
  content: {
    flex: 1,
    position: "relative",
    paddingTop: SIZES.h1 * 2,
  },
  metricsContainer: {
    paddingHorizontal: SIZES.width * 0.05,
    marginBottom: SIZES.h1,
  },
  metricCard: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: SIZES.h3,
    padding: SIZES.h3,
    marginBottom: SIZES.h4,
    backdropFilter: "blur(10px)",
  },
  metricHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SIZES.h4,
  },
  iconContainer: {
    width: SIZES.h2,
    height: SIZES.h2,
    marginRight: SIZES.h4,
  },
  metricIcon: {
    fontSize: SIZES.h3,
  },
  metricTitle: {
    ...FONTS.body2,
    color: COLORS.white,
    fontFamily: "Inter-Medium",
    flex: 1,
  },
  metricStatus: {
    ...FONTS.body2,
    fontFamily: "Inter-Bold",
  },
  progressContainer: {
    width: "100%",
  },
  progressTrack: {
    height: 6,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 3,
  },
  moonContainer: {
    position: "absolute",
    top: SIZES.h1,
    right: SIZES.width * 0.1,
  },
  moonIcon: {
    fontSize: SIZES.h1 * 1.5,
  },
  cloudsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: SIZES.height * 0.3,
  },
  cloud: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: SIZES.h1 * 2,
  },
  cloudLeft: {
    bottom: -SIZES.h1,
    left: -SIZES.h1,
    width: SIZES.width * 0.4,
    height: SIZES.height * 0.15,
  },
  cloudRight: {
    bottom: -SIZES.h2,
    right: -SIZES.h1,
    width: SIZES.width * 0.5,
    height: SIZES.height * 0.2,
  },
  starsContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  star: {
    position: "absolute",
    width: 2,
    height: 2,
    backgroundColor: COLORS.white,
    borderRadius: 1,
  },
  textContainer: {
    position: "absolute",
    bottom: SIZES.h1 * 4,
    left: SIZES.width * 0.05,
    right: SIZES.width * 0.05,
    alignItems: "center",
  },
  title: {
    ...FONTS.h3,
    color: COLORS.white,
    fontFamily: "Inter-Bold",
    textAlign: "center",
    marginBottom: SIZES.h4,
    marginTop: SIZES.h5,
  },
  description: {
    ...FONTS.body4,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
    lineHeight: SIZES.body2 * 1.5,
    paddingHorizontal: SIZES.h4,
  },
  buttonContainer: {
    paddingHorizontal: SIZES.width * 0.05,
    paddingBottom: SIZES.h1,
  },
});
