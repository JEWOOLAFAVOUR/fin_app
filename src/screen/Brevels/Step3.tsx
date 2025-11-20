import FormButton from "@/src/components/FormButton";
import HeaderA from "@/src/components/HeaderA";
import { COLORS, FONTS, SIZES } from "@/src/constants/theme";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Step3 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.page}>
      <View style={{ flex: 1 }}>
        <HeaderA />
        <View
          style={{
            marginTop: SIZES.height * 0.2,
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
            Privacy by design
          </Text>
          <Text
            style={{ ...FONTS.body4, color: COLORS.gray, textAlign: "center" }}
          >
            All health data is stored and processed locally. We never sell or
            share your information with third parties.
          </Text>
        </View>
        {/* container */}
        <View style={styles.container}>
          <View style={{ paddingHorizontal: SIZES.width * 0.04 }}>
            <Text>Terms of Service</Text>
          </View>
          <View
            style={{
              height: 1,
              width: "auto",
              backgroundColor: COLORS.chocolateBackground,
              marginVertical: SIZES.h5,
            }}
          />
          <View style={{ paddingHorizontal: SIZES.width * 0.04 }}>
            <Text>Privacy Policy</Text>
          </View>
        </View>
      </View>
      <FormButton
        title={"Accept and continue"}
        onPress={() => navigation.navigate("Step4")}
      />
      <Text style={{ ...FONTS.body4, color: COLORS.gray2 }}>
        By tapping on "Accept and continue", you agree to our Terms of Service
        and Privacy Policy"
      </Text>
    </SafeAreaView>
  );
};

export default Step3;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.05,
    paddingBottom: SIZES.h1,
  },
  container: {
    height: SIZES.height * 0.12,
    borderWidth: 1,
    borderColor: COLORS.chocolateBackground,
    borderRadius: SIZES.h5,
    marginTop: SIZES.h4,
    justifyContent: "center",
  },
});
