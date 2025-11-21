import HeaderA from "@/src/components/HeaderA";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const handleActionPress = (actionId: number) => {
    switch (actionId) {
      case 1: // Quick Loan
        router.push("/(tabs)/loan");
        break;
      case 2: // Invest
        router.push("/(tabs)/invest");
        break;
      case 3: // Pay Bills
        router.push("/paybills");
        break;
      case 4: // Opticom Card
        // No navigation for this one as requested
        break;
      default:
        break;
    }
  };

  const actionData = [
    {
      id: 1,
      title: "Quick Loan",
      desc: "Instant disbursement",
      icon: "zap",
      iconColor: "#4CAF50",
      bgColor: "#E8F5E8",
    },
    {
      id: 2,
      title: "Invest",
      desc: "Up to 15% returns",
      icon: "trending-up",
      iconColor: "#2196F3",
      bgColor: "#E3F2FD",
    },
    {
      id: 3,
      title: "Pay Bills",
      desc: "Airtime & more",
      icon: "credit-card",
      iconColor: "#FF9800",
      bgColor: "#FFF3E0",
    },
    {
      id: 4,
      title: "Opticom Card",
      desc: "Virtual card",
      icon: "credit-card",
      iconColor: "#9C27B0",
      bgColor: "#F3E5F5",
    },
  ];
  const RenderHeader = () => {
    return (
      <View>
        <View style={styles.headerCtn}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // alignItems: "center",
            }}
          >
            <View>
              <Text style={{ ...FONTS.body4b, color: COLORS.white }}>
                Your Credit Score
              </Text>
              <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.white,
                  fontFamily: "Inter-Medium",
                  // marginTop: SIZES.base,
                }}
              >
                750{" "}
                <Text style={{ ...FONTS.body5, color: COLORS.white }}>
                  / 850
                </Text>
              </Text>
            </View>
            <View
              style={{
                height: SIZES.h1 * 1.2,
                width: SIZES.h1 * 1.2,
                backgroundColor: "#33be8f",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
              }}
            >
              <AntDesign name="star" size={SIZES.h2} color={COLORS.white} />
            </View>
          </View>
          {/* ruler */}
          <View
            style={{
              height: SIZES.radius,
              backgroundColor: COLORS.chocolateBackground,
              borderRadius: SIZES.base,
              justifyContent: "center",
              marginVertical: SIZES.radius,
            }}
          >
            <View
              style={{
                height: SIZES.radius,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.base,
                width: SIZES.width * 0.7,
              }}
            />
          </View>
          <Text style={{ ...FONTS.body4b, color: COLORS.white }}>
            Excellent! You qualify for better rates
          </Text>
        </View>
        {/* available loan limit */}
        <View
          style={{
            height: SIZES.h1 * 2.8,
            borderWidth: 1,
            borderRadius: SIZES.base,
            borderColor: COLORS.primary,
            marginTop: SIZES.h4 * 1.1,
            marginBottom: SIZES.h4 * 1.1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: SIZES.width * 0.04,
            elevation: 3,
            backgroundColor: COLORS.white,
          }}
        >
          <View>
            <Text style={{ ...FONTS.body4b, color: COLORS.black }}>
              Available Loan Limit
            </Text>
            <Text style={{ ...FONTS.body2c, color: COLORS.primary }}>
              ₦500,000
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              height: SIZES.h1,
              width: SIZES.width * 0.25,
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.radius,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.body4b, color: COLORS.white }}>
              Get Loan
            </Text>
          </TouchableOpacity>
        </View>
        {/* quick actions */}
        <View>
          <Text style={{ ...FONTS.body3a, color: COLORS.black }}>
            Quick Actions
          </Text>
          <View style={{ marginTop: SIZES.base }}>
            <FlatList
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              data={actionData}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={styles.actionCtn}
                    activeOpacity={0.6}
                    onPress={() => handleActionPress(item.id)}
                  >
                    <View style={styles.actionContent}>
                      <View
                        style={[
                          styles.actionIcon,
                          { backgroundColor: item.bgColor },
                        ]}
                      >
                        <Feather
                          name={item.icon as any}
                          size={24}
                          color={item.iconColor}
                        />
                      </View>
                      <View style={styles.actionText}>
                        <Text style={styles.actionTitle}>{item.title}</Text>
                        <Text style={styles.actionDesc}>{item.desc}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>

        {/* Refer & Earn Section */}
        <View style={styles.referSection}>
          <View style={styles.referContent}>
            <View style={styles.referLeft}>
              <View style={styles.referIcon}>
                <MaterialIcons
                  name="card-giftcard"
                  size={24}
                  color={COLORS.white}
                />
              </View>
              <View>
                <Text style={styles.referTitle}>Refer & Earn</Text>
                <Text style={styles.referDesc}>
                  Invite friends and earn ₦2,000 for each successful referral
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.shareButton} activeOpacity={0.8}>
            <Text style={styles.shareButtonText}>Share Now</Text>
            <Feather name="arrow-right" size={16} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        {/* Recent Activity Section */}
        <View style={styles.activitySection}>
          <View style={styles.activityHeader}>
            <Text style={styles.activityTitle}>Recent Activity</Text>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.emptyActivityCard}>
            <Text style={styles.emptyActivityTitle}>No recent activity</Text>
            <Text style={styles.emptyActivityDesc}>
              Your transactions will appear here
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={"light-content"} />
      <HeaderA />
      <FlatList
        data={[""]}
        renderItem={() => null}
        ListHeaderComponent={RenderHeader}
        contentContainerStyle={{ paddingHorizontal: SIZES.width * 0.05 }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerCtn: {
    height: SIZES.h1 * 4.6,
    borderRadius: SIZES.base * 1.3,
    backgroundColor: COLORS.primary,
    marginTop: SIZES.h3,
    paddingHorizontal: SIZES.width * 0.04,
    justifyContent: "center",
  },
  actionCtn: {
    height: SIZES.height * 0.19,
    width: SIZES.width * 0.43,
    borderWidth: 1,
    borderRadius: SIZES.base,
    marginBottom: SIZES.h3,
    borderColor: COLORS.chocolateBackground,
    backgroundColor: COLORS.white,
    elevation: 1,
  },
  actionContent: {
    flex: 1,
    padding: SIZES.base * 1.2,
    justifyContent: "center",
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.base * 1.2,
  },
  actionText: {
    flex: 1,
  },
  actionTitle: {
    ...FONTS.body4b,
    color: COLORS.black,
    marginBottom: SIZES.base / 2,
  },
  actionDesc: {
    ...FONTS.body5,
    color: COLORS.gray7,
    lineHeight: 18,
  },
  referSection: {
    backgroundColor: "#9C27B0",
    borderRadius: SIZES.base * 1.5,
    padding: SIZES.width * 0.05,
    marginTop: SIZES.h4,
    marginBottom: SIZES.h3,
  },
  referContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: SIZES.base * 1.5,
  },
  referLeft: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
  },
  referIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: SIZES.base,
  },
  referTitle: {
    ...FONTS.body3a,
    color: COLORS.white,
    marginBottom: SIZES.base / 2,
  },
  referDesc: {
    ...FONTS.body5,
    color: "rgba(255, 255, 255, 0.9)",
    lineHeight: 18,
  },
  shareButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.base * 1.5,
    borderRadius: SIZES.radius,
    alignSelf: "flex-start",
  },
  shareButtonText: {
    ...FONTS.body4b,
    color: COLORS.white,
    marginRight: SIZES.base / 2,
  },
  activitySection: {
    marginBottom: SIZES.h3,
  },
  activityHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.base * 1.5,
  },
  activityTitle: {
    ...FONTS.body3a,
    color: COLORS.black,
  },
  seeAllText: {
    ...FONTS.body4,
    color: COLORS.primary,
  },
  emptyActivityCard: {
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
    minHeight: SIZES.height * 0.15,
  },
  emptyActivityTitle: {
    ...FONTS.body4b,
    color: COLORS.black,
    marginBottom: SIZES.base / 2,
    textAlign: "center",
  },
  emptyActivityDesc: {
    ...FONTS.body5,
    color: COLORS.gray7,
    textAlign: "center",
  },
});
