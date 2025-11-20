import HeaderA from "@/src/components/HeaderA";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import AntDesign from "@expo/vector-icons/AntDesign";
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
  const actionData = [
    { id: 1, title: "Quick Loan", desc: "Instant disbursement", iconName: "" },
    { id: 2, title: "Invest", desc: "Up to 15% returns", iconName: "" },
    { id: 3, title: "Pay Bills", desc: "Airtime & more" },
    { id: 4, title: "Opticom Card", desc: "Virtual card" },
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
                return <View style={styles.actionCtn}></View>;
              }}
            />
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
});
