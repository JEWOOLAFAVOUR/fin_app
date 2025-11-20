import { COLORS, FONTS, SIZES } from "@/src/constants";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create19 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Auto-navigate to Create20 after 3.5 seconds
    const timer = setTimeout(() => {
      (navigation as any).navigate("Create20");
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Loading Spinner */}
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size="large" color={COLORS.gray} />
        </View>

        {/* Title and Description */}
        <Text style={styles.title}>Personalizing your experience...</Text>
        <Text style={styles.description}>
          This might take a few minutes.{"\n"}
          Please do not close the app
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Create19;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.width * 0.05,
  },
  spinnerContainer: {
    marginBottom: SIZES.h1 * 2,
  },
  title: {
    ...FONTS.h2,
    color: COLORS.black,
    textAlign: "center",
    marginBottom: SIZES.h3,
    lineHeight: SIZES.h2 * 1.4,
    fontFamily: "Inter-Bold",
  },
  description: {
    ...FONTS.body2,
    color: COLORS.gray,
    textAlign: "center",
    lineHeight: SIZES.body2 * 1.5,
    paddingHorizontal: SIZES.h4,
  },
});
