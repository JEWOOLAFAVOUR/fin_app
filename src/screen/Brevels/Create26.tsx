import { COLORS, FONTS, SIZES } from "@/src/constants";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create26 = () => {
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
        {/* Header */}
        <Text style={styles.header}>For best results</Text>
        <Text style={styles.title}>
          Before heading off to bed, make sure to...
        </Text>

        {/* Step Items */}
        <View style={styles.stepsContainer}>
          {/* Step 1 - Sleep Focus Mode */}
          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>1</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Turn on sleep focus mode</Text>
            </View>
            <View style={styles.deviceIcon}>
              <View style={styles.phoneIcon}>
                <View style={styles.phoneScreen}>
                  <Text style={styles.bedIcon}>🛏️</Text>
                  <Text style={styles.sleepFocusText}>Sleep Focus</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Step 2 - Power Saver */}
          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>2</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>
                Turn off power saver mode on your watch
              </Text>
            </View>
            <View style={styles.deviceIcon}>
              <View style={styles.batteryIcon}>
                <View style={styles.batteryBody}>
                  <View style={styles.batteryFill} />
                </View>
                <View style={styles.batteryTip} />
              </View>
            </View>
          </View>

          {/* Step 3 - Wear Watch */}
          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>3</Text>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Wear your watch to sleep</Text>
            </View>
            <View style={styles.deviceIcon}>
              <View style={styles.watchIcon}>
                <View style={styles.watchFace}>
                  <Text style={styles.watchCenter}>✦</Text>
                  <View style={styles.watchCrown} />
                  <Text style={styles.sunIcon}>☀️</Text>
                </View>
              </View>
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
          style={styles.doneButton}
          onPress={() => {
            console.log("Tutorial completed! Navigating to Dashboard.");
            (navigation as any).navigate("Dashboard");
          }}
        >
          <Text style={styles.doneText}>Done ✓</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Create26;

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
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.black,
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: SIZES.width * 0.05,
  },
  header: {
    ...FONTS.body2,
    color: COLORS.gray,
    marginBottom: SIZES.h5,
  },
  title: {
    ...FONTS.h2,
    color: COLORS.black,
    fontFamily: "Inter-Bold",
    lineHeight: SIZES.h2 * 1.3,
    marginBottom: SIZES.h1 * 1.5,
  },
  stepsContainer: {
    flex: 1,
  },
  stepCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.h3,
    padding: SIZES.h3,
    marginBottom: SIZES.h3,
    elevation: 1,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: COLORS.gray2 + "50",
  },
  stepNumber: {
    ...FONTS.h3,
    color: COLORS.gray,
    fontFamily: "Inter-Bold",
    marginRight: SIZES.h3,
    width: 20,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    ...FONTS.h4,
    color: COLORS.black,
    fontFamily: "Inter-Medium",
    lineHeight: SIZES.h4 * 1.3,
  },
  deviceIcon: {
    marginLeft: SIZES.h3,
  },
  phoneIcon: {
    width: 50,
    height: 60,
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.h4,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  phoneScreen: {
    width: 40,
    height: 45,
    backgroundColor: "#E0F2F1",
    borderRadius: SIZES.h5,
    justifyContent: "center",
    alignItems: "center",
  },
  bedIcon: {
    fontSize: 14,
    marginBottom: 2,
  },
  sleepFocusText: {
    fontSize: 8,
    color: "#00BCD4",
    fontFamily: "Inter-Medium",
  },
  batteryIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  batteryBody: {
    width: 40,
    height: 20,
    backgroundColor: COLORS.gray2,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: COLORS.gray,
    justifyContent: "center",
    alignItems: "center",
  },
  batteryFill: {
    width: 30,
    height: 12,
    backgroundColor: "#FFC107",
    borderRadius: 2,
  },
  batteryTip: {
    width: 3,
    height: 8,
    backgroundColor: COLORS.gray,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    marginLeft: 1,
  },
  watchIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.gray2,
    justifyContent: "center",
    alignItems: "center",
  },
  watchFace: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  watchCenter: {
    fontSize: 12,
    color: "#00BCD4",
  },
  watchCrown: {
    position: "absolute",
    right: -3,
    width: 4,
    height: 8,
    backgroundColor: COLORS.gray,
    borderRadius: 2,
  },
  sunIcon: {
    position: "absolute",
    bottom: 2,
    right: 2,
    fontSize: 8,
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.width * 0.05,
    paddingBottom: SIZES.h1,
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.gray2,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    fontSize: 20,
    color: COLORS.black,
  },
  doneButton: {
    backgroundColor: COLORS.black,
    paddingHorizontal: SIZES.h1 * 1.5,
    paddingVertical: SIZES.h3,
    borderRadius: SIZES.h1,
  },
  doneText: {
    ...FONTS.body2,
    color: COLORS.white,
    fontFamily: "Inter-Medium",
  },
});
