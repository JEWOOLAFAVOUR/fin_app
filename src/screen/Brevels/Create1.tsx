import FormButton from "@/src/components/FormButton";
import FormInput from "@/src/components/FormInput";
import HeaderB from "@/src/components/HeaderB";
import { COLORS, FONTS, SIZES } from "@/src/constants/theme";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create1 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.page}>
      <View style={{ flex: 1 }}>
        <HeaderB />
        <View style={{ marginTop: SIZES.height * 0.37 }}>
          <Text
            style={{
              ...FONTS.body3a,
              fontFamily: "Inter-Medium",
              color: COLORS.black,
              textAlign: "center",
              marginBottom: SIZES.h3,
            }}
          >
            What's your first name?
          </Text>
          <FormInput placeholder="(e.g. John)" />
        </View>
      </View>
      <FormButton
        title={"Continue"}
        onPress={() => navigation.navigate("Create2")}
      />
    </SafeAreaView>
  );
};

export default Create1;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.05,
    paddingBottom: SIZES.h1,
  },
});
