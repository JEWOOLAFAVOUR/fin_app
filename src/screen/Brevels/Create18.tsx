import FormButton from "@/src/components/FormButton";
import HeaderB from "@/src/components/HeaderB";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create18 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.page}>
      <View style={{ flex: 1 }}>
        <HeaderB />
        <View style={styles.content}>
          <Text style={styles.title}>
            Now, let's build your personalized experience.
          </Text>
        </View>
      </View>

      <FormButton
        title="Continue"
        onPress={() => {
          console.log("Starting personalization process");
          (navigation as any).navigate("Create19");
        }}
      />
    </SafeAreaView>
  );
};

export default Create18;

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
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    ...FONTS.h1,
    color: COLORS.black,
    textAlign: "center",
    lineHeight: SIZES.h1 * 1.4,
    fontFamily: "Inter-Bold",
    paddingHorizontal: SIZES.h4,
  },
});
