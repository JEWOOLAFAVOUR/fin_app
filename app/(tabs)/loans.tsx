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
          <Text style={styles.title}>My Loans</Text>
          <Text style={styles.subtitle}>
            Track all your loan applications and repayments
          </Text>
        </View>

        {/* Empty State */}
        <View style={styles.emptyStateContainer}>
          <View style={styles.iconContainer}>
            <MaterialIcons 
              name="description" 
              size={64} 
              color={COLORS.gray7} 
            />
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
  emptyStateContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.width * 0.1,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
