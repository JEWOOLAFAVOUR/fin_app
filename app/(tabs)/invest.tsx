import HeaderA from "@/src/components/HeaderA";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const InvestScreen = () => {
  const investmentFeatures = [
    {
      id: 1,
      icon: "trending-up",
      title: "High Returns",
      color: "#4CAF50",
    },
    {
      id: 2,
      icon: "clock",
      title: "Flexible",
      color: "#2196F3",
    },
    {
      id: 3,
      icon: "shield",
      title: "Secure",
      color: "#9C27B0",
    },
  ];

  const investmentPlans = [
    {
      id: 1,
      title: "Carbon Savings",
      description:
        "Earn daily interest on your savings with zero lock-in period",
      percentage: "10%",
      perAnnum: "per annum",
      duration: "Flexible",
      minimum: "₦5,000",
      borderColor: "#4CAF50",
    },
    {
      id: 2,
      title: "Fixed Deposit",
      description: "Lock your funds for 90 days and earn guaranteed returns",
      percentage: "12%",
      perAnnum: "per annum",
      duration: "3 months",
      minimum: "₦50,000",
      borderColor: "#2196F3",
    },
    {
      id: 3,
      title: "Premium Plan",
      description: "Our highest yielding plan for serious investors",
      percentage: "15%",
      perAnnum: "per annum",
      duration: "6 months",
      minimum: "₦100,000",
      borderColor: "#FF9800",
    },
  ];

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={"light-content"} />
      <HeaderA />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.title}>Investments</Text>
          <Text style={styles.subtitle}>
            Grow your wealth with our investment plans
          </Text>
        </View>

        {/* Features Row */}
        <View style={styles.featuresContainer}>
          {investmentFeatures.map((feature) => (
            <View key={feature.id} style={styles.featureItem}>
              <View
                style={[
                  styles.featureIcon,
                  { backgroundColor: `${feature.color}20` },
                ]}
              >
                <Feather
                  name={feature.icon as any}
                  size={24}
                  color={feature.color}
                />
              </View>
              <Text style={styles.featureTitle}>{feature.title}</Text>
            </View>
          ))}
        </View>

        {/* Investment Plans */}
        <View style={styles.plansContainer}>
          {investmentPlans.map((plan) => (
            <View
              key={plan.id}
              style={[styles.planCard, { borderTopColor: plan.borderColor }]}
            >
              <View style={styles.planHeader}>
                <Text style={styles.planTitle}>{plan.title}</Text>
                <View style={styles.percentageContainer}>
                  <Text style={styles.percentage}>{plan.percentage}</Text>
                  <Text style={styles.perAnnum}>{plan.perAnnum}</Text>
                </View>
              </View>

              <Text style={styles.planDescription}>{plan.description}</Text>

              <View style={styles.planDetails}>
                <View style={styles.detailItem}>
                  <Text style={styles.detailLabel}>Duration</Text>
                  <Text style={styles.detailValue}>{plan.duration}</Text>
                </View>
                <View style={styles.detailItem}>
                  <Text style={styles.detailLabel}>Minimum</Text>
                  <Text style={styles.detailValue}>{plan.minimum}</Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.startInvestingButton}
                activeOpacity={0.8}
              >
                <Text style={styles.startInvestingText}>Start Investing</Text>
                <Feather name="arrow-right" size={16} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* My Investments Section */}
        <View style={styles.myInvestmentsSection}>
          <Text style={styles.myInvestmentsTitle}>My Investments</Text>

          <View style={styles.emptyInvestmentsCard}>
            <View style={styles.emptyIconContainer}>
              <MaterialIcons
                name="trending-up"
                size={48}
                color={COLORS.gray7}
              />
            </View>
            <Text style={styles.emptyTitle}>No active investments</Text>
            <Text style={styles.emptySubtitle}>
              Start investing today to grow your wealth
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InvestScreen;

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
    marginBottom: SIZES.h3,
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
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SIZES.h2,
    paddingHorizontal: SIZES.width * 0.02,
  },
  featureItem: {
    alignItems: "center",
    flex: 1,
  },
  featureIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.base,
  },
  featureTitle: {
    ...FONTS.body5,
    color: COLORS.black,
    textAlign: "center",
  },
  plansContainer: {
    marginBottom: SIZES.h2,
  },
  planCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.base,
    padding: SIZES.width * 0.04,
    marginBottom: SIZES.base * 1.5,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderTopWidth: 4,
  },
  planHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: SIZES.base,
  },
  planTitle: {
    ...FONTS.body3a,
    color: COLORS.black,
    flex: 1,
  },
  percentageContainer: {
    alignItems: "flex-end",
  },
  percentage: {
    ...FONTS.h2,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  perAnnum: {
    ...FONTS.body5,
    color: COLORS.gray7,
  },
  planDescription: {
    ...FONTS.body4,
    color: COLORS.gray7,
    lineHeight: 20,
    marginBottom: SIZES.base * 1.5,
  },
  planDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SIZES.base * 1.5,
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    ...FONTS.body5,
    color: COLORS.gray7,
    marginBottom: 4,
  },
  detailValue: {
    ...FONTS.body4b,
    color: COLORS.black,
  },
  startInvestingButton: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.base * 1.2,
    borderRadius: SIZES.radius,
  },
  startInvestingText: {
    ...FONTS.body4b,
    color: COLORS.white,
    marginRight: SIZES.base / 2,
  },
  myInvestmentsSection: {
    marginBottom: SIZES.h3,
  },
  myInvestmentsTitle: {
    ...FONTS.body3a,
    color: COLORS.black,
    marginBottom: SIZES.base * 1.5,
  },
  emptyInvestmentsCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.base,
    padding: SIZES.width * 0.08,
    alignItems: "center",
    justifyContent: "center",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    minHeight: SIZES.height * 0.2,
  },
  emptyIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.chocolateBackground,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.base * 1.5,
  },
  emptyTitle: {
    ...FONTS.body3a,
    color: COLORS.black,
    marginBottom: SIZES.base / 2,
    textAlign: "center",
  },
  emptySubtitle: {
    ...FONTS.body4,
    color: COLORS.gray7,
    textAlign: "center",
    lineHeight: 20,
  },
});
