import FormButton from "@/src/components/FormButton";
import HeaderB from "@/src/components/HeaderB";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create13 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.page}>
      <View style={{ flex: 1 }}>
        <HeaderB />
        <View style={styles.content}>
          {/* User Icon */}
          <View style={styles.iconContainer}>
            <View style={styles.userIcon}>
              <View style={styles.userHead} />
              <View style={styles.userBody} />
            </View>
          </View>

          {/* Title and Description */}
          <Text style={styles.title}>A bit about you</Text>
          <Text style={styles.description}>
            Now that we know what you want to improve on, help us tailor the
            experience for you.
          </Text>
        </View>
      </View>

      <FormButton
        title="Continue"
        onPress={() => {
          (navigation as any).navigate("Create15");
        }}
      />
    </SafeAreaView>
  );
};

export default Create13;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.05,
    paddingBottom: SIZES.h1,
  },
  content: {
    flex: 1,
    paddingTop: SIZES.h2,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.gray2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.h1 * 2,
  },
  userIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
  userHead: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.gray,
    marginBottom: 8,
  },
  userBody: {
    width: 40,
    height: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.gray,
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
