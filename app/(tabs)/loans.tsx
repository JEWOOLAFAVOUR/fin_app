import HeaderA from "@/src/components/HeaderA";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const loans = () => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={"light-content"} />
      <HeaderA />

      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.title}>My Loansss</Text>
          <Text style={styles.subtitle}>
            Track all your loan applications and repayments
          </Text>
        </View>

        {/* Empty State Card */}
        <View style={styles.emptyStateCard}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="description" size={48} color={COLORS.gray7} />
          </View>

          <Text style={styles.emptyStateTitle}>No active loans</Text>
          <Text style={styles.emptyStateSubtitle}>
            You haven't taken any loans yet
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default loans;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h3,
  },
  headerSection: {
    marginBottom: SIZES.h2,
  },
  title: {
    ...FONTS.h2,
    color: COLORS.black,
    marginBottom: SIZES.base / 2,
  },
  subtitle: {
    ...FONTS.body4,
    color: COLORS.gray7,
  },
  emptyStateCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.base,
    paddingVertical: SIZES.h2 * 1.5,
    paddingHorizontal: SIZES.width * 0.08,
    alignItems: "center",
    justifyContent: "center",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginTop: SIZES.h4,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.chocolateBackground,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.h3,
  },
  emptyStateTitle: {
    ...FONTS.body3a,
    color: COLORS.black,
    marginBottom: SIZES.base,
    textAlign: "center",
  },
  emptyStateSubtitle: {
    ...FONTS.body4,
    color: COLORS.gray7,
    textAlign: "center",
    lineHeight: 20,
  },
});
