import FormButton from "@/src/components/FormButton";
import HeaderB from "@/src/components/HeaderB";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create2 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.page}>
      <View style={{ flex: 1 }}>
        <HeaderB />
        <View style={{ alignItems: "center", marginTop: SIZES.height * 0.33 }}>
          <Text style={{ ...FONTS.h1 }}>👋🏾</Text>
          <Text
            style={{ ...FONTS.h3, color: COLORS.black, marginTop: SIZES.h5 }}
          >
            Nice to meet you, Sam
          </Text>
          <Text
            style={{
              textAlign: "center",
              ...FONTS.body4,
              color: COLORS.gray,
              marginTop: SIZES.base,
            }}
          >
            Bevel is your health companion, helping you track fitness,
            nultrition, and sleep.
          </Text>
        </View>
      </View>
      <FormButton
        title="Continue"
        onPress={() => navigation.navigate("Create3")}
      />
    </SafeAreaView>
  );
};

export default Create2;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.05,
    paddingBottom: SIZES.h1,
  },
});
