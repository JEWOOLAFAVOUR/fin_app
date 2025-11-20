import { COLORS } from "@/src/constants";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding2 = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Text>Onboarding2</Text>
    </SafeAreaView>
  );
};

export default Onboarding2;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
