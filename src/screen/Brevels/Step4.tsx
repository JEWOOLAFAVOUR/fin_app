import FormButton from "@/src/components/FormButton";
import HeaderA from "@/src/components/HeaderA";
import { images } from "@/src/constants";
import { COLORS, FONTS, SIZES } from "@/src/constants/theme";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Step4 = () => {
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
          <Image
            source={images.logo}
            style={{
              height: SIZES.h1 * 1.7,
              width: SIZES.h1 * 1.7,
              alignSelf: "center",
              marginBottom: SIZES.h5,
            }}
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
            Welcome to Bevel
          </Text>
          <Text
            style={{ ...FONTS.body4, color: COLORS.gray, textAlign: "center" }}
          >
            Before you begin, let's take a few minutes to learn more about you!
          </Text>
        </View>
      </View>
      <FormButton
        title={"Continue"}
        onPress={() => navigation.navigate("Create1")}
      />
    </SafeAreaView>
  );
};

export default Step4;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.05,
    paddingBottom: SIZES.h1,
  },
});
