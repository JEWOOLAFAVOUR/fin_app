import { COLORS } from "@/src/constants";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding3 = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Text>Onboarding3</Text>
    </SafeAreaView>
  );
};

export default Onboarding3;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
