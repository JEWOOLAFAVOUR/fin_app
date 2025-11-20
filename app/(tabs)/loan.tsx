import HeaderA from "@/src/components/HeaderA";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoanScreen = () => {
  const [loanAmount, setLoanAmount] = useState("50,000");
  const [duration, setDuration] = useState("30 days (1 month)");
  const [showDurationPicker, setShowDurationPicker] = useState(false);

  const interestRate = "5% per month";
  const repaymentDate = "12/20/2025";
  const principalAmount = 50000;
  const interestAmount = 2500;
  const totalRepayment = principalAmount + interestAmount;

  const durationOptions = [
    "30 days (1 month)",
    "60 days (2 months)",
    "90 days (3 months)",
    "120 days (4 months)",
  ];

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={"light-content"} />
      <HeaderA />
      <View
        style={{ paddingHorizontal: SIZES.width * 0.05, paddingTop: SIZES.h3 }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Feather name="arrow-left" size={SIZES.h2 * 1.2} color="black" />
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.black,
              marginLeft: SIZES.base,
            }}
          >
            Back to Home
          </Text>
        </TouchableOpacity>

        {/* calculator container */}
        <View style={styles.loanCtn}>
          {/* Header with bolt icon */}
          <View style={styles.headerRow}>
            <MaterialIcons
              name="electric-bolt"
              size={24}
              color={COLORS.primary}
            />
            <Text
              style={[
                FONTS.body3a,
                { color: COLORS.black, marginLeft: SIZES.base },
              ]}
            >
              Quick Loan Calculator
            </Text>
          </View>

          {/* Amount Input */}
          <View style={styles.inputSection}>
            <Text
              style={[
                FONTS.body4,
                { color: COLORS.black, marginBottom: SIZES.base },
              ]}
            >
              How much do you need?
            </Text>
            <View style={styles.amountInputContainer}>
              <Text style={styles.currencySymbol}>₦</Text>
              <TextInput
                style={styles.amountInput}
                value={loanAmount}
                onChangeText={setLoanAmount}
                keyboardType="numeric"
                placeholder="0"
              />
            </View>
            <View style={styles.amountSlider}>
              <Text style={[FONTS.body5, { color: COLORS.gray7 }]}>₦5,000</Text>
              <Text style={[FONTS.body5, { color: COLORS.gray7 }]}>
                ₦500,000
              </Text>
            </View>
          </View>

          {/* Duration Picker */}
          <View style={styles.inputSection}>
            <Text
              style={[
                FONTS.body4,
                { color: COLORS.black, marginBottom: SIZES.base },
              ]}
            >
              Repayment Duration
            </Text>
            <TouchableOpacity
              style={styles.durationPicker}
              onPress={() => setShowDurationPicker(!showDurationPicker)}
            >
              <Text style={[FONTS.body4, { color: COLORS.black }]}>
                {duration}
              </Text>
              <Feather name="chevron-down" size={20} color={COLORS.gray7} />
            </TouchableOpacity>
          </View>

          {/* Loan Details */}
          <View style={styles.detailsSection}>
            {/* Interest Rate */}
            <View style={styles.detailRow}>
              <View style={styles.detailLabel}>
                <MaterialIcons name="percent" size={16} color={COLORS.gray7} />
                <Text
                  style={[FONTS.body4, { color: COLORS.gray7, marginLeft: 4 }]}
                >
                  Interest Rate
                </Text>
              </View>
              <Text style={[FONTS.body4, { color: COLORS.black }]}>
                {interestRate}
              </Text>
            </View>

            {/* Repayment Date */}
            <View style={styles.detailRow}>
              <View style={styles.detailLabel}>
                <Feather name="calendar" size={16} color={COLORS.gray7} />
                <Text
                  style={[FONTS.body4, { color: COLORS.gray7, marginLeft: 4 }]}
                >
                  Repayment Date
                </Text>
              </View>
              <Text style={[FONTS.body4, { color: COLORS.black }]}>
                {repaymentDate}
              </Text>
            </View>

            {/* Loan Amount */}
            <View style={styles.summaryRow}>
              <Text style={[FONTS.body4, { color: COLORS.black }]}>
                Loan Amount
              </Text>
              <Text style={[FONTS.body4, { color: COLORS.black }]}>
                ₦{principalAmount.toLocaleString()}
              </Text>
            </View>

            {/* Interest */}
            <View style={styles.summaryRow}>
              <Text style={[FONTS.body4, { color: COLORS.black }]}>
                Interest
              </Text>
              <Text style={[FONTS.body4, { color: COLORS.black }]}>
                ₦{interestAmount.toLocaleString()}
              </Text>
            </View>

            {/* Total Repayment */}
            <View style={[styles.summaryRow, styles.totalRow]}>
              <Text style={[FONTS.body3a, { color: COLORS.black }]}>
                Total Repayment
              </Text>
              <Text style={[FONTS.body3a, { color: COLORS.primary }]}>
                ₦{totalRepayment.toLocaleString()}
              </Text>
            </View>
          </View>

          {/* Continue Button */}
          <TouchableOpacity style={styles.continueButton} activeOpacity={0.8}>
            <Text style={[FONTS.body4b, { color: COLORS.white }]}>
              Continue to Application
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoanScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  loanCtn: {
    borderWidth: 1,
    borderColor: COLORS.chocolateBackground,
    paddingVertical: SIZES.h3,
    paddingHorizontal: SIZES.width * 0.04,
    marginTop: SIZES.h4,
    borderRadius: SIZES.base,
    elevation: 1,
    backgroundColor: COLORS.white,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SIZES.h3,
  },
  inputSection: {
    marginBottom: SIZES.h3,
  },
  amountInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.chocolateBackground,
    paddingBottom: SIZES.base,
  },
  currencySymbol: {
    ...FONTS.h1,
    color: COLORS.primary,
    marginRight: SIZES.base,
  },
  amountInput: {
    flex: 1,
    ...FONTS.h1,
    color: COLORS.primary,
    padding: 0,
    margin: 0,
    textAlign: "right",
  },
  amountSlider: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SIZES.base,
  },
  durationPicker: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.chocolateBackground,
    paddingVertical: SIZES.base * 1.2,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  detailsSection: {
    marginTop: SIZES.h4,
    marginBottom: SIZES.h3,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.base * 1.5,
  },
  detailLabel: {
    flexDirection: "row",
    alignItems: "center",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: SIZES.base / 2,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: COLORS.chocolateBackground,
    paddingTop: SIZES.base,
    marginTop: SIZES.base,
  },
  continueButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.base * 1.5,
    borderRadius: SIZES.radius,
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.h4,
  },
});
