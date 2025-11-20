import FormButton from "@/src/components/FormButton";
import HeaderA from "@/src/components/HeaderA";
import { COLORS, FONTS, SIZES } from "@/src/constants/theme";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Step2 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.page}>
      <View style={{ flex: 1 }}>
        <HeaderA />
        <View
          style={{
            marginTop: SIZES.height * 0.3,
            marginHorizontal: SIZES.width * 0.1,
          }}
        >
          <Feather
            name="mail"
            size={SIZES.h1}
            color="black"
            style={{ alignSelf: "center", marginBottom: SIZES.h3 }}
          />
          <Text
            style={{
              ...FONTS.body2,
              fontFamily: "Inter-Medium",
              color: COLORS.black,
              textAlign: "center",
              marginBottom: SIZES.h3,
            }}
          >
            Check your inbox!
          </Text>
          <Text
            style={{ ...FONTS.body4, color: COLORS.gray, textAlign: "center" }}
          >
            Please tap on the link we just sent to your email on this device
          </Text>
        </View>
      </View>
      <FormButton
        title={"Resend Link"}
        onPress={() => navigation.navigate("Step3")}
      />
    </SafeAreaView>
  );
};

export default Step2;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.05,
    paddingBottom: SIZES.h1,
  },
});
