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

const PayBills = () => {
  const billServices = [
    {
      id: 1,
      title: "Airtime",
      icon: "smartphone",
      color: "#2196F3",
      bgColor: "#E3F2FD",
    },
    {
      id: 2,
      title: "Data",
      icon: "wifi",
      color: "#4CAF50",
      bgColor: "#E8F5E8",
    },
    {
      id: 3,
      title: "Cable TV",
      icon: "tv",
      color: "#9C27B0",
      bgColor: "#F3E5F5",
    },
    {
      id: 4,
      title: "Electricity",
      icon: "zap",
      color: "#FF9800",
      bgColor: "#FFF3E0",
    },
    {
      id: 5,
      title: "Internet",
      icon: "globe",
      color: "#F44336",
      bgColor: "#FFEBEE",
    },
    {
      id: 6,
      title: "Betting",
      icon: "credit-card",
      color: "#795548",
      bgColor: "#EFEBE9",
    },
  ];

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={"light-content"} />
      <HeaderA />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.title}>Bill Payments</Text>
          <Text style={styles.subtitle}>
            Pay your bills instantly and earn cashback
          </Text>
        </View>

        {/* Cashback Offer Card */}
        <View style={styles.offerCard}>
          <View style={styles.offerBadge}>
            <Text style={styles.offerBadgeText}>Special Offer</Text>
          </View>
          <Text style={styles.offerTitle}>Get 2% Cashback</Text>
          <Text style={styles.offerSubtitle}>
            On all bill payments this month
          </Text>
        </View>

        {/* Bill Services Grid */}
        <View style={styles.servicesContainer}>
          <View style={styles.servicesGrid}>
            {billServices.map((service) => (
              <TouchableOpacity
                key={service.id}
                style={styles.serviceItem}
                activeOpacity={0.6}
              >
                <View
                  style={[
                    styles.serviceIcon,
                    { backgroundColor: service.bgColor },
                  ]}
                >
                  <Feather
                    name={service.icon as any}
                    size={24}
                    color={service.color}
                  />
                </View>
                <Text style={styles.serviceTitle}>{service.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Transactions Section */}
        <View style={styles.transactionsSection}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>

          <View style={styles.emptyTransactionsCard}>
            <View style={styles.emptyIconContainer}>
              <MaterialIcons
                name="receipt-long"
                size={48}
                color={COLORS.gray7}
              />
            </View>
            <Text style={styles.emptyTitle}>No transactions yet</Text>
            <Text style={styles.emptySubtitle}>
              Your bill payment history will appear here
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PayBills;

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
  offerCard: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.base * 1.5,
    paddingVertical: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.05,
    marginBottom: SIZES.h3,
    position: "relative",
  },
  offerBadge: {
    position: "absolute",
    top: SIZES.base,
    left: SIZES.width * 0.05,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: SIZES.base,
    paddingVertical: SIZES.base / 2,
    borderRadius: SIZES.radius,
  },
  offerBadgeText: {
    ...FONTS.body5,
    color: COLORS.white,
    fontWeight: "600",
  },
  offerTitle: {
    ...FONTS.h1,
    color: COLORS.white,
    marginTop: SIZES.h4,
    marginBottom: SIZES.base / 2,
  },
  offerSubtitle: {
    ...FONTS.body4,
    color: "rgba(255, 255, 255, 0.9)",
  },
  servicesContainer: {
    marginBottom: SIZES.h2,
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  serviceItem: {
    width: "30%",
    alignItems: "center",
    marginBottom: SIZES.h4,
    padding: SIZES.base,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.base,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  serviceIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.base,
  },
  serviceTitle: {
    ...FONTS.body5,
    color: COLORS.black,
    textAlign: "center",
    fontWeight: "500",
  },
  transactionsSection: {
    marginBottom: SIZES.h3,
  },
  sectionTitle: {
    ...FONTS.body3a,
    color: COLORS.black,
    marginBottom: SIZES.base * 1.5,
  },
  emptyTransactionsCard: {
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
    minHeight: SIZES.height * 0.25,
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
