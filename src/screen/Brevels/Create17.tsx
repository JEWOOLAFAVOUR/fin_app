import FormButton from "@/src/components/FormButton";
import HeaderB from "@/src/components/HeaderB";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create17 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.page}>
      <View style={{ flex: 1 }}>
        <HeaderB />
        <View style={styles.content}>
          {/* Bell Icon */}
          <View style={styles.iconContainer}>
            <Text style={styles.bellIcon}>🔔</Text>
          </View>

          {/* Title and Description */}
          <Text style={styles.title}>Let us help you with your goals</Text>
          <Text style={styles.description}>
            Get updates on your progress and reminders to track your goals and
            activities.
          </Text>

          {/* Notification Preview */}
          <View style={styles.phonePreview}>
            <View style={styles.phoneFrame}>
              <View style={styles.notificationCard}>
                <View style={styles.notificationHeader}>
                  <View style={styles.bevelLogo}>
                    <Text style={styles.logoText}>B</Text>
                  </View>
                  <View style={styles.notificationContent}>
                    <Text style={styles.notificationTitle}>
                      Time to wind down
                    </Text>
                    <Text style={styles.notificationTime}>3:51 PM</Text>
                  </View>
                </View>
                <View style={styles.notificationProgress}>
                  <View style={styles.progressBar}>
                    <View style={styles.progressFill} />
                  </View>
                </View>
              </View>

              {/* Phone screen content area */}
              <View style={styles.phoneContent}>
                {/* Grid layout to simulate home screen */}
                {[...Array(12)].map((_, index) => (
                  <View key={index} style={styles.appIcon} />
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>

      <FormButton
        title="Enable notifications"
        onPress={() => {
          console.log("Requesting notification permissions");
          (navigation as any).navigate("Create18");
        }}
      />
    </SafeAreaView>
  );
};

export default Create17;

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
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.gray2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.h1 * 1.5,
  },
  bellIcon: {
    fontSize: 32,
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
    marginBottom: SIZES.h1 * 2,
  },
  phonePreview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  phoneFrame: {
    width: SIZES.width * 0.7,
    height: SIZES.height * 0.35,
    backgroundColor: "#F8F9FA",
    borderRadius: SIZES.h2,
    padding: SIZES.h4,
    elevation: 3,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  notificationCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.h4,
    padding: SIZES.h4,
    marginBottom: SIZES.h4,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  notificationHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SIZES.h5,
  },
  bevelLogo: {
    width: 24,
    height: 24,
    borderRadius: 6,
    backgroundColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SIZES.h5,
  },
  logoText: {
    color: COLORS.white,
    fontSize: 12,
    fontFamily: "Inter-Bold",
  },
  notificationContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notificationTitle: {
    ...FONTS.body3,
    color: COLORS.black,
    fontFamily: "Inter-Medium",
  },
  notificationTime: {
    ...FONTS.body4,
    color: COLORS.gray,
  },
  notificationProgress: {
    width: "100%",
  },
  progressBar: {
    height: 3,
    backgroundColor: COLORS.gray2,
    borderRadius: 1.5,
    overflow: "hidden",
  },
  progressFill: {
    width: "60%",
    height: "100%",
    backgroundColor: COLORS.black,
    borderRadius: 1.5,
  },
  phoneContent: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "flex-start",
  },
  appIcon: {
    width: (SIZES.width * 0.7 - SIZES.h4 * 2 - SIZES.h5 * 2) / 3,
    height: (SIZES.width * 0.7 - SIZES.h4 * 2 - SIZES.h5 * 2) / 3,
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.h5,
    marginBottom: SIZES.h5,
  },
});
