import { COLORS, SIZES } from "@/src/constants";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.dateText}>Today, September 15</Text>
          <Text style={styles.chevron}>⌄</Text>
        </View>
        <View style={styles.profileIcon}>
          <Text style={styles.profileText}>A</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {/* Status Cards */}
        <View style={styles.statusRow}>
          <View style={styles.statusCard}>
            <View style={styles.statusIcon}>
              <Text style={styles.runnerIcon}>🏃</Text>
            </View>
            <View style={styles.statusInfo}>
              <Text style={styles.statusTitle}>Active</Text>
              <Text style={styles.statusSubtitle}>Until changed</Text>
            </View>
            <Text style={styles.chevronSmall}>⌄</Text>
          </View>

          <View style={styles.weatherCard}>
            <Text style={styles.weatherIcon}>🌤️</Text>
            <View>
              <Text style={styles.temperature}>—°C</Text>
              <Text style={styles.location}>No location</Text>
            </View>
          </View>
        </View>

        {/* Metrics Row */}
        <View style={styles.metricsContainer}>
          {/* Strain */}
          <View style={styles.metricCard}>
            <View style={styles.circularProgress}>
              <View style={styles.strainCircle}>
                <View style={styles.strainProgress} />
                <Text style={styles.metricValue}>0%</Text>
              </View>
            </View>
            <Text style={styles.metricLabel}>Strain</Text>
          </View>

          {/* Recovery */}
          <View style={styles.metricCard}>
            <View style={styles.circularProgress}>
              <View style={styles.recoveryCircle}>
                <Text style={styles.metricValue}>—%</Text>
              </View>
            </View>
            <Text style={styles.metricLabel}>Recovery</Text>
          </View>

          {/* Sleep */}
          <View style={styles.metricCard}>
            <View style={styles.circularProgress}>
              <View style={styles.sleepCircle}>
                <Text style={styles.metricValue}>—%</Text>
              </View>
            </View>
            <Text style={styles.metricLabel}>Sleep</Text>
          </View>
        </View>

        {/* Stress & Energy Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Stress & Energy</Text>
        </View>

        <View style={styles.stressCard}>
          <View style={styles.stressHeader}>
            <View style={styles.stressIndicator} />
            <View style={styles.stressInfo}>
              <Text style={styles.stressTitle}>Today's stress</Text>
              <Text style={styles.stressTime}>Last updated at 12:50 PM</Text>
            </View>
            <View style={styles.stressChart}>
              <View style={styles.stressCircle}>
                <Text style={styles.stressDash}>—</Text>
              </View>
            </View>
            <Text style={styles.arrowIcon}>→</Text>
          </View>

          <View style={styles.stressStats}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Highest</Text>
              <View style={styles.statBar} />
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Lowest</Text>
              <View style={styles.statBar} />
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Average</Text>
              <View style={styles.statBar} />
            </View>
          </View>
        </View>

        {/* Energy Bar */}
        <View style={styles.energyCard}>
          <Text style={styles.energyIcon}>⚡</Text>
          <View style={styles.energyBar}>
            <View style={styles.energyFill} />
          </View>
          <Text style={styles.energyPercent}>1%</Text>
        </View>

        {/* Nutrition Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Nutrition</Text>
        </View>

        <View style={styles.nutritionCard}>
          <View style={styles.nutritionHeader}>
            <Text style={styles.nutritionTitle}>Today's foods</Text>
            <Text style={styles.arrowIcon}>→</Text>
          </View>

          <View style={styles.nutritionStats}>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionIcon}>🥩</Text>
              <Text style={styles.nutritionValue}>0g</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionIcon}>🌾</Text>
              <Text style={styles.nutritionValue}>0g</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionIcon}>🥑</Text>
              <Text style={styles.nutritionValue}>0g</Text>
            </View>
          </View>

          <View style={styles.nutritionBar} />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIconActive}>🏠</Text>
          <Text style={styles.navLabelActive}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📋</Text>
          <Text style={styles.navLabel}>Journal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItemCenter}>
          <View style={styles.addButton}>
            <Text style={styles.addIcon}>+</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏃</Text>
          <Text style={styles.navLabel}>Fitness</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>❤️</Text>
          <Text style={styles.navLabel}>Biology</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h2,
    paddingBottom: SIZES.h4,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: "Inter-SemiBold",
  },
  chevron: {
    fontSize: 14,
    color: COLORS.gray,
    marginLeft: 6,
  },
  profileIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#C5E4F3",
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: "Inter-Medium",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: SIZES.width * 0.05,
  },
  statusRow: {
    flexDirection: "row",
    marginBottom: SIZES.h4,
    gap: 10,
  },
  statusCard: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  statusIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#00D4AA",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  runnerIcon: {
    fontSize: 16,
  },
  statusInfo: {
    flex: 1,
  },
  statusTitle: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: "Inter-SemiBold",
  },
  statusSubtitle: {
    fontSize: 11,
    color: "#8E8E93",
    marginTop: 2,
  },
  chevronSmall: {
    fontSize: 12,
    color: "#8E8E93",
  },
  weatherCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  weatherIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  temperature: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: "Inter-SemiBold",
  },
  location: {
    fontSize: 11,
    color: "#8E8E93",
    marginTop: 2,
  },
  metricsContainer: {
    flexDirection: "row",
    marginBottom: SIZES.h3,
    gap: 8,
  },
  metricCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  circularProgress: {
    marginBottom: 12,
  },
  strainCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  strainProgress: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: "transparent",
    borderTopColor: "#F59E0B",
    top: 5,
    left: 5,
    transform: [{ rotate: "45deg" }],
  },
  recoveryCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  sleepCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  metricValue: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: "Inter-Bold",
  },
  metricLabel: {
    fontSize: 12,
    color: "#8E8E93",
    fontFamily: "Inter-Medium",
    marginTop: 4,
  },
  sectionHeader: {
    marginBottom: 12,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: "Inter-Bold",
  },
  stressCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  stressHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  stressIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00D4AA",
    marginRight: 8,
  },
  stressInfo: {
    flex: 1,
  },
  stressTitle: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: "Inter-SemiBold",
  },
  stressTime: {
    fontSize: 11,
    color: "#8E8E93",
    marginTop: 2,
  },
  stressChart: {
    marginRight: 12,
  },
  stressCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  stressDash: {
    fontSize: 16,
    color: "#8E8E93",
    fontWeight: "bold",
  },
  arrowIcon: {
    fontSize: 14,
    color: "#8E8E93",
  },
  stressStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  statItem: {
    alignItems: "center",
  },
  statLabel: {
    fontSize: 11,
    color: "#8E8E93",
    marginBottom: 6,
  },
  statBar: {
    width: 24,
    height: 3,
    backgroundColor: "#E5E5E5",
    borderRadius: 2,
  },
  energyCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  energyIcon: {
    fontSize: 16,
    marginRight: 12,
  },
  energyBar: {
    flex: 1,
    height: 4,
    backgroundColor: "#E5E5E5",
    borderRadius: 2,
    marginRight: 12,
  },
  energyFill: {
    width: "1%",
    height: "100%",
    backgroundColor: "#FF6B35",
    borderRadius: 2,
  },
  energyPercent: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: "Inter-SemiBold",
  },
  nutritionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  nutritionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  nutritionTitle: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: "Inter-SemiBold",
  },
  nutritionStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  nutritionItem: {
    alignItems: "center",
  },
  nutritionIcon: {
    fontSize: 18,
    marginBottom: 6,
  },
  nutritionValue: {
    fontSize: 12,
    color: "#8E8E93",
    fontFamily: "Inter-Medium",
  },
  nutritionBar: {
    height: 3,
    backgroundColor: "#E5E5E5",
    borderRadius: 2,
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    paddingVertical: 8,
    paddingHorizontal: SIZES.width * 0.05,
    paddingBottom: 12,
    borderTopWidth: 0.5,
    borderTopColor: "#E5E5E5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 5,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 4,
  },
  navItemCenter: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 4,
  },
  navIconActive: {
    fontSize: 18,
    marginBottom: 3,
    color: COLORS.black,
  },
  navIcon: {
    fontSize: 18,
    marginBottom: 3,
    color: "#8E8E93",
  },
  navLabelActive: {
    fontSize: 10,
    color: COLORS.black,
    fontFamily: "Inter-Medium",
  },
  navLabel: {
    fontSize: 10,
    color: "#8E8E93",
    fontFamily: "Inter-Regular",
  },
  addButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  addIcon: {
    fontSize: 20,
    color: "#8E8E93",
    fontFamily: "Inter-Medium",
  },
});
