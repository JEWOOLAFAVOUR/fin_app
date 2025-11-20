import FormButton from "@/src/components/FormButton";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create12 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Main Content Area with Blue Background */}
      <View style={styles.mainContent}>
        {/* Exercise Cards Row */}
        <View style={styles.exerciseRow}>
          {/* Left partial card */}
          <View style={styles.partialCard}>
            <View style={styles.exerciseIcon}>
              <Text style={styles.iconText}>🏃</Text>
            </View>
          </View>

          {/* Center main card - Deadlift */}
          <View style={styles.mainCard}>
            <View style={styles.exerciseIconLarge}>
              <View style={styles.deadliftIcon}>
                <View style={styles.barbellBar} />
                <View style={styles.barbellWeight1} />
                <View style={styles.barbellWeight2} />
                <View style={styles.person}>
                  <View style={styles.personHead} />
                  <View style={styles.personBody} />
                  <View style={styles.personArms} />
                  <View style={styles.personLegs} />
                </View>
              </View>
            </View>
          </View>

          {/* Right partial card */}
          <View style={styles.partialCard}>
            <View style={styles.exerciseIcon}>
              <Text style={styles.iconText}>🎯</Text>
            </View>
          </View>
        </View>

        {/* Exercise Info */}
        <View style={styles.exerciseInfo}>
          <Text style={styles.exerciseName}>Deadlift</Text>
          <Text style={styles.exerciseWeight}>185 lb x 5</Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* Control Buttons */}
        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlIcon}>✕</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.playButton}>
            <Text style={styles.playIcon}>▶</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlIcon}>⏭</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Content */}
      <View style={styles.bottomContent}>
        <Text style={styles.title}>Get stronger</Text>
        <Text style={styles.description}>
          Build your strength with custom workout plans and track your sets,
          reps, and progress in real-time.
        </Text>
      </View>

      {/* Continue Button */}
      <View style={styles.buttonContainer}>
        <FormButton
          title="Continue"
          onPress={() => {
            (navigation as any).navigate("Create13");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Create12;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#4A90E2",
    paddingTop: SIZES.h1 * 2,
    paddingHorizontal: SIZES.width * 0.05,
    alignItems: "center",
    justifyContent: "center",
  },
  exerciseRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SIZES.h1 * 2,
  },
  partialCard: {
    width: SIZES.width * 0.2,
    height: SIZES.width * 0.25,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: SIZES.h3,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.h4,
  },
  mainCard: {
    width: SIZES.width * 0.4,
    height: SIZES.width * 0.5,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: SIZES.h2,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.h4,
  },
  exerciseIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 20,
  },
  exerciseIconLarge: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  deadliftIcon: {
    width: 60,
    height: 60,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  barbellBar: {
    position: "absolute",
    width: 50,
    height: 3,
    backgroundColor: COLORS.white,
    top: 25,
  },
  barbellWeight1: {
    position: "absolute",
    width: 8,
    height: 15,
    backgroundColor: COLORS.white,
    left: 5,
    top: 18,
    borderRadius: 2,
  },
  barbellWeight2: {
    position: "absolute",
    width: 8,
    height: 15,
    backgroundColor: COLORS.white,
    right: 5,
    top: 18,
    borderRadius: 2,
  },
  person: {
    position: "absolute",
    top: 30,
  },
  personHead: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.white,
    alignSelf: "center",
    marginBottom: 2,
  },
  personBody: {
    width: 3,
    height: 12,
    backgroundColor: COLORS.white,
    alignSelf: "center",
    borderRadius: 1.5,
  },
  personArms: {
    position: "absolute",
    width: 20,
    height: 2,
    backgroundColor: COLORS.white,
    top: 10,
    left: -8.5,
    borderRadius: 1,
  },
  personLegs: {
    position: "absolute",
    width: 12,
    height: 2,
    backgroundColor: COLORS.white,
    bottom: -8,
    left: -4.5,
    borderRadius: 1,
  },
  exerciseInfo: {
    alignItems: "center",
    marginBottom: SIZES.h2,
  },
  exerciseName: {
    ...FONTS.h2,
    color: COLORS.white,
    fontFamily: "Inter-Bold",
    marginBottom: SIZES.h5,
  },
  exerciseWeight: {
    ...FONTS.body2,
    color: "rgba(255,255,255,0.8)",
    fontFamily: "Inter-Medium",
  },
  progressContainer: {
    width: SIZES.width * 0.8,
    marginBottom: SIZES.h1 * 1.5,
  },
  progressBar: {
    width: "100%",
    height: 6,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 3,
  },
  progressFill: {
    width: "35%",
    height: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 3,
  },
  controlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  controlButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.h3,
  },
  playButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.h3,
  },
  controlIcon: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: "Inter-Bold",
  },
  playIcon: {
    color: COLORS.white,
    fontSize: 24,
    fontFamily: "Inter-Bold",
    marginLeft: 3,
  },
  bottomContent: {
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h1,
    paddingBottom: SIZES.h3,
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
    ...FONTS.body3c,
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
